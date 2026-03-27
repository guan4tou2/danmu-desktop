# Sticker Danmu Design

**Date:** 2026-03-27
**Status:** Approved

## Overview

Add two related features to the danmu system:

1. **GIF URL Support** — relax existing `isImage` overlay rendering to handle GIF URLs with appropriate size constraints.
2. **Local Sticker Library** — admin uploads GIF/PNG/WebP stickers to the server; viewers trigger them via `:sticker_name:` syntax, which converts the message into a full-size image danmu flying across the overlay.

## Architecture

### Sticker positioning relative to existing systems

| Existing | Sticker |
|----------|---------|
| `server/services/emoji.py` | `server/services/stickers.py` |
| `server/static/emojis/` | `server/static/stickers/` |
| `:emoji_name:` → inline small image in text | `:sticker_name:` → full-size image flying across overlay |
| Admin uploads emoji images | Admin uploads stickers (GIF/PNG/WebP) |

Stickers reuse the existing `isImage` rendering path in the overlay. No new rendering logic is needed, with the exception of image size constraints and a regex update in `track-manager.js`.

### Directory structure

```
server/static/stickers/     # sticker image files
server/services/stickers.py # service layer (modeled after emoji/sound)
```

## Components

### 1. `server/services/stickers.py`

- Scans `static/stickers/` for `.gif`, `.png`, `.webp` files on init; rescans on demand
- `resolve(text) -> Optional[str]`
  - Strips leading/trailing whitespace from `text` before matching
  - Matches `^:([a-zA-Z0-9_]{1,32}):$` (same character set as emoji — alphanumeric + underscore, no hyphens)
  - Returns the sticker **filename** (e.g. `fire_logo.gif`) if found, else `None`
  - Returns filename only; the caller constructs the absolute URL
- `list_stickers() -> List[Dict]` — returns `{name, url, filename}` list with relative URLs (`/static/stickers/<filename>`)
- `delete(name) -> bool` — removes the file, immediately calls rescan to clear in-memory cache; returns `True` if found and deleted
- Max sticker count: `Config.STICKER_MAX_COUNT = 50` (added to `config.py`); `ValueError` raised if exceeded on upload
- The singleton instance is reset in `conftest.py`'s `app` fixture, following the same pattern as `emoji_service`, `sound_service`, etc.

### 2. URL construction for sticker danmu

`request.host_url` (available in Flask request context) is used to build an absolute URL. Sticker resolution only occurs inside the `/fire` HTTP endpoint, which always has an active request context. No fallback is needed — other code paths (replay, scheduler) replay already-resolved absolute URLs from history.

Constructed URL example: `http://127.0.0.1:5000/static/stickers/fire_logo.gif`

**CSP amendment required in `child.html`:** The overlay window's `img-src` directive currently allows `'self' https: data:`. Since the Electron child window is loaded from `file://`, `'self'` does not cover `http://127.0.0.1:*`. The `child.html` CSP must be updated:

```html
<!-- Before -->
img-src 'self' https: data:;
<!-- After -->
img-src 'self' https: http://127.0.0.1:* http://localhost:* data:;
```

`is_valid_image_url()` in `utils.py` already accepts `http://` URLs with `.gif/.png/.webp` extensions. Importantly, this guard runs **before** `_resolve_danmu_style()` and only applies to user-supplied `isImage: true` messages. Sticker resolution happens inside `_resolve_danmu_style()` after that guard — no conflict.

Note: `is_valid_image_url()` already includes `webp` in its extension regex, so no change is needed there.

### 3. API changes

**New public endpoint (api.py):**

`GET /stickers` is intentionally public (no auth required) — it lists display names and relative URLs only, necessary for the web UI sticker picker. Uses `@rate_limit("api", "API_RATE_LIMIT", "API_RATE_WINDOW")` consistent with other public endpoints.

```
GET /stickers
→ {"stickers": [{name, url, filename}, ...]}
```

**New admin endpoints (admin.py):**

Both endpoints require `@rate_limit("admin", ...)`, `@require_csrf`, and `session.get("logged_in")` check, matching the existing pattern.

```
POST /admin/upload_sticker
  body: multipart form with "file" field
  limits: GIF/PNG/WebP only (MIME: image/gif, image/png, image/webp), max 2MB
  name collision checks:
    - blocked if name already exists in sticker library
    - blocked if name already exists in emoji library (prevents shadowing)
    - note: blocking emoji upload for existing sticker names is out of scope;
      sticker resolution runs before emoji parsing so stickers always win
  → success: {"name": "fire_logo", "url": "/static/stickers/fire_logo.gif"}
  → error:   {"error": "<reason>"}, 400/401/413/500

DELETE /admin/stickers/<name>
  name: validated against ^[a-zA-Z0-9_]{1,32}$ before file lookup
  path traversal guard: Path.resolve() + prefix assertion (same pattern as sound.py)
  calls sticker_service.delete(name) which rescans to clear cache
  → success: {"status": "OK"}
  → error:   {"error": "<reason>"}, 400/401/404/500
```

**MIME type allowlist (python-magic):**
```python
ALLOWED_MIME_TYPES = {"image/gif", "image/png", "image/webp"}
```
`python-magic` is already a dependency. These are the exact strings it returns for these formats.

### 4. `/fire` endpoint parsing

In `_resolve_danmu_style()` within `api.py`, sticker resolution runs at the **very start of the function**, before all other processing (emoji, sound, effects, etc.). Sticker danmu **does still receive** the normal `size`/`speed`/`opacity`/`color`/`fontInfo` resolution — these are benign for image display and simplifies the code path.

The existing `text` variable is captured before sticker resolution so sound matching still uses the original `:sticker_name:` text. A local boolean flag (not stored in `data`) controls whether sound matching runs:

```python
def _resolve_danmu_style(data):
    # --- Sticker resolution (runs first) ---
    original_text = data.get("text", "")
    is_sticker = False
    if not data.get("isImage"):
        sticker_filename = sticker_service.resolve(original_text)
        if sticker_filename:
            base = request.host_url.rstrip("/")
            data["text"] = f"{base}/static/stickers/{sticker_filename}"
            data["isImage"] = True
            is_sticker = True

    # ... existing font/color/opacity/size/speed/layout/nickname/effects logic ...

    # --- Sound matching (uses original_text, skipped for stickers) ---
    if not is_sticker:
        sound_match = sound_service.match(original_text, effects_input if effects_input else None)
        if sound_match:
            data["sound"] = sound_match

    return data
```

No `_skip_sound` key is stored in `data` — a local variable is used to avoid leaking into the WS payload.

Rule: **only pure `:name:` messages** (entire text after stripping whitespace is one sticker reference) become sticker danmu. Mixed text like `"哈哈 :fire_logo:"` continues through the existing emoji inline path.

The filter engine in `fire()` runs before `_resolve_danmu_style()` and processes the raw `:sticker_name:` text. This is intentional — stickers are admin-controlled content and normal filter/blacklist rules apply. Admins should avoid naming stickers with strings that match their own blacklist rules.

### 5. Overlay adjustment (`track-manager.js`)

**a) Extend image-detection regex to include `webp`:**
```javascript
// Before:
/^https?:\/\/([^\s/]+\/)*[^\s/]+\.(gif|png|jpeg|jpg)$/i
// After:
/^https?:\/\/([^\s/]+\/)*[^\s/]+\.(gif|png|jpeg|jpg|webp)$/i
```

**b) Add size constraints to `isImage` rendering branch** (inline styles on the `<img>` element, in the existing branch where the image element is created):
```javascript
img.style.maxWidth = "200px";
img.style.maxHeight = "120px";
img.style.objectFit = "contain";
```

### 6. Admin UI

New **Stickers** management section in `admin.html`, styled after the existing Sounds section:

- Thumbnail grid of uploaded stickers with name labels
- Upload button (accepts GIF/PNG/WebP, 2MB limit)
- Delete button per sticker (uses `confirm()` dialog, consistent with keyword removal)
- Trigger syntax hint displayed: `:sticker_name:`

### 7. Web UI sticker picker (optional)

A sticker picker button next to the send input in `index.html`/`main.js`:
- Fetches `/stickers` and displays thumbnails
- Clicking a sticker inserts `:sticker_name:` into the text input
- Purely a UX convenience; does not affect backend functionality

## Data flow

```
User types ":fire_logo:" → POST /fire
  → filter_engine.check(":fire_logo:") → passes
  → _resolve_danmu_style()
    → original_text = ":fire_logo:", is_sticker = False
    → sticker_service.resolve(":fire_logo:") → "fire_logo.gif"
    → data["text"] = "http://127.0.0.1:5000/static/stickers/fire_logo.gif"
    → data["isImage"] = True, is_sticker = True
    → normal size/speed/opacity applied
    → sound matching skipped (is_sticker=True)
  → forward_to_ws_server(data)
    → overlay receives isImage=true + absolute URL
    → track-manager.js: URL matches updated regex → creates <img> with size constraints
    → GIF animates while flying across screen
```

## Validation

- Upload: extension + MIME type check (`{"image/gif", "image/png", "image/webp"}`)
- Sticker name: derived from filename stem, must match `^[a-zA-Z0-9_]{1,32}$`
- Name collision: blocked if name exists in sticker library or emoji library
- Input text stripped of whitespace before sticker regex match
- Max file size: 2MB enforced at upload
- Max sticker count: `Config.STICKER_MAX_COUNT = 50` (new constant in `config.py`)
- Path traversal guard on delete: `Path.resolve()` + prefix assertion (same pattern as `sound.py`)
- CSP amendment: `child.html` img-src updated to allow `http://127.0.0.1:*` and `http://localhost:*`

## Testing

- Unit tests in `server/tests/test_stickers.py`
  - `resolve()` with valid sticker names, whitespace variants, hyphens (no match), mixed text
  - `list_stickers()` returns correct structure
  - `delete()` removes file and rescans cache
  - Upload validation: wrong extension, wrong MIME type, oversized file, name collision with emoji and with existing sticker
  - Count cap: uploading beyond `STICKER_MAX_COUNT` returns error
  - Path traversal rejected on delete
- Integration test: fire with `:sticker_name:` → verify `isImage=True`, absolute URL in WS message, no `sound` field, no `_skip_sound` key in payload
- `conftest.py` `app` fixture: reset `sticker_service` singleton alongside existing service resets
- Browser test in `test_browser_admin.py`: upload sticker → verify thumbnail appears in admin UI

## Out of scope

- Video danmu (mp4/webm) — deferred; browser autoplay restrictions make this complex
- Sticker packs / categories — YAGNI
- Per-sticker cooldown — can be added later if spam becomes an issue
- Hyphens in sticker names — excluded to match existing emoji name regex (`[a-zA-Z0-9_]`)
- Blocking emoji uploads that shadow sticker names — sticker resolution runs first so conflict does not occur; low priority
