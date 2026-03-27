# Sticker Danmu Design

**Date:** 2026-03-27
**Status:** Approved

## Overview

Add two related features to the danmu system:

1. **GIF URL Support** — relax existing `isImage` rendering to display GIF URLs properly with size constraints in the overlay.
2. **Local Sticker Library** — admin uploads GIF/PNG/WebP stickers to the server; viewers trigger them via `:sticker-name:` syntax, which converts the message into a full-size image danmu flying across the overlay.

## Architecture

### Sticker positioning relative to existing systems

| Existing | Sticker |
|----------|---------|
| `server/services/emoji.py` | `server/services/stickers.py` |
| `server/static/emojis/` | `server/static/stickers/` |
| `:emoji-name:` → inline small image in text | `:sticker-name:` → full-size image flying across overlay |
| Admin uploads emoji images | Admin uploads stickers (GIF/PNG/WebP) |

Stickers reuse the existing `isImage` rendering path in the overlay — no new overlay rendering logic needed.

### Directory structure

```
server/static/stickers/     # sticker image files
server/services/stickers.py # service layer (modeled after emoji/sound)
```

## Components

### 1. `server/services/stickers.py`

- Scans `static/stickers/` for `.gif`, `.png`, `.webp` files
- `resolve(text) -> Optional[str]` — if `text` is exactly `:name:`, returns the local URL `/static/stickers/<filename>`; otherwise returns `None`
- `list_stickers() -> List[Dict]` — returns list of `{name, url, filename}` for admin UI and sticker picker

### 2. API changes

**New public endpoint (api.py):**
```
GET /stickers
→ {"stickers": [{name, url, filename}, ...]}
```

**New admin endpoints (admin.py):**
```
POST /admin/upload_sticker
  body: multipart form with "file" field
  limits: GIF/PNG/WebP only, max 2MB
  → {"name": "fire-logo", "url": "/static/stickers/fire-logo.gif"}

DELETE /admin/stickers/<name>
  → {"status": "OK"}
```

### 3. `/fire` endpoint parsing

In `_resolve_danmu_style()` within `api.py`, add sticker resolution before existing emoji parsing:

```python
# Sticker resolution — must run before emoji parsing
if not data.get("isImage"):
    sticker_url = sticker_service.resolve(data.get("text", ""))
    if sticker_url:
        data["isImage"] = True
        data["text"] = sticker_url
```

Rule: **only pure `:name:` messages** (entire text is one sticker reference) become sticker danmu. Mixed text like `"哈哈 :fire-logo:"` continues through the existing emoji inline path.

### 4. Overlay adjustment (GIF-friendly sizing)

In the image danmu CSS (applied in `child-ws-script.js` or `track-manager.js`):

```css
/* image danmu (including GIF stickers) */
max-width: 200px;
max-height: 120px;
object-fit: contain;
```

This applies to both GIF URL danmu and local sticker danmu since both use `isImage: true`.

### 5. Admin UI

New **Stickers** management section in `admin.html`, styled after the existing Sounds section:

- Thumbnail grid of uploaded stickers with name labels
- Upload button (accepts GIF/PNG/WebP, 2MB limit)
- Delete button per sticker
- Trigger syntax hint displayed: `:sticker-name:`

### 6. Web UI sticker picker (optional)

A sticker picker button next to the send input in `index.html`/`main.js`:
- Fetches `/stickers` and displays thumbnails
- Clicking a sticker inserts `:sticker-name:` into the text input
- Does not affect backend functionality; purely a UX convenience

## Data flow

```
User types ":fire-logo:" → POST /fire
  → _resolve_danmu_style()
    → sticker_service.resolve(":fire-logo:") → "/static/stickers/fire-logo.gif"
    → data["isImage"] = True, data["text"] = "/static/stickers/fire-logo.gif"
  → forward_to_ws_server(data)
    → overlay receives isImage=true message
    → renders <img src="/static/stickers/fire-logo.gif"> flying across screen
```

## Validation

- Upload: file extension + MIME type check (using `python-magic`, already a dependency)
- Sticker name: derived from filename, sanitized (alphanumeric + hyphens only)
- Max file size: 2MB enforced at upload
- Max sticker count: configurable cap (default 50) to prevent storage bloat

## Testing

- Unit tests in `server/tests/test_stickers.py`
  - `resolve()` with valid/invalid sticker names
  - `list_stickers()` returns correct structure
  - Upload validation (wrong extension, oversized file)
  - Delete removes file and clears cache
- Integration test: fire with `:sticker-name:` text → verify `isImage=True` and correct URL in WS message
- Browser test in `test_browser_admin.py`: upload sticker → verify thumbnail appears in admin UI

## Out of scope

- Video danmu (mp4/webm) — deferred; browser autoplay restrictions make this complex
- Sticker packs / categories — YAGNI
- Per-sticker cooldown — can be added later if spam becomes an issue
