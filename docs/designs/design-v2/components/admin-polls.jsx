// Admin · Polls Builder (rebuild)
// Three states rendered as separate artboards:
//   AdminPollsPage        — builder w/ real drag-reorder, image drop+crop, option DnD
//   AdminPollsLive        — in-progress HUD (第 N/M 題 · 剩餘 mm:ss · 即時結果長條)
//   AdminPollsResults     — after-end result visualization

// ---------- shared constants
const pollTokens = {
  grabCursor: 'grab',
  dragCursor: 'grabbing',
  dropHint: 'rgba(125,211,252,0.12)',
};

// ============================================================================
// AdminPollsPage — Builder (multi-question queue + per-Q editor w/ image crop)
// ============================================================================
function AdminPollsPage({ theme = 'dark' }) {
  const [questions, setQuestions] = React.useState([
    {
      id: 'q1', text: '新版 onboarding 哪一版最直覺?',
      timer: 90, multi: false, crop: '16:9',
      options: [
        { id: 'a', label: '版本 A · 全螢幕引導', img: true },
        { id: 'b', label: '版本 B · 浮動提示',   img: true },
        { id: 'c', label: '版本 C · 影片教學',   img: true },
        { id: 'd', label: '都還可以接受',         img: false },
      ],
    },
    {
      id: 'q2', text: '你覺得現在進度合理嗎?',
      timer: 180, multi: false, crop: '16:9',
      options: [
        { id: 'a', label: '太趕了 · 放慢', img: false },
        { id: 'b', label: '剛好',          img: false },
        { id: 'c', label: '可以再加快',    img: false },
      ],
    },
    {
      id: 'q3', text: '最喜歡哪一個 logo?',
      timer: 0, multi: false, crop: '1:1',
      options: [
        { id: 'a', label: '提案 1', img: true },
        { id: 'b', label: '提案 2', img: true },
        { id: 'c', label: '提案 3', img: true },
      ],
    },
    {
      id: 'q4', text: 'Q4 要不要辦實體 Meetup?',
      timer: 90, multi: false, crop: '16:9',
      options: [
        { id: 'a', label: '要',   img: false },
        { id: 'b', label: '不要', img: false },
      ],
    },
  ]);
  const [activeId, setActiveId] = React.useState('q1');
  const [dragQId, setDragQId] = React.useState(null);   // dragging Q
  const [dragOverQ, setDragOverQ] = React.useState(null);
  const [dragOptId, setDragOptId] = React.useState(null);
  const [dragOverOpt, setDragOverOpt] = React.useState(null);

  const active = questions.find(q => q.id === activeId) || questions[0];
  const activeIdx = questions.findIndex(q => q.id === activeId);

  const patchQ = (id, v) => setQuestions(qs => qs.map(q => q.id === id ? { ...q, ...v } : q));
  const patchOpt = (qid, oid, v) => setQuestions(qs => qs.map(q => q.id !== qid ? q : ({
    ...q, options: q.options.map(o => o.id === oid ? { ...o, ...v } : o),
  })));

  // reorder Q on drop
  const onDropQ = (targetId) => {
    if (!dragQId || dragQId === targetId) return;
    setQuestions(qs => {
      const from = qs.findIndex(q => q.id === dragQId);
      const to = qs.findIndex(q => q.id === targetId);
      if (from < 0 || to < 0) return qs;
      const next = qs.slice();
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return next;
    });
    setDragQId(null); setDragOverQ(null);
  };
  // reorder option
  const onDropOpt = (qid, targetOid) => {
    if (!dragOptId || dragOptId === targetOid) return;
    setQuestions(qs => qs.map(q => {
      if (q.id !== qid) return q;
      const from = q.options.findIndex(o => o.id === dragOptId);
      const to = q.options.findIndex(o => o.id === targetOid);
      if (from < 0 || to < 0) return q;
      const next = q.options.slice();
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return { ...q, options: next };
    }));
    setDragOptId(null); setDragOverOpt(null);
  };

  return (
    <AdminPageShell route="polls" title="投票" en="POLL · 多題目 · 拖曳排序 · 每題可上傳圖片" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => (
        <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 20 }}>
          {/* LEFT · Question queue with real drag-reorder */}
          <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 18, height: 'fit-content' }}>
            <CardHeader title="題目佇列" en="QUEUE · 按住 ⋮⋮ 拖曳排序" textDim={textDim} />
            <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {questions.map((q, i) => {
                const isActive = q.id === activeId;
                const isDragging = q.id === dragQId;
                const isOver = dragOverQ === q.id && dragQId && dragQId !== q.id;
                const hasImg = q.options.some(o => o.img);
                return (
                  <React.Fragment key={q.id}>
                    {isOver && (
                      <div style={{
                        height: 3, background: accent, borderRadius: 2,
                        boxShadow: `0 0 8px ${accent}`, margin: '-3px 0',
                      }} />
                    )}
                    <div
                      draggable
                      onDragStart={() => setDragQId(q.id)}
                      onDragEnd={() => { setDragQId(null); setDragOverQ(null); }}
                      onDragOver={(e) => { e.preventDefault(); setDragOverQ(q.id); }}
                      onDrop={(e) => { e.preventDefault(); onDropQ(q.id); }}
                      onClick={() => setActiveId(q.id)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 10,
                        padding: '10px 12px', borderRadius: 4,
                        background: isActive ? hudTokens.cyanSoft : raised,
                        border: `1px solid ${isActive ? accent : line}`,
                        cursor: 'pointer',
                        opacity: isDragging ? 0.35 : 1,
                        transition: 'opacity .12s',
                      }}
                    >
                      <span
                        onMouseDown={(e) => e.stopPropagation()}
                        style={{
                          color: textDim, fontFamily: hudTokens.fontMono,
                          fontSize: 13, lineHeight: 1, cursor: pollTokens.grabCursor,
                          padding: '4px 2px', userSelect: 'none',
                        }}
                        title="拖曳排序"
                      >⋮⋮</span>
                      <span style={{
                        width: 22, height: 22, borderRadius: 3,
                        background: isActive ? accent : 'transparent',
                        border: `1px solid ${isActive ? accent : line}`,
                        color: isActive ? '#000' : textDim,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: hudTokens.fontMono, fontSize: 11, fontWeight: 700,
                      }}>{i + 1}</span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 12.5, color: text, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{q.text}</div>
                        <div style={{ marginTop: 2, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.5 }}>
                          {q.options.length} 選項 · {q.timer === 0 ? '無時限' : `${q.timer}s`} · {hasImg ? `含圖 ${q.crop}` : '純文字'}
                        </div>
                      </div>
                      {isActive && (
                        <span style={{
                          padding: '2px 7px', borderRadius: 999,
                          background: hudTokens.cyanSoft, border: `1px solid ${accent}`,
                          fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1, color: accent,
                        }}><StatusDot color={accent} size={5} /> 編輯中</span>
                      )}
                    </div>
                  </React.Fragment>
                );
              })}
              <button
                onClick={() => {
                  const id = 'q' + (questions.length + 1) + '_' + Date.now().toString(36).slice(-3);
                  const next = { id, text: '', timer: 90, multi: false, crop: '16:9',
                    options: [{ id: 'a', label: '', img: false }, { id: 'b', label: '', img: false }] };
                  setQuestions(qs => [...qs, next]);
                  setActiveId(id);
                }}
                style={{
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

          {/* RIGHT · Active question editor w/ image drop zone + crop */}
          <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 22 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <span style={{
                width: 28, height: 28, borderRadius: 4, background: accent, color: '#000',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: hudTokens.fontMono, fontSize: 13, fontWeight: 700,
              }}>{activeIdx + 1}</span>
              <CardHeader title={`編輯題目 ${activeIdx + 1}`} en="EDITING · 變更即時同步到 Overlay 預覽" textDim={textDim} />
              <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1, color: textDim }}>
                Q{activeIdx + 1} / {questions.length}
              </span>
            </div>

            <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1, color: textDim, marginBottom: 6 }}>
              問題
            </div>
            <input
              value={active.text}
              onChange={(e) => patchQ(active.id, { text: e.target.value })}
              style={{
                width: '100%', padding: '12px 14px', borderRadius: 4, background: raised,
                border: `1px solid ${line}`, color: text, fontFamily: hudTokens.fontSans, fontSize: 15, outline: 'none', boxSizing: 'border-box',
              }} />

            {/* Crop ratio picker — only if any option has img */}
            <div style={{
              marginTop: 14, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap',
              padding: '10px 12px', background: raised, borderRadius: 4, border: `1px solid ${line}`,
            }}>
              <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1, color: textDim }}>
                圖片裁切比例 · CROP
              </span>
              {['16:9', '1:1', '4:3'].map(r => {
                const on = active.crop === r;
                return (
                  <button key={r} onClick={() => patchQ(active.id, { crop: r })}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      padding: '4px 10px', borderRadius: 3,
                      border: `1px solid ${on ? accent : line}`,
                      background: on ? hudTokens.cyanSoft : 'transparent',
                      color: on ? accent : text, cursor: 'pointer',
                      fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1, fontWeight: on ? 700 : 400,
                    }}>
                    <CropGlyph ratio={r} color={on ? accent : textDim} />
                    {r}
                  </button>
                );
              })}
              <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 9, color: textDim, letterSpacing: 0.5 }}>
                套用到此題所有選項圖片
              </span>
            </div>

            <div style={{ marginTop: 18, fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1, color: textDim, marginBottom: 6 }}>
              選項 · 2–6 · 拖曳 ⋮⋮ 排序 · 可拖放圖片到縮圖
            </div>

            {active.options.map((opt) => (
              <React.Fragment key={opt.id}>
                {dragOverOpt === opt.id && dragOptId && dragOptId !== opt.id && (
                  <div style={{
                    height: 2, background: accent, borderRadius: 2,
                    boxShadow: `0 0 8px ${accent}`, margin: '2px 0',
                  }} />
                )}
                <PollOptionRow
                  opt={opt}
                  letter={String.fromCharCode(65 + active.options.indexOf(opt))}
                  crop={active.crop}
                  dragging={opt.id === dragOptId}
                  onDragStart={() => setDragOptId(opt.id)}
                  onDragEnd={() => { setDragOptId(null); setDragOverOpt(null); }}
                  onDragOver={(e) => { e.preventDefault(); setDragOverOpt(opt.id); }}
                  onDrop={(e) => { e.preventDefault(); onDropOpt(active.id, opt.id); }}
                  onToggleImg={() => patchOpt(active.id, opt.id, { img: !opt.img })}
                  onText={(v) => patchOpt(active.id, opt.id, { label: v })}
                  onRemove={() => patchQ(active.id, { options: active.options.filter(o => o.id !== opt.id) })}
                  raised={raised} line={line} text={text} textDim={textDim} accent={accent}
                />
              </React.Fragment>
            ))}

            {active.options.length < 6 && (
              <button
                onClick={() => {
                  const newId = String.fromCharCode(97 + active.options.length) + Date.now().toString(36).slice(-3);
                  patchQ(active.id, { options: [...active.options, { id: newId, label: '', img: false }] });
                }}
                style={{
                  marginTop: 8, padding: '8px 14px', borderRadius: 4,
                  border: `1px dashed ${line}`, background: 'transparent', color: textDim,
                  cursor: 'pointer', fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1,
                }}>＋ 新增選項 ({active.options.length}/6)</button>
            )}

            <div style={{
              marginTop: 22, paddingTop: 18, borderTop: `1px solid ${line}`,
              display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim, letterSpacing: 1 }}>時限</span>
                <select value={active.timer} onChange={(e) => patchQ(active.id, { timer: +e.target.value })}
                  style={{
                    padding: '8px 10px', borderRadius: 4, background: raised,
                    border: `1px solid ${line}`, color: text, fontFamily: hudTokens.fontMono, fontSize: 11,
                  }}>
                  <option value={30}>30s</option>
                  <option value={90}>90s</option>
                  <option value={180}>3 分</option>
                  <option value={300}>5 分</option>
                  <option value={0}>無時限</option>
                </select>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim, letterSpacing: 1 }}>複選</span>
                <label style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: hudTokens.fontMono, fontSize: 11, color: text, cursor: 'pointer' }}>
                  <input type="checkbox" checked={active.multi} onChange={(e) => patchQ(active.id, { multi: e.target.checked })} /> 允許多選
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
                }}>START Q{activeIdx + 1} ▶</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminPageShell>
  );
}

// ---------- Option row w/ real DnD ----------
function PollOptionRow({
  opt, letter, crop, dragging,
  onDragStart, onDragEnd, onDragOver, onDrop,
  onToggleImg, onText, onRemove,
  raised, line, text, textDim, accent,
}) {
  const [fileOver, setFileOver] = React.useState(false);
  const [img] = React.useState(() => opt.img ? stockImgDataUri(letter) : null);
  const cropDim = crop === '1:1' ? { w: 44, h: 44 } : crop === '4:3' ? { w: 48, h: 36 } : { w: 56, h: 32 }; // 16:9 default

  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDrop={onDrop}
      style={{
        display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6,
        padding: 8, borderRadius: 4, border: `1px solid ${line}`, background: raised,
        opacity: dragging ? 0.4 : 1, transition: 'opacity .12s',
      }}
    >
      <span
        style={{
          color: textDim, fontFamily: hudTokens.fontMono, fontSize: 13,
          cursor: pollTokens.grabCursor, padding: '4px 2px',
        }}
        title="拖曳排序"
      >⋮⋮</span>
      <span style={{
        width: 28, height: 28, borderRadius: 4, background: accent, color: '#000',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: hudTokens.fontMono, fontSize: 12, fontWeight: 700, flexShrink: 0,
      }}>{letter}</span>

      {/* Image slot — drop zone + click to toggle */}
      {opt.img ? (
        <div
          onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); setFileOver(true); }}
          onDragLeave={() => setFileOver(false)}
          onDrop={(e) => { e.preventDefault(); e.stopPropagation(); setFileOver(false); }}
          style={{
            width: cropDim.w, height: cropDim.h, borderRadius: 4, flexShrink: 0, position: 'relative',
            overflow: 'hidden',
            background: img || `linear-gradient(135deg, #1E293B 0%, #0F172A 100%)`,
            backgroundSize: 'cover',
            border: fileOver ? `2px solid ${accent}` : `1px solid ${line}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'rgba(255,255,255,0.7)', fontFamily: hudTokens.fontMono, fontSize: 9,
            cursor: 'pointer',
          }}
          title="拖放圖片 / 點擊移除"
          onClick={onToggleImg}
        >
          {fileOver && (
            <div style={{
              position: 'absolute', inset: 0, background: 'rgba(125,211,252,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: hudTokens.fontMono, fontSize: 9, color: '#fff',
            }}>放開上傳</div>
          )}
          {!fileOver && (
            <span style={{
              position: 'absolute', bottom: 2, right: 3,
              fontFamily: hudTokens.fontMono, fontSize: 7, color: 'rgba(255,255,255,0.85)',
              background: 'rgba(0,0,0,0.55)', padding: '1px 3px', borderRadius: 2, letterSpacing: 0.3,
            }}>{crop}</span>
          )}
        </div>
      ) : (
        <div
          onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); setFileOver(true); }}
          onDragLeave={() => setFileOver(false)}
          onDrop={(e) => { e.preventDefault(); e.stopPropagation(); setFileOver(false); onToggleImg(); }}
          onClick={onToggleImg}
          style={{
            width: cropDim.w, height: cropDim.h, borderRadius: 4, flexShrink: 0,
            border: `1px dashed ${fileOver ? accent : line}`,
            background: fileOver ? pollTokens.dropHint : 'transparent',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: fileOver ? accent : textDim,
            fontFamily: hudTokens.fontMono, fontSize: 9, cursor: 'pointer', lineHeight: 1.1,
            textAlign: 'center', letterSpacing: 0.3,
          }}>
          {fileOver ? '放開上傳' : '+ 圖片'}
        </div>
      )}

      <input value={opt.label} onChange={(e) => onText(e.target.value)} placeholder="選項文字…"
        style={{
          flex: 1, padding: '8px 10px', borderRadius: 4, background: 'transparent',
          border: `1px solid transparent`, color: text, fontSize: 13, outline: 'none',
        }} />
      <button onClick={onRemove}
        style={{
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

// little SVG glyph for crop ratio buttons
function CropGlyph({ ratio, color }) {
  const dim = ratio === '1:1' ? { w: 12, h: 12 } : ratio === '4:3' ? { w: 14, h: 10.5 } : { w: 16, h: 9 };
  return (
    <svg width={16} height={12} viewBox="0 0 16 12" style={{ display: 'block' }}>
      <rect x={(16 - dim.w) / 2} y={(12 - dim.h) / 2} width={dim.w} height={dim.h} fill="none" stroke={color} strokeWidth={1.2} />
    </svg>
  );
}

// cheap shared stub — returns a stock gradient per letter
function stockImgDataUri(letter) {
  const hues = { A: [217, 40], B: [280, 55], C: [160, 50], D: [30, 60], E: [340, 50], F: [200, 55] };
  const [h, s] = hues[letter] || [220, 30];
  const bg1 = `hsl(${h} ${s}% 22%)`;
  const bg2 = `hsl(${(h + 20) % 360} ${s}% 10%)`;
  return `linear-gradient(135deg, ${bg1} 0%, ${bg2} 100%)`;
}

// ============================================================================
// AdminPollsLive — in-progress HUD
// 「第 1/3 題 · 剩餘 01:24」+ live bar chart + pause/next/stop
// ============================================================================
function AdminPollsLive({ theme = 'dark' }) {
  const [remain, setRemain] = React.useState(84); // 01:24
  const [votes, setVotes] = React.useState([28, 47, 19, 8]); // votes per option
  const q = {
    idx: 1, total: 3, text: '新版 onboarding 哪一版最直覺?',
    crop: '16:9',
    options: [
      { letter: 'A', label: '版本 A · 全螢幕引導', img: true },
      { letter: 'B', label: '版本 B · 浮動提示',   img: true },
      { letter: 'C', label: '版本 C · 影片教學',   img: true },
      { letter: 'D', label: '都還可以接受',         img: false },
    ],
  };
  const total = votes.reduce((s, v) => s + v, 0);
  const mm = String(Math.floor(remain / 60)).padStart(2, '0');
  const ss = String(remain % 60).padStart(2, '0');
  const maxIdx = votes.indexOf(Math.max(...votes));

  return (
    <AdminPageShell route="polls" title="投票 · 進行中" en="POLL IN PROGRESS · 即時結果廣播中" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 20 }}>
          {/* LEFT · big HUD */}
          <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, overflow: 'hidden' }}>
            {/* HUD strip */}
            <div style={{
              padding: '16px 22px',
              background: 'linear-gradient(180deg, rgba(125,211,252,0.06), transparent)',
              borderBottom: `1px solid ${line}`,
              display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '4px 10px', borderRadius: 999,
                  background: 'rgba(244,63,94,0.12)', border: '1px solid rgba(244,63,94,0.6)',
                }}>
                  <span style={{
                    width: 7, height: 7, borderRadius: '50%', background: '#F43F5E',
                    boxShadow: '0 0 8px #F43F5E',
                  }} />
                  <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1.5, color: '#F43F5E', fontWeight: 700 }}>LIVE</span>
                </span>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 12, letterSpacing: 1.5, color: text, fontWeight: 600 }}>
                  第 <span style={{ color: accent, fontSize: 18 }}>{q.idx}</span> / {q.total} 題
                </span>
              </div>

              {/* circular countdown */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginLeft: 'auto' }}>
                <CountdownRing remain={remain} total={90} size={40} color={accent} track={line} />
                <div>
                  <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1.5, color: textDim }}>剩餘</div>
                  <div style={{ fontFamily: hudTokens.fontMono, fontSize: 22, fontWeight: 700, color: accent, lineHeight: 1, letterSpacing: 1 }}>
                    {mm}:{ss}
                  </div>
                </div>
              </div>
            </div>

            {/* Question text */}
            <div style={{ padding: '22px 28px 8px' }}>
              <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1.5, color: textDim, marginBottom: 8 }}>
                QUESTION Q{q.idx}
              </div>
              <div style={{ fontSize: 26, fontWeight: 600, color: text, lineHeight: 1.3, letterSpacing: -0.3 }}>
                {q.text}
              </div>
            </div>

            {/* Live bars */}
            <div style={{ padding: '14px 28px 22px' }}>
              {q.options.map((o, i) => {
                const v = votes[i] || 0;
                const pct = total > 0 ? (v / total) * 100 : 0;
                const isLeader = i === maxIdx && v > 0;
                return (
                  <div key={o.letter} style={{ marginBottom: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 5 }}>
                      <span style={{
                        width: 24, height: 24, borderRadius: 4,
                        background: isLeader ? accent : 'transparent',
                        border: `1px solid ${isLeader ? accent : line}`,
                        color: isLeader ? '#000' : text,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: hudTokens.fontMono, fontSize: 11, fontWeight: 700, flexShrink: 0,
                      }}>{o.letter}</span>
                      <span style={{ fontSize: 14, color: text, flex: 1, minWidth: 0 }}>{o.label}</span>
                      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 12, color: isLeader ? accent : textDim, letterSpacing: 0.5, fontWeight: 600, minWidth: 50, textAlign: 'right' }}>
                        {pct.toFixed(0)}%
                      </span>
                      <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.5, minWidth: 42, textAlign: 'right' }}>
                        {v} 票
                      </span>
                    </div>
                    <div style={{ height: 10, background: raised, borderRadius: 2, overflow: 'hidden', border: `1px solid ${line}` }}>
                      <div style={{
                        width: `${pct}%`, height: '100%',
                        background: isLeader ? `linear-gradient(90deg, ${accent}, rgba(125,211,252,0.55))` : 'rgba(125,211,252,0.35)',
                        boxShadow: isLeader ? `0 0 10px ${accent}` : 'none',
                        transition: 'width .3s ease-out',
                      }} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Control strip */}
            <div style={{
              padding: '14px 22px', borderTop: `1px solid ${line}`,
              display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap',
            }}>
              <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 1 }}>
                總票數 <span style={{ color: text, fontWeight: 700, fontSize: 13 }}>{total}</span>
              </span>
              <span style={{ width: 1, height: 16, background: line }} />
              <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 1 }}>
                下一題 <span style={{ color: text }}>你覺得現在進度合理嗎?</span>
              </span>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
                <button
                  onClick={() => setVotes(v => v.map(n => n + Math.floor(Math.random() * 5)))}
                  style={liveBtn(line, text, textDim)}
                >+ 模擬投票</button>
                <button style={liveBtn(line, text, textDim)}>⏸ 暫停</button>
                <button style={liveBtn(line, text, textDim)}>⏭ 下一題</button>
                <button style={{
                  padding: '9px 18px', borderRadius: 4,
                  border: '1px solid #F43F5E', background: 'rgba(244,63,94,0.12)',
                  color: '#F87171', cursor: 'pointer',
                  fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1.5, fontWeight: 700,
                }}>■ 結束投票</button>
              </div>
            </div>
          </div>

          {/* RIGHT · queue mini + settings */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 14 }}>
              <CardHeader title="題目進度" en={`PROGRESS · ${q.idx}/${q.total}`} textDim={textDim} />
              <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[
                  { n: 1, t: '新版 onboarding 哪一版最直覺?', s: 'active' },
                  { n: 2, t: '你覺得現在進度合理嗎?',       s: 'queued' },
                  { n: 3, t: '最喜歡哪一個 logo?',          s: 'queued' },
                ].map(it => (
                  <div key={it.n} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '8px 10px', borderRadius: 3,
                    background: it.s === 'active' ? hudTokens.cyanSoft : raised,
                    border: `1px solid ${it.s === 'active' ? accent : line}`,
                  }}>
                    <span style={{
                      width: 20, height: 20, borderRadius: 3,
                      background: it.s === 'active' ? accent : 'transparent',
                      border: `1px solid ${it.s === 'active' ? accent : line}`,
                      color: it.s === 'active' ? '#000' : textDim,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: hudTokens.fontMono, fontSize: 10, fontWeight: 700,
                    }}>{it.n}</span>
                    <span style={{ flex: 1, fontSize: 12, color: it.s === 'active' ? text : textDim, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{it.t}</span>
                    {it.s === 'active' && <StatusDot color={accent} size={5} />}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 14 }}>
              <CardHeader title="即時廣播" en="BROADCAST" textDim={textDim} />
              <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <BroadcastRow label="結果即時顯示" on color={accent} raised={raised} line={line} text={text} textDim={textDim} />
                <BroadcastRow label="顯示總票數" on color={accent} raised={raised} line={line} text={text} textDim={textDim} />
                <BroadcastRow label="匿名投票" color={accent} raised={raised} line={line} text={text} textDim={textDim} />
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminPageShell>
  );
}

function liveBtn(line, text, textDim) {
  return {
    padding: '9px 14px', borderRadius: 4, border: `1px solid ${line}`,
    background: 'transparent', color: text, cursor: 'pointer',
    fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1.2,
  };
}

function BroadcastRow({ label, on, color, raised, line, text, textDim }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '8px 10px', background: raised, border: `1px solid ${line}`, borderRadius: 3,
    }}>
      <span style={{ flex: 1, fontSize: 12, color: on ? text : textDim }}>{label}</span>
      <span style={{
        width: 28, height: 14, borderRadius: 8, position: 'relative',
        background: on ? color : line, transition: 'background .15s',
      }}>
        <span style={{
          position: 'absolute', top: 1, left: on ? 15 : 1,
          width: 12, height: 12, borderRadius: '50%',
          background: on ? '#000' : '#fff',
        }} />
      </span>
    </div>
  );
}

function CountdownRing({ remain, total, size = 40, color, track }) {
  const r = size / 2 - 3;
  const c = 2 * Math.PI * r;
  const pct = remain / total;
  const dash = c * pct;
  const low = pct < 0.2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block' }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={2} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none"
        stroke={low ? '#F43F5E' : color} strokeWidth={2.5}
        strokeDasharray={`${dash} ${c}`}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ filter: `drop-shadow(0 0 4px ${low ? '#F43F5E' : color})` }} />
    </svg>
  );
}

// ============================================================================
// AdminPollsResults — ended poll
// ============================================================================
function AdminPollsResults({ theme = 'dark' }) {
  const q = {
    idx: 1, total: 3, text: '新版 onboarding 哪一版最直覺?',
    duration: '01:28', submitted: '2026-04-24 14:32', voters: 102, quorum: 140,
    options: [
      { letter: 'A', label: '版本 A · 全螢幕引導', img: true,  votes: 47 },
      { letter: 'B', label: '版本 B · 浮動提示',   img: true,  votes: 28 },
      { letter: 'C', label: '版本 C · 影片教學',   img: true,  votes: 19 },
      { letter: 'D', label: '都還可以接受',         img: false, votes: 8  },
    ],
  };
  const total = q.options.reduce((s, o) => s + o.votes, 0);
  const winner = [...q.options].sort((a, b) => b.votes - a.votes)[0];
  const rate = Math.round((q.voters / q.quorum) * 100);

  return (
    <AdminPageShell route="polls" title="投票結果" en="POLL RESULTS · 已結束 · 可匯出 CSV" theme={theme}>
      {({ panel, raised, line, text, textDim, accent, radius }) => (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 20 }}>
          {/* LEFT · results */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* header */}
            <div style={{
              background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: '18px 22px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <span style={{
                  padding: '3px 8px', borderRadius: 3,
                  background: raised, border: `1px solid ${line}`,
                  fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1.5, color: textDim,
                }}>ENDED</span>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1, color: textDim }}>
                  Q{q.idx}/{q.total} · 進行 {q.duration} · {q.submitted}
                </span>
              </div>
              <div style={{ fontSize: 24, fontWeight: 600, color: text, lineHeight: 1.3 }}>{q.text}</div>
            </div>

            {/* winner callout */}
            <div style={{
              background: `linear-gradient(135deg, rgba(125,211,252,0.14), rgba(125,211,252,0.03))`,
              border: `1px solid ${accent}`, borderRadius: radius, padding: '18px 22px',
              display: 'flex', alignItems: 'center', gap: 18,
            }}>
              <div style={{
                width: 72, height: 72, borderRadius: 8, background: accent, color: '#000',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: hudTokens.fontMono, fontSize: 42, fontWeight: 700, flexShrink: 0,
                boxShadow: '0 0 24px rgba(125,211,252,0.4)',
              }}>{winner.letter}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1.5, color: accent, marginBottom: 4 }}>WINNER</div>
                <div style={{ fontSize: 20, fontWeight: 600, color: text, marginBottom: 4 }}>{winner.label}</div>
                <div style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim, letterSpacing: 0.5 }}>
                  {winner.votes} 票 · {((winner.votes / total) * 100).toFixed(1)}% · 領先第 2 名 {winner.votes - q.options.sort((a,b)=>b.votes-a.votes)[1].votes} 票
                </div>
              </div>
              <div style={{
                fontFamily: hudTokens.fontMono, fontSize: 52, fontWeight: 700, color: accent,
                letterSpacing: -2, lineHeight: 1,
              }}>{((winner.votes / total) * 100).toFixed(0)}<span style={{ fontSize: 24 }}>%</span></div>
            </div>

            {/* full bar list */}
            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: '18px 22px' }}>
              <CardHeader title="完整結果" en={`RESULTS · ${total} 票`} textDim={textDim} />
              <div style={{ marginTop: 14 }}>
                {q.options.sort((a, b) => b.votes - a.votes).map((o, rank) => {
                  const pct = (o.votes / total) * 100;
                  const isW = rank === 0;
                  return (
                    <div key={o.letter} style={{ marginBottom: 12 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 5 }}>
                        <span style={{
                          width: 16, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.5, textAlign: 'center',
                        }}>#{rank + 1}</span>
                        <span style={{
                          width: 22, height: 22, borderRadius: 3,
                          background: isW ? accent : 'transparent',
                          border: `1px solid ${isW ? accent : line}`,
                          color: isW ? '#000' : text,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontFamily: hudTokens.fontMono, fontSize: 10, fontWeight: 700, flexShrink: 0,
                        }}>{o.letter}</span>
                        <span style={{ fontSize: 13.5, color: text, flex: 1 }}>{o.label}</span>
                        <span style={{ fontFamily: hudTokens.fontMono, fontSize: 12, color: isW ? accent : text, fontWeight: 600, minWidth: 54, textAlign: 'right' }}>
                          {pct.toFixed(1)}%
                        </span>
                        <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, minWidth: 44, textAlign: 'right' }}>
                          {o.votes} 票
                        </span>
                      </div>
                      <div style={{ height: 8, background: raised, borderRadius: 2, overflow: 'hidden', border: `1px solid ${line}` }}>
                        <div style={{
                          width: `${pct}%`, height: '100%',
                          background: isW ? `linear-gradient(90deg, ${accent}, rgba(125,211,252,0.45))` : 'rgba(125,211,252,0.25)',
                          boxShadow: isW ? `0 0 8px ${accent}` : 'none',
                        }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT · stats rail */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 14 }}>
              <CardHeader title="參與度" en="PARTICIPATION" textDim={textDim} />
              <div style={{ marginTop: 14, display: 'flex', alignItems: 'flex-end', gap: 6 }}>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 36, fontWeight: 700, color: text, lineHeight: 1, letterSpacing: -1 }}>
                  {q.voters}
                </span>
                <span style={{ fontFamily: hudTokens.fontMono, fontSize: 12, color: textDim, letterSpacing: 0.5, paddingBottom: 6 }}>
                  / {q.quorum} 觀眾
                </span>
              </div>
              <div style={{ height: 6, background: raised, borderRadius: 3, overflow: 'hidden', border: `1px solid ${line}`, marginTop: 10 }}>
                <div style={{ width: `${rate}%`, height: '100%', background: accent }} />
              </div>
              <div style={{ marginTop: 6, display: 'flex', justifyContent: 'space-between', fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.5 }}>
                <span>投票率 {rate}%</span>
                <span>{q.quorum - q.voters} 人未投</span>
              </div>
            </div>

            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 14 }}>
              <CardHeader title="時序" en="TIMELINE" textDim={textDim} />
              <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <TimelineRow label="開始" value="14:30:45" accent={accent} textDim={textDim} text={text} />
                <TimelineRow label="首票" value="14:30:49 · +4s" accent={accent} textDim={textDim} text={text} />
                <TimelineRow label="過半" value="14:31:18 · +33s" accent={accent} textDim={textDim} text={text} />
                <TimelineRow label="結束" value="14:32:13" accent={accent} textDim={textDim} text={text} />
              </div>
              <div style={{
                marginTop: 12, height: 48, background: raised, border: `1px solid ${line}`, borderRadius: 3,
                display: 'flex', alignItems: 'flex-end', padding: 4, gap: 2, overflow: 'hidden',
              }}>
                {/* sparkline bars — cumulative vote rate */}
                {[2, 4, 8, 14, 22, 31, 38, 46, 52, 60, 68, 74, 82, 88, 94, 98, 100, 102].map((v, i) => (
                  <div key={i} style={{
                    flex: 1, height: `${Math.min(v, 100)}%`,
                    background: i >= 14 ? accent : 'rgba(125,211,252,0.35)',
                    borderRadius: 1,
                  }} />
                ))}
              </div>
            </div>

            <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 14 }}>
              <CardHeader title="動作" en="EXPORT" textDim={textDim} />
              <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <button style={exportBtn(line, text)}>⇣ 匯出 CSV</button>
                <button style={exportBtn(line, text)}>⇣ 匯出 JSON</button>
                <button style={exportBtn(line, text)}>⎘ 複製結果連結</button>
                <button style={{
                  ...exportBtn(line, text),
                  border: `1px solid ${accent}`, background: accent, color: '#000',
                  fontWeight: 700, letterSpacing: 1.5,
                }}>▶ 下一題 Q2</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminPageShell>
  );
}

function exportBtn(line, text) {
  return {
    padding: '9px 12px', borderRadius: 4, border: `1px solid ${line}`,
    background: 'transparent', color: text, cursor: 'pointer',
    fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1, textAlign: 'left',
  };
}

function TimelineRow({ label, value, accent, text, textDim }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: hudTokens.fontMono, fontSize: 11 }}>
      <span style={{ width: 40, color: textDim, letterSpacing: 0.5 }}>{label}</span>
      <span style={{ color: text, letterSpacing: 0.5 }}>{value}</span>
    </div>
  );
}

Object.assign(window, { AdminPollsPage, AdminPollsLive, AdminPollsResults });
