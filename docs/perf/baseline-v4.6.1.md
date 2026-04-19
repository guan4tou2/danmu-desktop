# Performance Baseline — v4.6.1

Captured 2026-04-20 on localhost via curl timing (dev laptop, no network latency).

## HTTP payloads

| Asset | Size | Notes |
|---|---:|---|
| `/` (homepage HTML) | 21.3 KB | Composer + settings panel + effects |
| `static/css/tokens.css` | 3.6 KB | Design tokens source |
| `static/css/style.css` | 24.5 KB | Hand-written styles |
| `static/css/tailwind.css` | 49.8 KB | Compiled utilities |
| `static/js/i18n.js` | 102.9 KB | All 4 locales × 485 keys |
| `static/js/main.js` | 36.8 KB | Main page renderer |
| `static/js/admin.js` | 86.7 KB | Admin dashboard renderer |

## Latency (curl, local)

| Endpoint | TTFB |
|---|---:|
| `GET /` | 19.5 ms |
| `POST /fire` (p50) | ~2 ms |
| `POST /fire` (best) | 1.6 ms |

## Font loading strategy

```
family=Bebas+Neue          (1 weight)
&family=Noto+Sans          (5 weights)  — Latin
&family=Noto+Sans+TC       (5 weights)  — Traditional Chinese
&family=Noto+Sans+JP       (3 weights)  — Japanese
&family=Noto+Sans+KR       (3 weights)  — Korean
&family=JetBrains+Mono     (3 weights)  — Mono
&display=swap              — FOUT over FOIT
```

Google Fonts serves WOFF2 with `unicode-range` subsetting, so browsers
only download glyph subsets actually rendered on the page. For a
zh-TW user, only Bebas + Noto Sans + Noto Sans TC subsets download.
JP/KR fonts are referenced but not fetched unless a JP/KR character
appears on screen.

## Known-slow paths

- `i18n.js` is the largest client asset at 102.9 KB. Could be split
  per-locale to cut ~75% but adds build complexity. Revisit when
  it grows past 200 KB.
- `/admin/` currently collapses everything into `<details>` blocks —
  opening all details at once recomputes layout on a 3888px-tall page.
  Deferred to v4.7.0 IA refactor.

## Next measurement points

- Real browser First Contentful Paint (needs Playwright installed)
- Largest Contentful Paint of the "Danmu Fire" hero
- Actual Google Fonts byte payload per locale
- Effect CSS injection time (`.dme` keyframe registration)
