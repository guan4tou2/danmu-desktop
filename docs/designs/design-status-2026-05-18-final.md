# Status Summary — 2026-05-18 final EOS

**Branch:** `claude/design-v2-retrofit`
**Sprint:** Polestar pivot + design v4 brief 0518 series + P1 backlog ship
**Tests:** 1164 server pytest pass / 444 jest pass

---

## ✅ Shipped this session (chronological)

### Brief 0518 round 1 (4 items)

1. **Replay annotation timeline** — `services/replay_annotations.py` + admin-session-detail.js (4 label types, hover-CTA, modal, list panel with delete)
2. **Time-bound ban** — `services/moderation_bans.py` (audit-log-backed, lazy-check) + admin-modbans.js (picker modal, expires chip, permanent confirm)
3. **Sessions bucket reframe** — admin-sessions.js (chronological buckets, collapse, per-session sparkline)
4. **Open Qs** — 4a mobile hamburger sheet + 4b viewer hides fp + 4c nickname popover + 4d hero closed

### Brief 0518-v2 (1 item)

5. **Custom-duration "自訂" chip** — modbans picker with slide-reveal input + 小時/天 toggle

### Brief 0518-v3 (3 items)

6. **Viewer desktop theme chip** — ☼/◐/☾ 3-segment in hero
7. **Moderation 6 sub-tabs** — queue/bans/blacklist/filters/ratelimit/fingerprints
8. **Light viewer 3 token fixes** — hero shadow, chip border opacity, marquee filter

### Theme unification (user-raised)

9. **Single `theme-mode` storage key + `<html data-theme>` mechanism** — admin + viewer + mobile sheet sync. Cross-tab `storage` event. Legacy keys auto-migrate

### Polestar polish + vocab sweep

10. **Light theme admin shell audit pass 2** — `--hover-tint-{weak,strong,_}` theme-aware tokens, 9 hover bg migrations
11. **Dead route cleanup** — modqueue/modbans/broadcast standalone entries removed (now alias-only)
12. **Skeleton consistency** — AdminSkeletons wired into Sessions/Modbans/Audit
13. **Motion language** — spring overshoot on chip clicks + toast slide-in
14. **Tablet breakpoints** — Polls stacks at ≤1023, Effects 2-col at 769-1023
15. **Vocab sweep** — admin-broadcast.js / command palette / quick-action / dashboard / help drawer / locales / audit category label / overlay template "STANDBY" → "OVERLAY OFF" / "IDLE" everywhere

### P2 Polestar code cleanup

16. **Route rename** — `#/broadcast` → `#/overlay` (alias preserved for old bookmarks). Sidebar `data-route="overlay"`. `admin-broadcast.js` checks both routes
17. **Backend lifecycle aliases** — `services/broadcast.py` accepts `overlay_on`/`overlay_off`; `is_overlay_on()`/`is_overlay_off()` predicates added
18. **docs/FEATURES.md updated** — broadcast page section rewritten in polestar vocab

### P1 #1 Polls multi-question + per-question image

19. **Backend metadata** — `mode` / `default_duration_s` / `title` added to `create_session()` + serialized in status payload + 6 tests
20. **Admin UI re-wire** — `sessionStart()` computes avg duration from queue, sends along with mode
21. **Viewer multi-Q** — image hero (mobile ≤160px / desktop ≤200px) + progress dots (current cyan+wider) + auto-mode rAF timer bar + state normalizer carries metadata

### P1 #5 Fonts subset backend

22. **services/fonts.py** — `SUBSET_PRESETS` (6 presets: latin / latin_ext / cjk_common / cjk_full / kana / hangul) + `_parse_unicode_range()` + `subset_uploaded_font(font_name, unicode_range)`. fontTools is optional dep; graceful 503 when missing
23. **routes/admin/uploads.py** — `GET /admin/fonts/subset/presets` + `POST /admin/fonts/<name>/subset`
24. **14 new tests** — range parsing / preset validation / missing-dep / missing-file

---

## 🔴 Remaining for design (1 item)

### P1 #5 — Fonts subset UI

Backend ready. Design needs to spec:
- Subset range picker — preset chips (中文 BMP / 中日韓 / Latin only / 自訂) vs unicode-range input
- Before/after size display + saved % indicator
- Confirmation modal (subset is in-place + irreversible)

---

## 🟡 Closed pending design surfaced gap

### P1 #2 Display per-setting compound

Codebase already has 6 rows + audience enable toggle + PreviewCard + SummaryCard + min/max range when audience can override. Without a specific gap design surfaces, engineering recommends closing this item.

---

## 🟢 Fully closed

- P1 #1 Polls multi-Q + image (this session)
- P1 #3 Effects user .dme preview (already shipped — P3-2 follow-up)
- P1 #4 Sounds per-tile volume (already shipped — P1-2)
- P2 #6 admin-broadcast.js rename (this session)
- P2 #7 services/broadcast.py lifecycle ack (this session)
- P3 Skeleton consistency (this session)
- P3 Motion language (this session)
- P3 Tablet breakpoints (this session)
- OBS Browser Source wizard (record-only)
- Cookies/Privacy modal (declined)
- Annotation custom labels (A: keep 4)
- ban_expired auto-emit (A: lazy)
- Sessions pagination (A: client-side)

---

## 📊 Visual / functional regression risk

Low. Adoption strategy:
- All migrations additive (mode aliases, new tokens, new routes alongside old)
- Backend storage preserved (`live`/`standby` JSON stays; new vocab is wire-format)
- Tests green throughout (1164 server / 444 jest)
- Optional dep (fontTools) gracefully degrades

---

## 建議下一輪

**P1 #5 Fonts subset UI** 是唯一還等 design 的項目。其他 P1/P2/P3 backlog 都已 ship 或 closed。

可考慮：
- 給 design P1 #5 brief
- 收成下一個 v5.x release（CHANGELOG + version bump）
- 或開啟 P0-3 Display compound 的工程 audit pass，看是否還有實質 gap

工程下一步可獨立進行：CHANGELOG 撰寫、tests browser suite isolated run、`fonttools` 加 dep 後跑端到端 subset 驗證。
