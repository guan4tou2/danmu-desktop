// Batch 3 — First-run Setup Wizard + Empty States + Error States

// Shim — referenced by batch3 + batch5 but never had a real definition
function ScanlineBg({ opacity = 0.04 }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      backgroundImage: `repeating-linear-gradient(0deg, rgba(255,255,255,${opacity}) 0px, rgba(255,255,255,${opacity}) 1px, transparent 1px, transparent 3px)`,
      mixBlendMode: 'overlay',
    }} />
  );
}
window.ScanlineBg = ScanlineBg;


/* =================================================================
   1) First-run Setup Wizard — 4 steps
   ================================================================= */

function SetupWizard({ theme = 'dark', step: initStep = 2 }) {
  const isDark = theme === 'dark';
  const bg     = isDark ? hudTokens.bg0 : hudTokens.lightBg0;
  const panel  = isDark ? hudTokens.bg1 : '#fff';
  const raised = isDark ? hudTokens.bg2 : hudTokens.lightBg2;
  const line   = isDark ? hudTokens.line : hudTokens.lightLine;
  const text   = isDark ? hudTokens.text : hudTokens.lightText;
  const textDim = isDark ? hudTokens.textDim : hudTokens.lightTextDim;
  const accent = hudTokens.cyan;

  const steps = ['設密碼', '上傳 Logo', '選主題包', '預設語言', '完成'];
  const step = initStep;

  return (
    <div style={{
      width: '100%', height: '100%', background: bg, color: text,
      fontFamily: hudTokens.fontSans, display: 'flex', flexDirection: 'column',
      colorScheme: isDark ? 'dark' : 'light', overflow: 'hidden',
    }}>
      <ScanlineBg opacity={isDark ? 0.04 : 0.02} />

      {/* Top brand strip */}
      <div style={{ padding: '32px 48px 24px', borderBottom: `1px solid ${line}`, position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <DanmuHero title="Danmu Fire" theme={theme} size="medium" align="left" />
          <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 11, letterSpacing: 1.5, color: textDim }}>
            FIRST-RUN · 初次設定
          </span>
        </div>
      </div>

      {/* Step indicator */}
      <div style={{ padding: '20px 48px', borderBottom: `1px solid ${line}`, position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
          {steps.map((s, i) => {
            const done = i < step, active = i === step;
            return (
              <React.Fragment key={s}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{
                    width: 28, height: 28, borderRadius: '50%',
                    border: `1.5px solid ${done || active ? accent : line}`,
                    background: done ? accent : (active ? hudTokens.cyanSoft : 'transparent'),
                    color: done ? '#000' : (active ? accent : textDim),
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: hudTokens.fontMono, fontSize: 12, fontWeight: 700,
                  }}>{done ? '✓' : i + 1}</span>
                  <span style={{ fontSize: 12, color: active ? text : textDim, fontWeight: active ? 600 : 400 }}>{s}</span>
                </div>
                {i < steps.length - 1 && (
                  <div style={{ flex: 1, height: 1, background: i < step ? accent : line, margin: '0 14px', minWidth: 30 }} />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflow: 'auto', padding: '40px 48px', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {step === 0 && <WizStepPassword text={text} textDim={textDim} accent={accent} raised={raised} line={line} />}
          {step === 1 && <WizStepLogo     text={text} textDim={textDim} accent={accent} raised={raised} line={line} panel={panel} />}
          {step === 2 && <WizStepTheme    text={text} textDim={textDim} accent={accent} raised={raised} line={line} panel={panel} />}
          {step === 3 && <WizStepLang     text={text} textDim={textDim} accent={accent} raised={raised} line={line} />}
          {step === 4 && <WizStepDone     text={text} textDim={textDim} accent={accent} raised={raised} line={line} />}
        </div>
      </div>

      {/* Footer nav */}
      <div style={{
        padding: '18px 48px', borderTop: `1px solid ${line}`, background: panel,
        display: 'flex', alignItems: 'center', gap: 12, position: 'relative', zIndex: 1,
      }}>
        <button style={{
          padding: '10px 18px', border: `1px solid ${line}`, background: 'transparent',
          color: textDim, borderRadius: 4, fontFamily: hudTokens.fontMono, fontSize: 12, cursor: 'pointer',
        }}>← 上一步</button>
        <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: textDim, marginLeft: 12 }}>
          步驟 {step + 1} / {steps.length}
        </span>
        <span style={{ marginLeft: 'auto', fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.4 }}>
          所有設定可日後修改
        </span>
        <button style={{
          padding: '10px 22px', border: 'none', borderRadius: 4,
          background: accent, color: '#000',
          fontFamily: hudTokens.fontMono, fontSize: 12, fontWeight: 700, letterSpacing: 1, cursor: 'pointer',
        }}>下一步 →</button>
      </div>
    </div>
  );
}

function WizStepPassword({ text, textDim, accent, raised, line }) {
  return (
    <div>
      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1.5, color: accent, marginBottom: 8 }}>STEP 01</div>
      <h2 style={{ margin: 0, fontSize: 28, fontWeight: 600, color: text, lineHeight: 1.3 }}>設個密碼來保護管理後台</h2>
      <p style={{ fontSize: 14, color: textDim, marginTop: 10, lineHeight: 1.7 }}>
        Danmu Fire 用簡單密碼保護管理後台,沒有帳號 / 角色制。<br/>
        密碼存於本機 (<code style={{ fontFamily: hudTokens.fontMono, color: accent }}>~/.danmu/config.json</code>),Argon2 雜湊。
      </p>

      <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <WizField label="管理密碼" textDim={textDim}>
          <input type="password" defaultValue="●●●●●●●●●●●●" style={wizInput({ raised, line, text, accent })} />
        </WizField>
        <WizField label="再輸入一次" textDim={textDim}>
          <input type="password" defaultValue="●●●●●●●●●●●●" style={wizInput({ raised, line, text, accent })} />
        </WizField>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: hudTokens.fontMono, fontSize: 11, color: hudTokens.lime, letterSpacing: 0.5 }}>
          <span>✓ 強度</span>
          <div style={{ flex: 1, height: 4, background: raised, borderRadius: 2, overflow: 'hidden', maxWidth: 200 }}>
            <div style={{ width: '85%', height: '100%', background: hudTokens.lime }} />
          </div>
          <span>很好</span>
        </div>
      </div>

      <div style={{
        marginTop: 28, padding: 14,
        background: hudTokens.cyanSoft, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 4,
      }}>
        <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: accent, letterSpacing: 1, marginBottom: 6 }}>NOTE</div>
        <div style={{ fontSize: 12, color: text, lineHeight: 1.6 }}>
          忘記密碼可在主機上執行 <code style={{ fontFamily: hudTokens.fontMono, color: accent }}>danmu reset-password</code> 重設。
        </div>
      </div>
    </div>
  );
}

function WizStepLogo({ text, textDim, accent, raised, line, panel }) {
  return (
    <div>
      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1.5, color: accent, marginBottom: 8 }}>STEP 02</div>
      <h2 style={{ margin: 0, fontSize: 28, fontWeight: 600, color: text, lineHeight: 1.3 }}>上傳活動 Logo</h2>
      <p style={{ fontSize: 14, color: textDim, marginTop: 10, lineHeight: 1.7 }}>
        會顯示在觀眾頁、Overlay 角落、登入頁。建議 PNG 透明背景,512×512 以上。可略過,日後再上傳。
      </p>

      <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 280px', gap: 18 }}>
        <div style={{
          height: 220, border: `2px dashed ${line}`, borderRadius: 8,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          background: raised,
        }}>
          <div style={{ fontSize: 36, color: textDim, marginBottom: 6 }}>⇪</div>
          <div style={{ fontSize: 13, color: text }}>拖放圖片到這裡</div>
          <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, marginTop: 6, letterSpacing: 0.4 }}>PNG / SVG · 最大 2 MB</div>
          <div style={{ marginTop: 12 }}>
            <span style={{ padding: '6px 14px', border: `1px solid ${accent}`, color: accent, borderRadius: 3, fontFamily: hudTokens.fontMono, fontSize: 11, cursor: 'pointer' }}>選擇檔案</span>
          </div>
        </div>

        <div>
          <HudLabel color={textDim}>預覽</HudLabel>
          <div style={{
            marginTop: 10, padding: 18,
            background: '#000', borderRadius: 6, border: `1px solid ${line}`,
            textAlign: 'center',
          }}>
            <div style={{
              fontFamily: hudTokens.fontDisplay, fontSize: 26, color: '#fff',
              letterSpacing: 1, fontWeight: 600,
            }}>ACME · 2025</div>
            <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, color: 'rgba(255,255,255,0.5)', marginTop: 6, letterSpacing: 1 }}>EVENT KEYNOTE</div>
          </div>
          <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, marginTop: 8, letterSpacing: 0.4, textAlign: 'center' }}>
            🅢 模擬:沒上傳會用文字 lockup
          </div>
        </div>
      </div>
    </div>
  );
}

function WizStepTheme({ text, textDim, accent, raised, line, panel }) {
  const themes = [
    { id: 'classic', name: '經典 CLASSIC',   sub: '白底彩字 · 預設',   colors: ['#ffffff', '#38bdf8', '#fbbf24', '#86efac'], hot: true },
    { id: 'neon',    name: '霓虹 NEON',      sub: '高飽和 · 派對風',  colors: ['#fb7185', '#38bdf8', '#22d3ee', '#fde047'] },
    { id: 'mono',    name: '極簡 MONO',      sub: '黑白 · 商務場景',  colors: ['#ffffff', '#cbd5e1', '#64748b', '#0f172a'] },
    { id: 'sakura',  name: '櫻花 SAKURA',    sub: '柔和 · 文化活動',  colors: ['#fbcfe8', '#f9a8d4', '#fdf4ff', '#ffffff'] },
    { id: 'matrix',  name: '矩陣 MATRIX',    sub: '綠 · hacker',     colors: ['#22c55e', '#86efac', '#dcfce7', '#16a34a'] },
    { id: 'twilight', name: '暮光 TWILIGHT', sub: '深紫 · 夜間活動',  colors: ['#38bdf8', '#c4b5fd', '#7dd3fc', '#fbbf24'] },
  ];
  return (
    <div>
      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1.5, color: accent, marginBottom: 8 }}>STEP 03</div>
      <h2 style={{ margin: 0, fontSize: 28, fontWeight: 600, color: text, lineHeight: 1.3 }}>挑一個起手主題包</h2>
      <p style={{ fontSize: 14, color: textDim, marginTop: 10, lineHeight: 1.7 }}>
        每個主題包配好彈幕色、字型、效果。可以日後在「主題包」頁微調或自訂。
      </p>

      <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        {themes.map((t, i) => (
          <div key={t.id} style={{
            padding: 14, borderRadius: 8,
            background: panel,
            border: `2px solid ${i === 0 ? accent : line}`,
            cursor: 'pointer', position: 'relative',
          }}>
            {i === 0 && (
              <span style={{
                position: 'absolute', top: 8, right: 8,
                width: 18, height: 18, borderRadius: '50%',
                background: accent, color: '#000', fontSize: 11, fontWeight: 700,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              }}>✓</span>
            )}
            {t.hot && i !== 0 && (
              <span style={{
                position: 'absolute', top: 8, right: 8,
                fontFamily: hudTokens.fontMono, fontSize: 9, padding: '2px 6px',
                background: hudTokens.amber, color: '#000', borderRadius: 3, letterSpacing: 0.5,
              }}>POP</span>
            )}
            {/* preview swatch */}
            <div style={{
              height: 70, borderRadius: 4, background: '#000',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: 6, padding: 8, position: 'relative', overflow: 'hidden',
            }}>
              {t.colors.map((c, j) => (
                <span key={j} style={{
                  fontFamily: hudTokens.fontDisplay, fontSize: 10 + j * 2,
                  color: c, fontWeight: 700, opacity: 0.85,
                  textShadow: `0 0 6px ${c}66`,
                }}>{['+1', '哈哈', '🔥', '✨'][j]}</span>
              ))}
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, color: text, marginTop: 10 }}>{t.name}</div>
            <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, marginTop: 4, letterSpacing: 0.3 }}>{t.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WizStepLang({ text, textDim, accent, raised, line }) {
  return (
    <div>
      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1.5, color: accent, marginBottom: 8 }}>STEP 04</div>
      <h2 style={{ margin: 0, fontSize: 28, fontWeight: 600, color: text, lineHeight: 1.3 }}>預設語言</h2>
      <p style={{ fontSize: 14, color: textDim, marginTop: 10, lineHeight: 1.7 }}>
        管理後台 + 觀眾頁的初始語言。觀眾可在自己的頁面切換。
      </p>

      <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
        {[
          { k: 'zh-TW', name: '繁體中文', sub: '台灣 · Traditional Chinese', selected: true },
          { k: 'en',    name: 'English',  sub: 'United States · 英文',         selected: false },
          { k: 'zh-CN', name: '简体中文', sub: '中国大陆 · Simplified',         selected: false },
          { k: 'ja',    name: '日本語',   sub: '日本 · Japanese',                selected: false },
        ].map(l => (
          <div key={l.k} style={{
            padding: 14, borderRadius: 6, cursor: 'pointer',
            background: l.selected ? hudTokens.cyanSoft : raised,
            border: `2px solid ${l.selected ? accent : line}`,
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <span style={{ fontFamily: hudTokens.fontMono, fontSize: 11, color: l.selected ? accent : textDim, letterSpacing: 0.5 }}>{l.k}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: text }}>{l.name}</div>
              <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, marginTop: 2, letterSpacing: 0.3 }}>{l.sub}</div>
            </div>
            {l.selected && <span style={{ color: accent, fontSize: 18 }}>✓</span>}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 24, padding: 12, background: raised, border: `1px solid ${line}`, borderRadius: 4 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
          <SwitchPill on={true} accent={accent} line={line} textDim={textDim} />
          <span style={{ fontSize: 12, color: text }}>允許觀眾自行切換語言</span>
        </div>
        <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.3 }}>觀眾頁右上角會出現語言下拉</div>
      </div>
    </div>
  );
}

function WizStepDone({ text, textDim, accent, raised, line }) {
  return (
    <div style={{ textAlign: 'center', paddingTop: 40 }}>
      <div style={{
        width: 80, height: 80, borderRadius: '50%',
        background: hudTokens.cyanSoft, color: accent,
        margin: '0 auto', fontSize: 40,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: `2px solid ${accent}`,
      }}>✓</div>
      <h2 style={{ margin: '24px 0 0', fontSize: 28, fontWeight: 600, color: text }}>準備好了</h2>
      <p style={{ fontSize: 14, color: textDim, marginTop: 12, lineHeight: 1.7, maxWidth: 480, margin: '12px auto 0' }}>
        Danmu Fire 已就緒。你的觀眾頁網址是<br/>
        <code style={{ fontFamily: hudTokens.fontMono, fontSize: 16, color: accent, marginTop: 6, display: 'inline-block' }}>danmu.local:42</code>
      </p>
      <div style={{ marginTop: 28, display: 'flex', justifyContent: 'center', gap: 12 }}>
        <span style={{ padding: '10px 18px', border: `1px solid ${line}`, color: text, borderRadius: 4, fontFamily: hudTokens.fontMono, fontSize: 12 }}>↓ 下載 Desktop App</span>
        <span style={{ padding: '10px 18px', background: accent, color: '#000', borderRadius: 4, fontFamily: hudTokens.fontMono, fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>進入 Dashboard →</span>
      </div>
    </div>
  );
}

function WizField({ label, textDim, children }) {
  return (
    <div>
      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1.5, color: textDim, marginBottom: 6 }}>{label}</div>
      {children}
    </div>
  );
}
function wizInput({ raised, line, text, accent }) {
  return {
    width: '100%',
    padding: '12px 14px',
    background: raised, border: `1px solid ${line}`,
    color: text, fontFamily: hudTokens.fontMono, fontSize: 14, letterSpacing: 1,
    borderRadius: 4, outline: 'none',
    boxSizing: 'border-box',
  };
}


/* =================================================================
   2) Empty States — pages with nothing yet
   ================================================================= */

function EmptyStateMessages({ theme = 'dark' }) {
  return (
    <AdminPageShell route="messages" title="訊息紀錄" en="MESSAGES · LIVE FEED" theme={theme}>
      {({ panel, line, text, textDim, accent, radius }) => (
        <div style={{
          flex: 1, background: panel, border: `1px solid ${line}`, borderRadius: radius,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          padding: 40, position: 'relative', overflow: 'hidden',
        }}>
          {/* HUD corner accents */}
          <HudCorners size={20} color={hudTokens.cyanLine} inset={20} />
          <EmptyIllusMessages accent={accent} line={line} textDim={textDim} />
          <h2 style={{ margin: '24px 0 8px', fontSize: 22, fontWeight: 600, color: text, fontFamily: hudTokens.fontDisplay, letterSpacing: 1 }}>
            還沒有人發送訊息
          </h2>
          <p style={{ fontSize: 13, color: textDim, lineHeight: 1.7, textAlign: 'center', maxWidth: 420, margin: '0 0 20px' }}>
            把這個 QR 投到舞台上,觀眾掃進去即可開始發彈幕。
          </p>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '10px 16px', background: hudTokens.cyanSoft, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 4 }}>
            <span style={{ width: 48, height: 48, background: '#fff', borderRadius: 4, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontFamily: hudTokens.fontMono, color: '#000' }}>QR</span>
            <div>
              <div style={{ fontFamily: hudTokens.fontMono, fontSize: 14, color: accent, letterSpacing: 0.5 }}>danmu.local:42</div>
              <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, marginTop: 2, letterSpacing: 0.3 }}>觀眾頁網址</div>
            </div>
            <span style={{ marginLeft: 12, padding: '6px 12px', border: `1px solid ${accent}`, color: accent, borderRadius: 3, fontFamily: hudTokens.fontMono, fontSize: 11 }}>📋 複製</span>
          </div>
          <div style={{ marginTop: 20, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.5 }}>
            或在 Overlay 上開啟 QR Carousel widget
          </div>
        </div>
      )}
    </AdminPageShell>
  );
}

function EmptyStatePolls({ theme = 'dark' }) {
  return (
    <AdminPageShell route="polls" title="投票" en="POLLS · BUILDER" theme={theme}>
      {({ panel, line, text, textDim, accent, radius }) => (
        <div style={{
          flex: 1, background: panel, border: `1px solid ${line}`, borderRadius: radius,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          padding: 40, position: 'relative', overflow: 'hidden',
        }}>
          <HudCorners size={20} color={hudTokens.cyanLine} inset={20} />
          <EmptyIllusPoll accent={accent} line={line} />
          <h2 style={{ margin: '24px 0 8px', fontSize: 22, fontWeight: 600, color: text, fontFamily: hudTokens.fontDisplay, letterSpacing: 1 }}>
            還沒有任何投票
          </h2>
          <p style={{ fontSize: 13, color: textDim, lineHeight: 1.7, textAlign: 'center', maxWidth: 460, margin: '0 0 24px' }}>
            建好的投票會排在這裡,可即時推到 Overlay,也可以用模板快速建立。
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            <span style={{ padding: '10px 18px', background: accent, color: '#000', borderRadius: 4, fontFamily: hudTokens.fontMono, fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>+ 新建投票</span>
            <span style={{ padding: '10px 18px', border: `1px solid ${line}`, color: text, borderRadius: 4, fontFamily: hudTokens.fontMono, fontSize: 12 }}>從模板</span>
          </div>
          <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, maxWidth: 600, width: '100%' }}>
            {[
              { t: '是 / 否', d: '最簡 2 選項',     pct: '~5s' },
              { t: '滿意度',  d: '1–5 星',          pct: '~10s' },
              { t: '多選題',  d: '4 個 + 圖片',     pct: '~30s' },
            ].map((m, i) => (
              <div key={i} style={{ padding: 12, background: hudTokens.cyanSoft, border: `1px solid ${hudTokens.cyanLine}`, borderRadius: 4 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: text }}>{m.t}</div>
                <div style={{ fontSize: 10, color: textDim, marginTop: 2 }}>{m.d}</div>
                <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: accent, marginTop: 6, letterSpacing: 0.4 }}>建立 {m.pct}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </AdminPageShell>
  );
}

function EmptyStateFonts({ theme = 'dark' }) {
  return (
    <AdminPageShell route="fonts" title="字型管理" en="FONTS · LIBRARY" theme={theme}>
      {({ panel, line, text, textDim, accent, radius }) => (
        <div style={{
          flex: 1, background: panel, border: `1px solid ${line}`, borderRadius: radius,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          padding: 40, position: 'relative', overflow: 'hidden',
        }}>
          <HudCorners size={20} color={hudTokens.cyanLine} inset={20} />
          <EmptyIllusFont accent={accent} line={line} text={text} />
          <h2 style={{ margin: '24px 0 8px', fontSize: 22, fontWeight: 600, color: text, fontFamily: hudTokens.fontDisplay, letterSpacing: 1 }}>
            尚未上傳自訂字型
          </h2>
          <p style={{ fontSize: 13, color: textDim, lineHeight: 1.7, textAlign: 'center', maxWidth: 460, margin: '0 0 18px' }}>
            預設使用 Noto Sans TC + IBM Plex Mono。<br/>
            上傳 .woff2 / .ttf 可給觀眾選用,或設為 Overlay 預設字型。
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            <span style={{ padding: '10px 18px', background: accent, color: '#000', borderRadius: 4, fontFamily: hudTokens.fontMono, fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>⇪ 上傳字型</span>
            <span style={{ padding: '10px 18px', border: `1px solid ${line}`, color: text, borderRadius: 4, fontFamily: hudTokens.fontMono, fontSize: 12 }}>從 Google Fonts</span>
          </div>
          <div style={{ marginTop: 24, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.4 }}>支援格式 · WOFF2 · WOFF · TTF · OTF</div>
        </div>
      )}
    </AdminPageShell>
  );
}

/* — small SVG illustrations — */
function EmptyIllusMessages({ accent, line, textDim }) {
  return (
    <svg width="160" height="100" viewBox="0 0 160 100" style={{ display: 'block' }}>
      <defs>
        <linearGradient id="emptymsg-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={accent} stopOpacity="0" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.25" />
        </linearGradient>
      </defs>
      {/* danmu lines flying right (empty) */}
      {[15, 35, 55, 75].map((y, i) => (
        <line key={i} x1="10" y1={y} x2="150" y2={y} stroke="url(#emptymsg-fade)" strokeWidth="1" strokeDasharray="3 4" />
      ))}
      {/* lonely placeholder bubble */}
      <rect x="60" y="38" width="40" height="22" rx="4" fill={`${accent}22`} stroke={accent} strokeDasharray="3 3" strokeWidth="1" />
      <circle cx="70" cy="49" r="1.5" fill={accent} opacity="0.4" />
      <circle cx="78" cy="49" r="1.5" fill={accent} opacity="0.4" />
      <circle cx="86" cy="49" r="1.5" fill={accent} opacity="0.4" />
      {/* corner brackets */}
      <path d="M5 10 L5 5 L10 5" stroke={hudTokens.cyanLine} strokeWidth="1" fill="none" />
      <path d="M150 10 L155 10 L155 5 L150 5" stroke={hudTokens.cyanLine} strokeWidth="1" fill="none" />
      <path d="M5 90 L5 95 L10 95" stroke={hudTokens.cyanLine} strokeWidth="1" fill="none" />
      <path d="M150 90 L155 90 L155 95 L150 95" stroke={hudTokens.cyanLine} strokeWidth="1" fill="none" />
    </svg>
  );
}
function EmptyIllusPoll({ accent, line }) {
  return (
    <svg width="160" height="110" viewBox="0 0 160 110" style={{ display: 'block' }}>
      <rect x="20" y="80" width="22" height="20" fill={`${accent}33`} stroke={accent} />
      <rect x="50" y="60" width="22" height="40" fill={`${accent}55`} stroke={accent} />
      <rect x="80" y="40" width="22" height="60" fill={`${accent}77`} stroke={accent} />
      <rect x="110" y="68" width="22" height="32" fill={`${accent}44`} stroke={accent} />
      <line x1="15" y1="100" x2="140" y2="100" stroke={hudTokens.cyanLine} />
      {/* question mark */}
      <text x="80" y="22" textAnchor="middle" fill={accent} fontFamily="JetBrains Mono" fontSize="20" fontWeight="700">?</text>
    </svg>
  );
}
function EmptyIllusFont({ accent, line, text }) {
  return (
    <svg width="160" height="100" viewBox="0 0 160 100" style={{ display: 'block' }}>
      <text x="80" y="62" textAnchor="middle" fill={accent} fontFamily="JetBrains Mono" fontSize="44" fontWeight="700" letterSpacing="6">Aa</text>
      <line x1="20" y1="20" x2="40" y2="20" stroke={hudTokens.cyanLine} strokeWidth="1" />
      <line x1="120" y1="20" x2="140" y2="20" stroke={hudTokens.cyanLine} strokeWidth="1" />
      <line x1="20" y1="80" x2="40" y2="80" stroke={hudTokens.cyanLine} strokeWidth="1" />
      <line x1="120" y1="80" x2="140" y2="80" stroke={hudTokens.cyanLine} strokeWidth="1" />
    </svg>
  );
}


/* =================================================================
   3) Error States — connection lost / rate exceeded / upload failed
   ================================================================= */

function ErrorStateConnectionLost({ theme = 'dark' }) {
  return (
    <AdminPageShell route="dashboard" title="Dashboard" en="STATUS · CONNECTION LOST" theme={theme} pageMeta={{ live: false, viewers: '— —', lat: '— —', region: '— —' }}>
      {({ panel, line, text, textDim, accent, radius }) => (
        <div style={{
          flex: 1, background: panel, border: `1px solid ${hudTokens.crimson}55`, borderRadius: radius,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          padding: 40, position: 'relative', overflow: 'hidden',
        }}>
          {/* red corner accents */}
          <HudCorners size={20} color={hudTokens.crimson} inset={20} />
          {/* pulsing glyph */}
          <div style={{
            width: 80, height: 80, borderRadius: '50%',
            border: `2px solid ${hudTokens.crimson}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: hudTokens.crimson, fontSize: 32,
            background: 'rgba(248, 113, 113, 0.08)',
            animation: 'esc-pulse 1.6s ease-in-out infinite',
          }}>⚠</div>
          <style>{`@keyframes esc-pulse { 0%, 100% { box-shadow: 0 0 0 0 ${hudTokens.crimson}66; } 50% { box-shadow: 0 0 0 18px transparent; } }`}</style>

          <h2 style={{ margin: '20px 0 6px', fontSize: 22, fontWeight: 600, color: text, fontFamily: hudTokens.fontDisplay, letterSpacing: 1 }}>
            連不到 Danmu Fire 主機
          </h2>
          <p style={{ fontSize: 13, color: textDim, lineHeight: 1.7, textAlign: 'center', maxWidth: 460, margin: '0 0 18px' }}>
            管理後台無法連到後端。請確認服務是否啟動,或是否在同一個網段。
          </p>

          <div style={{
            padding: 14, background: '#000',
            border: `1px solid ${hudTokens.crimson}55`, borderRadius: 4,
            fontFamily: hudTokens.fontMono, fontSize: 11, color: hudTokens.crimson,
            letterSpacing: 0.3, lineHeight: 1.7, marginBottom: 18, minWidth: 380,
          }}>
            <div style={{ color: textDim, fontSize: 9, letterSpacing: 1.5, marginBottom: 4 }}>ERR · NETWORK_UNREACHABLE</div>
            connect ECONNREFUSED 127.0.0.1:42<br/>
            <span style={{ color: textDim }}>at TCPConnectWrap.afterConnect</span>
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            <span style={{ padding: '10px 18px', background: accent, color: '#000', borderRadius: 4, fontFamily: hudTokens.fontMono, fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>
              ↻ 重試 (8s)
            </span>
            <span style={{ padding: '10px 18px', border: `1px solid ${line}`, color: text, borderRadius: 4, fontFamily: hudTokens.fontMono, fontSize: 12 }}>檢查設定</span>
            <span style={{ padding: '10px 18px', border: `1px solid ${line}`, color: text, borderRadius: 4, fontFamily: hudTokens.fontMono, fontSize: 12 }}>檢視日誌</span>
          </div>
          <div style={{ marginTop: 18, fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, letterSpacing: 0.5 }}>
            上次成功連線 · 14:02:48 · 已嘗試 3 次
          </div>
        </div>
      )}
    </AdminPageShell>
  );
}

function ErrorStateRateExceeded({ theme = 'dark' }) {
  return (
    <AdminPageShell route="dashboard" title="Dashboard" en="WARN · RATE LIMIT" theme={theme}>
      {({ panel, line, text, textDim, accent, radius }) => (
        <div style={{
          flex: 1, background: panel, border: `1px solid ${hudTokens.amber}55`, borderRadius: radius,
          padding: 40, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column',
        }}>
          <HudCorners size={20} color={hudTokens.amber} inset={20} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 22 }}>
            <div style={{
              width: 56, height: 56, borderRadius: '50%',
              border: `2px solid ${hudTokens.amber}`, color: hudTokens.amber,
              fontSize: 24, background: 'rgba(251, 191, 36, 0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>⚠</div>
            <div>
              <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.amber, letterSpacing: 1.5, marginBottom: 4 }}>WARNING · RATE_EXCEEDED</div>
              <h2 style={{ margin: 0, fontSize: 22, fontWeight: 600, color: text, fontFamily: hudTokens.fontDisplay, letterSpacing: 1 }}>速率上限觸發 · 已啟動慢動作模式</h2>
            </div>
          </div>

          {/* live chart */}
          <div style={{ background: '#000', border: `1px solid ${line}`, borderRadius: 6, padding: 16, height: 180, position: 'relative', marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10, fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 1, color: textDim }}>
              <span>訊息 / 秒 · 近 60 秒</span>
              <span style={{ marginLeft: 'auto', color: hudTokens.amber }}>● 上限 12/s</span>
            </div>
            {/* threshold line */}
            <div style={{ position: 'absolute', left: 16, right: 16, top: 50, borderTop: `1px dashed ${hudTokens.amber}`, opacity: 0.6 }} />
            <svg width="100%" height="100" viewBox="0 0 400 100" preserveAspectRatio="none">
              <polyline points="0,80 25,75 50,72 75,68 100,55 125,40 150,28 175,18 200,15 225,18 250,22 275,32 300,28 325,30 350,38 375,42 400,40"
                fill={`${hudTokens.amber}22`} stroke={hudTokens.amber} strokeWidth="1.5" />
            </svg>
            <div style={{ position: 'absolute', right: 16, top: 26, fontFamily: hudTokens.fontMono, fontSize: 22, color: hudTokens.amber, fontWeight: 700, letterSpacing: 1 }}>23.4/s</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 16 }}>
            <ErrStat label="目前速率" value="23.4/s" col={hudTokens.amber} text={text} textDim={textDim} line={line} />
            <ErrStat label="上限"     value="12/s"   col={textDim}        text={text} textDim={textDim} line={line} />
            <ErrStat label="慢動作降速" value="×0.5"  col={accent}          text={text} textDim={textDim} line={line} />
          </div>

          <div style={{
            padding: 12, background: 'rgba(251, 191, 36, 0.08)',
            border: `1px solid ${hudTokens.amber}55`, borderRadius: 4,
            fontSize: 12, color: text, lineHeight: 1.7, marginBottom: 16,
          }}>
            系統自動把所有觀眾的彈幕速度乘以 0.5,讓螢幕還能讀。等速率回到 8/s 以下會自動恢復。
          </div>

          <div style={{ display: 'flex', gap: 10, marginTop: 'auto' }}>
            <span style={{ padding: '10px 18px', background: accent, color: '#000', borderRadius: 4, fontFamily: hudTokens.fontMono, fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>調整速率設定</span>
            <span style={{ padding: '10px 18px', border: `1px solid ${line}`, color: text, borderRadius: 4, fontFamily: hudTokens.fontMono, fontSize: 12 }}>暫時停止接收</span>
            <span style={{ padding: '10px 18px', border: `1px solid ${line}`, color: textDim, borderRadius: 4, fontFamily: hudTokens.fontMono, fontSize: 12 }}>關掉警告</span>
          </div>
        </div>
      )}
    </AdminPageShell>
  );
}

function ErrStat({ label, value, col, text, textDim, line }) {
  return (
    <div style={{ padding: 12, border: `1px solid ${line}`, borderRadius: 4 }}>
      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 9, letterSpacing: 1.5, color: textDim, marginBottom: 6 }}>{label}</div>
      <div style={{ fontFamily: hudTokens.fontDisplay, fontSize: 22, fontWeight: 600, color: col, letterSpacing: 1 }}>{value}</div>
    </div>
  );
}

function ErrorStateUploadFailed({ theme = 'dark' }) {
  return (
    <AdminPageShell route="fonts" title="字型管理" en="FONTS · UPLOAD FAILED" theme={theme}>
      {({ panel, line, text, textDim, accent, radius }) => (
        <div style={{
          flex: 1, display: 'grid', gridTemplateColumns: '1fr 380px', gap: 16,
          minHeight: 0,
        }}>
          {/* Left — file list with the failed entry */}
          <div style={{ background: panel, border: `1px solid ${line}`, borderRadius: radius, padding: 20, overflow: 'auto' }}>
            <HudLabel color={textDim}>已上傳字型</HudLabel>
            <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { n: 'NotoSansTC-Bold.woff2',    s: '512 KB', state: 'ok',     pct: 100 },
                { n: 'JetBrainsMono-Regular.woff2', s: '124 KB', state: 'ok',     pct: 100 },
                { n: 'CustomDisplay-Heavy.ttf', s: '8.2 MB', state: 'failed', pct: 64,  err: 'TTF 含未授權字符 / 缺 license metadata' },
                { n: 'Inter-Variable.woff2',    s: '386 KB', state: 'ok',     pct: 100 },
              ].map((f, i) => (
                <div key={i} style={{
                  padding: '12px 14px',
                  background: f.state === 'failed' ? 'rgba(248, 113, 113, 0.06)' : 'transparent',
                  border: `1px solid ${f.state === 'failed' ? `${hudTokens.crimson}55` : line}`,
                  borderRadius: 4,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: f.state === 'ok' ? 0 : 6 }}>
                    <span style={{
                      width: 32, height: 32, borderRadius: 4,
                      background: f.state === 'failed' ? `${hudTokens.crimson}1c` : hudTokens.cyanSoft,
                      color: f.state === 'failed' ? hudTokens.crimson : accent,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: hudTokens.fontMono, fontSize: 9, fontWeight: 700, letterSpacing: 0.5,
                    }}>{f.n.split('.').pop().toUpperCase()}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 12, color: text, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.n}</div>
                      <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, marginTop: 2, letterSpacing: 0.3 }}>{f.s}</div>
                    </div>
                    {f.state === 'ok' && <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.lime, letterSpacing: 0.5 }}>✓ 完成</span>}
                    {f.state === 'failed' && <span style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: hudTokens.crimson, letterSpacing: 0.5 }}>✗ 失敗</span>}
                  </div>
                  {f.state === 'failed' && (
                    <>
                      <div style={{
                        height: 4, background: '#000', borderRadius: 2, overflow: 'hidden', marginBottom: 6,
                      }}>
                        <div style={{ width: `${f.pct}%`, height: '100%', background: hudTokens.crimson }} />
                      </div>
                      <div style={{
                        padding: '6px 8px', background: 'rgba(248, 113, 113, 0.06)',
                        borderRadius: 3, fontFamily: hudTokens.fontMono, fontSize: 10,
                        color: hudTokens.crimson, letterSpacing: 0.3,
                      }}>
                        {f.err}
                      </div>
                      <div style={{ marginTop: 8, display: 'flex', gap: 6 }}>
                        <span style={{ padding: '4px 10px', background: hudTokens.cyanSoft, color: accent, borderRadius: 3, fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 0.5 }}>↻ 重試</span>
                        <span style={{ padding: '4px 10px', border: `1px solid ${line}`, color: text, borderRadius: 3, fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 0.5 }}>跳過授權檢查</span>
                        <span style={{ padding: '4px 10px', border: `1px solid ${line}`, color: textDim, borderRadius: 3, fontFamily: hudTokens.fontMono, fontSize: 10, letterSpacing: 0.5 }}>取消</span>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — error detail */}
          <div style={{ background: panel, border: `1px solid ${hudTokens.crimson}55`, borderRadius: radius, padding: 18, overflow: 'auto' }}>
            <HudLabel color={hudTokens.crimson}>✗ 上傳失敗</HudLabel>
            <h3 style={{ margin: '10px 0 0', fontSize: 16, color: text, fontFamily: hudTokens.fontDisplay, letterSpacing: 0.5 }}>CustomDisplay-Heavy.ttf</h3>
            <div style={{ fontFamily: hudTokens.fontMono, fontSize: 10, color: textDim, marginTop: 4, letterSpacing: 0.3 }}>14:02:18 · 8.2 MB · 上傳了 64%</div>

            <div style={{
              marginTop: 14, padding: 12,
              background: '#000', border: `1px solid ${hudTokens.crimson}55`, borderRadius: 4,
              fontFamily: hudTokens.fontMono, fontSize: 11, color: hudTokens.crimson, lineHeight: 1.7, letterSpacing: 0.3,
            }}>
              <div style={{ fontSize: 9, color: textDim, letterSpacing: 1.5, marginBottom: 4 }}>STACK</div>
              FontVerifier::checkLicense<br/>
              <span style={{ color: textDim }}>at /opt/danmu/fontverify.js:142</span>
            </div>

            <HudLabel color={textDim} top>可能原因</HudLabel>
            <div style={{ marginTop: 8, fontSize: 12, color: text, lineHeight: 1.8 }}>
              <div>• TTF 缺少 <code style={{ fontFamily: hudTokens.fontMono, color: hudTokens.cyan }}>OS/2</code> table 中的授權標誌</div>
              <div>• 字型可能僅授權給原作者使用</div>
              <div>• 商用授權的字型應有 license metadata</div>
            </div>

            <HudLabel color={textDim} top>解決方案</HudLabel>
            <div style={{ marginTop: 8, fontSize: 12, color: text, lineHeight: 1.8 }}>
              <div>1. 從原作者拿到 .woff2 + license</div>
              <div>2. 或啟用「跳過授權檢查」(自負風險)</div>
              <div>3. 或改用 Google Fonts 上的免費替代</div>
            </div>
          </div>
        </div>
      )}
    </AdminPageShell>
  );
}

Object.assign(window, {
  SetupWizard,
  EmptyStateMessages, EmptyStatePolls, EmptyStateFonts,
  ErrorStateConnectionLost, ErrorStateRateExceeded, ErrorStateUploadFailed,
});
