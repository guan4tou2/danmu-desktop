# Sticker Danmu Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a local sticker library (admin uploads GIF/PNG/WebP, viewers trigger with `:name:`) and GIF-friendly size constraints to the overlay.

**Architecture:** A new `StickerService` (modeled after `EmojiService`) handles file management. The `/fire` endpoint's `_resolve_danmu_style()` checks for sticker syntax before emoji/sound processing and converts matching messages to `isImage` danmu. The overlay gets a `webp` regex extension and size constraints on image danmu.

**Spec:** `docs/superpowers/specs/2026-03-27-sticker-danmu-design.md`

**Tech Stack:** Python (Flask, python-magic), JavaScript (Electron renderer), HTML/CSS

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Create | `server/services/stickers.py` | StickerService: scan, resolve, list, delete |
| Create | `server/static/stickers/.gitkeep` | Ensure directory is tracked by git |
| Create | `server/tests/test_stickers.py` | Unit tests for StickerService |
| Modify | `server/config.py` | Add `STICKER_MAX_COUNT = 50` |
| Modify | `server/tests/conftest.py` | Reset sticker service state after each test |
| Modify | `server/routes/api.py` | Add `GET /stickers`; add sticker resolution in `_resolve_danmu_style()` |
| Modify | `server/routes/admin.py` | Add `POST /admin/upload_sticker`, `DELETE /admin/stickers/<name>` |
| Modify | `server/tests/test_resolve_style.py` | Add sticker resolution tests |
| Modify | `danmu-desktop/child.html` | Amend CSP to allow `http://127.0.0.1:*` in `img-src` |
| Modify | `danmu-desktop/renderer-modules/track-manager.js` | Add `webp` to regex; add size constraints on image danmu |
| Modify | `server/templates/admin.html` | Add Stickers management section |

---

## Task 1: Config constant + StickerService

**Files:**
- Create: `server/services/stickers.py`
- Create: `server/static/stickers/.gitkeep`
- Create: `server/tests/test_stickers.py`
- Modify: `server/config.py`

- [ ] **Step 1: Add STICKER_MAX_COUNT to config.py**

  In `server/config.py`, after the `SCHEDULER_MAX_JOBS` line (~line 101), add:

  ```python
  # Sticker configuration
  STICKER_MAX_COUNT = int(os.getenv("STICKER_MAX_COUNT", "50"))
  ```

- [ ] **Step 2: Create the stickers directory placeholder**

  ```bash
  mkdir -p server/static/stickers
  touch server/static/stickers/.gitkeep
  ```

- [ ] **Step 3: Write the failing tests for StickerService**

  Create `server/tests/test_stickers.py`:

  ```python
  """Tests for server.services.stickers — StickerService."""
  import pytest
  from server.services import stickers as sticker_mod
  from server.services.stickers import StickerService


  @pytest.fixture()
  def svc(tmp_path, monkeypatch):
      """Fresh StickerService with _STICKERS_DIR pointed at tmp_path."""
      monkeypatch.setattr(sticker_mod, "_STICKERS_DIR", tmp_path)
      monkeypatch.setattr(sticker_mod, "_MAX_COUNT", 3)
      return StickerService()


  # ── resolve ──────────────────────────────────────────────────────────────


  def test_resolve_returns_none_when_empty(svc):
      assert svc.resolve("") is None


  def test_resolve_returns_none_for_plain_text(svc):
      assert svc.resolve("hello world") is None


  def test_resolve_returns_none_for_mixed_text(svc, tmp_path):
      (tmp_path / "fire.gif").write_bytes(b"GIF89a")
      svc._scan()
      assert svc.resolve("hello :fire:") is None


  def test_resolve_returns_none_for_unknown_sticker(svc):
      assert svc.resolve(":nope:") is None


  def test_resolve_returns_filename_for_known_sticker(svc, tmp_path):
      (tmp_path / "fire.gif").write_bytes(b"GIF89a")
      svc._scan()
      assert svc.resolve(":fire:") == "fire.gif"


  def test_resolve_strips_whitespace(svc, tmp_path):
      (tmp_path / "wave.png").write_bytes(b"\x89PNG")
      svc._scan()
      assert svc.resolve("  :wave:  ") == "wave.png"


  def test_resolve_rejects_hyphens(svc, tmp_path):
      # Hyphens not allowed in sticker names
      (tmp_path / "fire-logo.gif").write_bytes(b"GIF89a")
      svc._scan()
      assert svc.resolve(":fire-logo:") is None


  def test_resolve_supports_webp(svc, tmp_path):
      (tmp_path / "burst.webp").write_bytes(b"RIFF")
      svc._scan()
      assert svc.resolve(":burst:") == "burst.webp"


  # ── list_stickers ─────────────────────────────────────────────────────────


  def test_list_stickers_empty(svc):
      result = svc.list_stickers()
      assert result == []


  def test_list_stickers_returns_sorted_list(svc, tmp_path):
      (tmp_path / "zzz.gif").write_bytes(b"GIF89a")
      (tmp_path / "aaa.png").write_bytes(b"\x89PNG")
      svc._scan()
      names = [s["name"] for s in svc.list_stickers()]
      assert names == sorted(names)
      assert "zzz" in names and "aaa" in names


  def test_list_stickers_has_correct_shape(svc, tmp_path):
      (tmp_path / "smile.gif").write_bytes(b"GIF89a")
      svc._scan()
      stickers = svc.list_stickers()
      assert len(stickers) == 1
      s = stickers[0]
      assert s["name"] == "smile"
      assert s["url"] == "/static/stickers/smile.gif"
      assert s["filename"] == "smile.gif"


  # ── delete ────────────────────────────────────────────────────────────────


  def test_delete_existing_sticker(svc, tmp_path):
      f = tmp_path / "boom.gif"
      f.write_bytes(b"GIF89a")
      svc._scan()
      assert svc.delete("boom") is True
      assert not f.exists()
      assert svc.resolve(":boom:") is None  # cache cleared


  def test_delete_nonexistent_sticker(svc):
      assert svc.delete("ghost") is False


  def test_delete_rejects_invalid_name(svc):
      assert svc.delete("../etc/passwd") is False


  def test_delete_all_extensions_for_same_name(svc, tmp_path):
      """If both boom.gif and boom.png exist, both are deleted."""
      (tmp_path / "boom.gif").write_bytes(b"GIF89a")
      (tmp_path / "boom.png").write_bytes(b"\x89PNG")
      svc._scan()
      assert svc.delete("boom") is True
      assert not (tmp_path / "boom.gif").exists()
      assert not (tmp_path / "boom.png").exists()


  # ── max count ────────────────────────────────────────────────────────────


  def test_max_count_raises_when_exceeded(svc, tmp_path):
      for i in range(3):
          (tmp_path / f"s{i}.gif").write_bytes(b"GIF89a")
      svc._scan()
      with pytest.raises(ValueError, match="sticker limit"):
          svc.check_count_limit()
  ```

- [ ] **Step 4: Run tests to verify they fail**

  ```bash
  cd /Users/guantou/Desktop/danmu-desktop
  uv run --project server python -m pytest server/tests/test_stickers.py -v --rootdir=.
  ```

  Expected: All tests FAIL with `ImportError` or `ModuleNotFoundError`.

- [ ] **Step 5: Implement StickerService**

  Create `server/services/stickers.py`:

  ```python
  """
  Sticker service for danmu.

  Admin uploads GIF/PNG/WebP stickers; viewers trigger with :name: syntax.
  Resolution returns the filename only; callers construct the absolute URL.

  Hot-scan: rescans on demand (no periodic background scan needed — stickers
  change infrequently compared to emojis/effects).
  """

  import logging
  import os
  import re
  import threading
  from pathlib import Path
  from typing import Dict, List, Optional

  logger = logging.getLogger(__name__)

  _STICKERS_DIR = Path(__file__).parent.parent / "static" / "stickers"
  _ALLOWED_EXTENSIONS = {"gif", "png", "webp"}
  _MAX_UPLOAD_SIZE = 2 * 1024 * 1024  # 2 MB
  _NAME_RE = re.compile(r"^[a-zA-Z0-9_]{1,32}$")
  _STICKER_SYNTAX_RE = re.compile(r"^:([a-zA-Z0-9_]{1,32}):$")
  _URL_PREFIX = "/static/stickers"
  _MAX_COUNT = 50  # overridden by Config.STICKER_MAX_COUNT at app startup


  class StickerService:
      """Sticker file management and resolution (not a singleton — use module-level instance)."""

      def __init__(self) -> None:
          self._cache: Dict[str, str] = {}  # name -> filename
          self._lock = threading.Lock()

      def _scan(self) -> None:
          """Scan _STICKERS_DIR and rebuild the in-memory cache."""
          _STICKERS_DIR.mkdir(parents=True, exist_ok=True)
          new_cache: Dict[str, str] = {}
          for p in _STICKERS_DIR.iterdir():
              if p.name.startswith(".") or not p.is_file():
                  continue
              ext = p.suffix.lstrip(".").lower()
              if ext not in _ALLOWED_EXTENSIONS:
                  continue
              name = p.stem
              if not _NAME_RE.match(name):
                  continue
              new_cache[name] = p.name
          with self._lock:
              self._cache = new_cache

      def resolve(self, text: str) -> Optional[str]:
          """Return the sticker filename if text is exactly ':name:', else None."""
          text = text.strip()
          m = _STICKER_SYNTAX_RE.match(text)
          if not m:
              return None
          name = m.group(1)
          with self._lock:
              return self._cache.get(name)

      def list_stickers(self) -> List[Dict[str, str]]:
          """Return [{name, url, filename}] sorted by name."""
          with self._lock:
              cache = dict(self._cache)
          return sorted(
              [
                  {"name": name, "url": f"{_URL_PREFIX}/{filename}", "filename": filename}
                  for name, filename in cache.items()
              ],
              key=lambda x: x["name"],
          )

      def delete(self, name: str) -> bool:
          """Delete all files for the given sticker name. Returns True if any file was deleted."""
          if not _NAME_RE.match(name):
              return False
          _STICKERS_DIR.mkdir(parents=True, exist_ok=True)
          deleted = False
          for ext in _ALLOWED_EXTENSIONS:
              candidate = _STICKERS_DIR / f"{name}.{ext}"
              # Path traversal guard
              try:
                  resolved = candidate.resolve()
                  if not str(resolved).startswith(str(_STICKERS_DIR.resolve())):
                      logger.warning("[Sticker] Path traversal attempt: %s", name)
                      return False
              except Exception:
                  return False
              if candidate.exists():
                  try:
                      candidate.unlink()
                      deleted = True
                  except OSError as e:
                      logger.error("[Sticker] Failed to delete %s: %s", candidate, e)
          if deleted:
              self._scan()
          return deleted

      def check_count_limit(self) -> None:
          """Raise ValueError if the sticker limit has been reached."""
          with self._lock:
              count = len(self._cache)
          if count >= _MAX_COUNT:
              raise ValueError(f"sticker limit reached ({count}/{_MAX_COUNT})")


  sticker_service = StickerService()
  ```

- [ ] **Step 6: Run tests to verify they pass**

  ```bash
  uv run --project server python -m pytest server/tests/test_stickers.py -v --rootdir=.
  ```

  Expected: All tests PASS.

- [ ] **Step 7: Update conftest.py to reset sticker state between tests**

  In `server/tests/conftest.py`, add import at the top with the other service imports:

  ```python
  from server.services import stickers as sticker_svc  # ty: ignore[unresolved-import]
  ```

  In the `app` fixture's teardown block (after `ws_queue.dequeue_all()`), add:

  ```python
  sticker_svc.sticker_service._cache.clear()
  ```

  Note: No lock needed — this matches the existing teardown style in conftest.py (e.g., `eff_svc._cache.clear()` is done without a lock). Test teardown is single-threaded.

- [ ] **Step 8: Run full test suite to confirm no regressions**

  ```bash
  uv run --project server python -m pytest server/tests/ -v --rootdir=. -x -q
  ```

  Expected: All existing tests PASS.

- [ ] **Step 9: Commit**

  ```bash
  git add server/services/stickers.py server/static/stickers/.gitkeep server/tests/test_stickers.py server/config.py server/tests/conftest.py
  git commit -m "feat: add StickerService with resolve/list/delete and STICKER_MAX_COUNT config"
  ```

---

## Task 2: Public API endpoint — GET /stickers

**Files:**
- Modify: `server/routes/api.py`

- [ ] **Step 1: Write the failing test**

  In `server/tests/test_stickers.py`, append:

  ```python
  # ── GET /stickers route ──────────────────────────────────────────────────


  def test_get_stickers_returns_empty_list(client):
      res = client.get("/stickers")
      assert res.status_code == 200
      data = res.get_json()
      assert data == {"stickers": []}


  def test_get_stickers_lists_uploaded_sticker(client, tmp_path, monkeypatch):
      import server.services.stickers as sticker_mod
      monkeypatch.setattr(sticker_mod, "_STICKERS_DIR", tmp_path)
      sticker_mod.sticker_service._cache.clear()
      (tmp_path / "wave.gif").write_bytes(b"GIF89a")
      sticker_mod.sticker_service._scan()

      res = client.get("/stickers")
      assert res.status_code == 200
      stickers = res.get_json()["stickers"]
      assert len(stickers) == 1
      assert stickers[0]["name"] == "wave"
      assert stickers[0]["url"] == "/static/stickers/wave.gif"
  ```

- [ ] **Step 2: Run to verify they fail**

  ```bash
  uv run --project server python -m pytest server/tests/test_stickers.py::test_get_stickers_returns_empty_list -v --rootdir=.
  ```

  Expected: FAIL — `404 Not Found`.

- [ ] **Step 3: Add GET /stickers to api.py**

  In `server/routes/api.py`, add this import at the top with the other service imports:

  ```python
  from ..services.stickers import sticker_service
  ```

  Then add the endpoint after the `/emojis` endpoint (around line 374):

  ```python
  @api_bp.route("/stickers", methods=["GET"])
  @rate_limit("api", "API_RATE_LIMIT", "API_RATE_WINDOW")
  def list_stickers():
      """列出所有可用的貼圖"""
      return _json_response({"stickers": sticker_service.list_stickers()})
  ```

- [ ] **Step 4: Run to verify they pass**

  ```bash
  uv run --project server python -m pytest server/tests/test_stickers.py -k "get_stickers" -v --rootdir=.
  ```

  Expected: PASS.

- [ ] **Step 5: Commit**

  ```bash
  git add server/routes/api.py server/tests/test_stickers.py
  git commit -m "feat: add GET /stickers public endpoint"
  ```

---

## Task 3: Admin upload endpoint — POST /admin/upload_sticker

**Files:**
- Modify: `server/routes/admin.py`
- Modify: `server/tests/test_stickers.py`

- [ ] **Step 1: Write the failing tests**

  Append to `server/tests/test_stickers.py`:

  ```python
  # ── POST /admin/upload_sticker ───────────────────────────────────────────


  def _upload(client, filename, data, content_type="image/gif"):
      """Helper: upload a sticker as admin."""
      from io import BytesIO
      login(client)
      token = csrf_token(client)
      return client.post(
          "/admin/upload_sticker",
          data={"file": (BytesIO(data), filename)},
          content_type="multipart/form-data",
          headers={"X-CSRF-Token": token},
      )


  def login(client):
      client.post("/login", data={"password": "test"}, follow_redirects=True)


  def csrf_token(client):
      login(client)
      with client.session_transaction() as sess:
          return sess["csrf_token"]


  def test_upload_sticker_unauthenticated(client):
      from io import BytesIO
      res = client.post(
          "/admin/upload_sticker",
          data={"file": (BytesIO(b"GIF89a"), "fire.gif")},
          content_type="multipart/form-data",
      )
      assert res.status_code == 401


  def test_upload_sticker_success(client, tmp_path, monkeypatch):
      import server.services.stickers as sticker_mod
      monkeypatch.setattr(sticker_mod, "_STICKERS_DIR", tmp_path)
      sticker_mod.sticker_service._cache.clear()

      # Use a real GIF header so magic recognizes it
      gif_bytes = (
          b"GIF89a\x01\x00\x01\x00\x00\xff\x00,"
          b"\x00\x00\x00\x00\x01\x00\x01\x00\x00\x02\x00;"
      )
      res = _upload(client, "fire.gif", gif_bytes)
      assert res.status_code == 200
      data = res.get_json()
      assert data["name"] == "fire"
      assert data["url"] == "/static/stickers/fire.gif"


  def test_upload_sticker_invalid_extension(client):
      res = _upload(client, "fire.bmp", b"\x00" * 10)
      assert res.status_code == 400


  def test_upload_sticker_too_large(client):
      big = b"GIF89a" + b"\x00" * (2 * 1024 * 1024 + 1)
      res = _upload(client, "big.gif", big)
      assert res.status_code == 400 or res.status_code == 413


  def test_upload_sticker_name_collision_with_existing_sticker(client, tmp_path, monkeypatch):
      import server.services.stickers as sticker_mod
      monkeypatch.setattr(sticker_mod, "_STICKERS_DIR", tmp_path)
      sticker_mod.sticker_service._cache.clear()
      (tmp_path / "fire.png").write_bytes(b"\x89PNG\r\n\x1a\n")
      sticker_mod.sticker_service._scan()

      gif_bytes = (
          b"GIF89a\x01\x00\x01\x00\x00\xff\x00,"
          b"\x00\x00\x00\x00\x01\x00\x01\x00\x00\x02\x00;"
      )
      res = _upload(client, "fire.gif", gif_bytes)
      assert res.status_code == 409
  ```

- [ ] **Step 2: Run to verify they fail**

  ```bash
  uv run --project server python -m pytest server/tests/test_stickers.py -k "upload_sticker" -v --rootdir=.
  ```

  Expected: FAIL — `404 Not Found`.

- [ ] **Step 3: Add upload_sticker to admin.py**

  Add module-level constants just before the `admin_bp` Blueprint definition in `server/routes/admin.py`:

  ```python
  import re as _re
  _STICKER_ALLOWED_MIME = {"image/gif", "image/png", "image/webp"}
  _STICKER_MAX_SIZE = 2 * 1024 * 1024  # 2 MB
  _STICKER_NAME_RE = _re.compile(r"^[a-zA-Z0-9_]{1,32}$")
  ```

  Then add the endpoint after `upload_font` (around line 111). Use **local imports** for services (matching the existing style in `admin.py` where `emoji_service` is always imported inside functions):

  ```python
  @admin_bp.route("/upload_sticker", methods=["POST"])
  @rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
  @require_csrf
  def upload_sticker():
      if not _ensure_logged_in():
          return _json_response({"error": "Unauthorized"}, 401)

      file = request.files.get("file")
      if not file or file.filename == "":
          return _json_response({"error": "No file provided"}, 400)

      name = file.filename.rsplit(".", 1)[0] if "." in file.filename else ""
      ext = file.filename.rsplit(".", 1)[1].lower() if "." in file.filename else ""

      if not _STICKER_NAME_RE.match(name):
          return _json_response({"error": "Invalid sticker name (alphanumeric + underscore, max 32)"}, 400)

      if ext not in {"gif", "png", "webp"}:
          return _json_response({"error": "File type not allowed (gif, png, webp only)"}, 400)

      file_bytes = file.read()
      if len(file_bytes) > _STICKER_MAX_SIZE:
          return _json_response({"error": "File too large (max 2MB)"}, 413)
      if not file_bytes:
          return _json_response({"error": "Empty file"}, 400)

      actual_mime = magic.from_buffer(file_bytes[:2048], mime=True)
      if actual_mime not in _STICKER_ALLOWED_MIME:
          return _json_response(
              {"error": f"Invalid file content type: {actual_mime}"}, 400
          )

      # Local imports — matching the existing admin.py pattern for emoji_service
      from ..services import stickers as sticker_mod
      from ..services.stickers import sticker_service
      from ..services.emoji import emoji_service

      # Name collision checks
      if sticker_service.resolve(f":{name}:") is not None:
          return _json_response({"error": f"Sticker '{name}' already exists"}, 409)
      if emoji_service.get_url(name) is not None:
          return _json_response({"error": f"Name '{name}' already used by an emoji"}, 409)

      # Count limit
      try:
          sticker_service.check_count_limit()
      except ValueError as e:
          return _json_response({"error": str(e)}, 400)

      dest = sticker_mod._STICKERS_DIR / f"{name}.{ext}"
      sticker_mod._STICKERS_DIR.mkdir(parents=True, exist_ok=True)
      try:
          dest.write_bytes(file_bytes)
      except OSError as e:
          current_app.logger.error("Failed to save sticker: %s", sanitize_log_string(str(e)))
          return _json_response({"error": "Failed to save sticker"}, 500)

      sticker_service._scan()
      current_app.logger.info("Sticker uploaded: %s", sanitize_log_string(f"{name}.{ext}"))
      return _json_response({"name": name, "url": f"/static/stickers/{name}.{ext}"})
  ```

- [ ] **Step 4: Run to verify they pass**

  ```bash
  uv run --project server python -m pytest server/tests/test_stickers.py -k "upload_sticker" -v --rootdir=.
  ```

  Expected: All PASS. (The `too_large` test may return 400 or 413 — either is acceptable.)

- [ ] **Step 5: Run full test suite**

  ```bash
  uv run --project server python -m pytest server/tests/ -v --rootdir=. -x -q
  ```

  Expected: All PASS.

- [ ] **Step 6: Commit**

  ```bash
  git add server/routes/admin.py server/tests/test_stickers.py
  git commit -m "feat: add POST /admin/upload_sticker endpoint"
  ```

---

## Task 4: Admin delete endpoint — DELETE /admin/stickers/<name>

**Files:**
- Modify: `server/routes/admin.py`
- Modify: `server/tests/test_stickers.py`

- [ ] **Step 1: Write the failing tests**

  Append to `server/tests/test_stickers.py`:

  ```python
  # ── DELETE /admin/stickers/<name> ────────────────────────────────────────


  def _delete_sticker(client, name):
      token = csrf_token(client)
      return client.delete(
          f"/admin/stickers/{name}",
          headers={"X-CSRF-Token": token},
      )


  def test_delete_sticker_success(client, tmp_path, monkeypatch):
      import server.services.stickers as sticker_mod
      monkeypatch.setattr(sticker_mod, "_STICKERS_DIR", tmp_path)
      sticker_mod.sticker_service._cache.clear()
      f = tmp_path / "wave.gif"
      f.write_bytes(b"GIF89a")
      sticker_mod.sticker_service._scan()

      res = _delete_sticker(client, "wave")
      assert res.status_code == 200
      assert res.get_json() == {"status": "OK"}
      assert not f.exists()


  def test_delete_sticker_not_found(client):
      res = _delete_sticker(client, "ghost")
      assert res.status_code == 404


  def test_delete_sticker_unauthenticated(client):
      res = client.delete("/admin/stickers/wave")
      assert res.status_code == 401


  def test_delete_sticker_invalid_name(client):
      res = _delete_sticker(client, "../etc/passwd")
      assert res.status_code == 400
  ```

- [ ] **Step 2: Run to verify they fail**

  ```bash
  uv run --project server python -m pytest server/tests/test_stickers.py -k "delete_sticker" -v --rootdir=.
  ```

  Expected: FAIL — `404 Not Found` (route doesn't exist).

- [ ] **Step 3: Add delete_sticker to admin.py**

  In `server/routes/admin.py`, add after the `upload_sticker` endpoint:

  ```python
  @admin_bp.route("/stickers/<name>", methods=["DELETE"])
  @rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
  @require_csrf
  def delete_sticker(name):
      if not _ensure_logged_in():
          return _json_response({"error": "Unauthorized"}, 401)

      if not _STICKER_NAME_RE.match(name):
          return _json_response({"error": "Invalid sticker name"}, 400)

      from ..services.stickers import sticker_service  # local import, matching admin.py style
      deleted = sticker_service.delete(name)
      if not deleted:
          return _json_response({"error": "Sticker not found"}, 404)

      current_app.logger.info("Sticker deleted: %s", sanitize_log_string(name))
      return _json_response({"status": "OK"})
  ```

- [ ] **Step 4: Run to verify they pass**

  ```bash
  uv run --project server python -m pytest server/tests/test_stickers.py -k "delete_sticker" -v --rootdir=.
  ```

  Expected: All PASS.

- [ ] **Step 5: Run full test suite**

  ```bash
  uv run --project server python -m pytest server/tests/ -v --rootdir=. -x -q
  ```

  Expected: All PASS.

- [ ] **Step 6: Commit**

  ```bash
  git add server/routes/admin.py server/tests/test_stickers.py
  git commit -m "feat: add DELETE /admin/stickers/<name> endpoint"
  ```

---

## Task 5: Fire endpoint sticker resolution

**Files:**
- Modify: `server/routes/api.py`
- Modify: `server/tests/test_resolve_style.py`

The current `_resolve_danmu_style()` function (api.py lines 71–182) assigns `text = data.get("text", "")` at line 171, which is used for emoji parsing and sound matching. The sticker block inserts **before** line 71 and captures `original_text` to preserve the pre-resolution value.

- [ ] **Step 1: Write the failing tests**

  In `server/tests/test_resolve_style.py`, add a new helper and tests at the bottom:

  ```python
  # ── Sticker resolution ───────────────────────────────────────────────────


  def _resolve_with_sticker(data, sticker_filename=None):
      """Call _resolve_danmu_style with sticker service and request mocked.

      Uses patch("server.routes.api.request") to avoid creating an app context,
      matching the existing _resolve() helper pattern in this file.
      """
      from unittest.mock import patch, MagicMock

      mock_request = MagicMock()
      mock_request.host_url = "http://127.0.0.1:5000/"

      mock_resolve = MagicMock(return_value=sticker_filename)

      with (
          patch("server.routes.api.request", mock_request),
          patch("server.routes.api.get_options", return_value={
              "Color": [True, 0, 0, "#FFFFFF"],
              "Opacity": [True, 0, 100, 70],
              "FontSize": [True, 20, 100, 50],
              "Speed": [True, 1, 10, 4],
              "FontFamily": [False, "", "", "NotoSansTC"],
              "Effects": [True, "", "", ""],
          }),
          patch("server.routes.api.build_font_payload",
                return_value={"name": "NotoSansTC", "url": None, "type": "default"}),
          patch("server.routes.api.sticker_service") as mock_sticker_svc,
          patch("server.routes.api.sound_service.match", return_value=None),
          patch("server.routes.api.render_effects", return_value=None),
      ):
          mock_sticker_svc.resolve = mock_resolve
          from server.routes.api import _resolve_danmu_style
          result = _resolve_danmu_style(data)
      return result, mock_resolve


  def test_sticker_converts_to_image_danmu():
      result, _ = _resolve_with_sticker({"text": ":fire:"}, sticker_filename="fire.gif")
      assert result["isImage"] is True
      assert result["text"] == "http://127.0.0.1:5000/static/stickers/fire.gif"


  def test_sticker_no_sound_key_in_result():
      result, _ = _resolve_with_sticker({"text": ":fire:"}, sticker_filename="fire.gif")
      assert "sound" not in result


  def test_sticker_no_skip_sound_key_leaks():
      result, _ = _resolve_with_sticker({"text": ":fire:"}, sticker_filename="fire.gif")
      assert "_skip_sound" not in result


  def test_no_sticker_match_leaves_text_unchanged():
      result, _ = _resolve_with_sticker({"text": "hello"}, sticker_filename=None)
      assert result.get("isImage") is not True
      assert result["text"] == "hello"


  def test_already_image_danmu_skips_sticker_resolution():
      """isImage=True messages must not call sticker_service.resolve at all."""
      result, mock_resolve = _resolve_with_sticker(
          {"text": "http://example.com/img.png", "isImage": True},
          sticker_filename="fire.gif",
      )
      mock_resolve.assert_not_called()
      assert result["text"] == "http://example.com/img.png"
  ```

- [ ] **Step 2: Run to verify they fail**

  ```bash
  uv run --project server python -m pytest server/tests/test_resolve_style.py -k "sticker" -v --rootdir=.
  ```

  Expected: FAIL.

- [ ] **Step 3: Modify _resolve_danmu_style() in api.py**

  At the top of `api.py`, add the sticker import alongside the emoji import:

  ```python
  from ..services.stickers import sticker_service
  ```

  Then modify `_resolve_danmu_style()`. Add the sticker block at the very start of the function body, before the `options = get_options()` line:

  ```python
  def _resolve_danmu_style(data):
      # --- Sticker resolution (runs first, before all other processing) ---
      original_text = data.get("text", "")
      is_sticker = False
      if not data.get("isImage"):
          sticker_filename = sticker_service.resolve(original_text)
          if sticker_filename:
              base = request.host_url.rstrip("/")
              data["text"] = f"{base}/static/stickers/{sticker_filename}"
              data["isImage"] = True
              is_sticker = True

      options = get_options()
      # ... rest of existing function unchanged until sound matching ...
  ```

  Then find the sound matching block at the end of the function (currently lines 177–180):

  ```python
  # Sound matching
  sound_match = sound_service.match(text, effects_input if effects_input else None)
  if sound_match:
      data["sound"] = sound_match
  ```

  Replace with:

  ```python
  # Sound matching (skipped for sticker danmu — text is now a URL)
  if not is_sticker:
      sound_match = sound_service.match(text, effects_input if effects_input else None)
      if sound_match:
          data["sound"] = sound_match
  ```

  Note: The existing `text = data.get("text", "")` at line 171 is assigned AFTER the sticker block sets `data["text"]` to a URL. So `text` in sound matching would be the sticker URL — that's why we skip sound matching for stickers. The `original_text` variable captured at the top preserves the original input but isn't needed for the emoji/sound paths since we already use `is_sticker` to skip.

  Also add `from flask import request` import at the top of `api.py` if not already present (it's already imported via `from flask import Blueprint, current_app, make_response, request, ...`).

- [ ] **Step 4: Run to verify tests pass**

  ```bash
  uv run --project server python -m pytest server/tests/test_resolve_style.py -v --rootdir=.
  ```

  Expected: All PASS (including existing tests).

- [ ] **Step 5: Run full test suite**

  ```bash
  uv run --project server python -m pytest server/tests/ -v --rootdir=. -x -q
  ```

  Expected: All PASS.

- [ ] **Step 6: Commit**

  ```bash
  git add server/routes/api.py server/tests/test_resolve_style.py
  git commit -m "feat: add sticker resolution in _resolve_danmu_style"
  ```

---

## Task 6: Overlay changes (track-manager.js + child.html CSP)

**Files:**
- Modify: `danmu-desktop/renderer-modules/track-manager.js`
- Modify: `danmu-desktop/child.html`

No automated tests for Electron renderer changes — verify manually after webpack build.

- [ ] **Step 1: Update track-manager.js — add webp and size constraints**

  In `danmu-desktop/renderer-modules/track-manager.js`, find line 154:

  ```javascript
  const imgs = /^https?:\/\/([^\s/]+\/)*[^\s/]+\.(gif|png|jpeg|jpg)$/i;
  ```

  Change to:

  ```javascript
  const imgs = /^https?:\/\/([^\s/]+\/)*[^\s/]+\.(gif|png|jpeg|jpg|webp)$/i;
  ```

  Then find the `isImage` rendering block (around line 162–167):

  ```javascript
  if (imgs.test(string) && protocolCheck.test(string)) {
    danmu = document.createElement("img");
    danmu.className = "danmu";
    danmu.setAttribute("src", string);
    danmu.width = size * 2;
    danmu.style.position = "relative";
  ```

  Add size constraints after `danmu.style.position`:

  ```javascript
  if (imgs.test(string) && protocolCheck.test(string)) {
    danmu = document.createElement("img");
    danmu.className = "danmu";
    danmu.setAttribute("src", string);
    danmu.width = size * 2;
    danmu.style.position = "relative";
    danmu.style.maxWidth = "200px";
    danmu.style.maxHeight = "120px";
    danmu.style.objectFit = "contain";
  ```

- [ ] **Step 2: Update child.html CSP**

  In `danmu-desktop/child.html`, find the CSP meta tag. The `img-src` directive currently is:

  ```
  img-src 'self' https: data:;
  ```

  Change to:

  ```
  img-src 'self' https: http://127.0.0.1:* http://localhost:* data:;
  ```

- [ ] **Step 3: Build webpack and verify**

  ```bash
  cd danmu-desktop && npx webpack && cd ..
  ```

  Expected: Build succeeds with no errors.

- [ ] **Step 4: Commit**

  ```bash
  git add danmu-desktop/renderer-modules/track-manager.js danmu-desktop/child.html
  git commit -m "feat: add webp support and image size constraints to overlay; extend CSP for local stickers"
  ```

---

## Task 7: Admin UI — Stickers management section

**Files:**
- Modify: `server/templates/admin.html`

- [ ] **Step 1: Add the Stickers section to admin.html**

  Find an existing management section in `server/templates/admin.html` (e.g., the Sounds section) and add a parallel Stickers section after it. The section needs:

  - A `<details>` accordion (matching the rest of the admin UI)
  - Thumbnail grid for displaying uploaded stickers
  - File input for upload (GIF/PNG/WebP, 2MB max)
  - Delete button per sticker
  - Trigger syntax hint

  Locate the Sounds section in `admin.html` and insert after its closing `</details>`:

  ```html
  <!-- Stickers Management -->
  <details id="section-stickers">
    <summary>🖼 Stickers</summary>
    <div class="section-content">
      <p class="hint">
        Viewers trigger stickers by sending <code>:sticker_name:</code> as the full message.
        Supported formats: GIF, PNG, WebP. Max 2MB per file.
      </p>

      <div id="sticker-grid" class="sticker-grid">
        <!-- populated by JS -->
      </div>

      {% if session.logged_in %}
      <div class="upload-row">
        <input type="file" id="sticker-file-input" accept=".gif,.png,.webp" />
        <button id="sticker-upload-btn" class="btn btn-primary">Upload Sticker</button>
      </div>
      {% endif %}
    </div>
  </details>
  ```

  Then add the JavaScript for this section. Find the `<script>` block where other sections' JS lives (or add a new `<script>` tag before `</body>`):

  ```html
  <script>
  // ── Stickers ────────────────────────────────────────────────────────────
  (function () {
    const grid = document.getElementById("sticker-grid");
    const uploadBtn = document.getElementById("sticker-upload-btn");
    const fileInput = document.getElementById("sticker-file-input");
    if (!grid) return;

    function loadStickers() {
      fetch("/stickers")
        .then((r) => r.json())
        .then((data) => {
          grid.innerHTML = "";
          if (!data.stickers || data.stickers.length === 0) {
            grid.innerHTML = "<p class='empty-hint'>No stickers uploaded yet.</p>";
            return;
          }
          data.stickers.forEach((s) => {
            const item = document.createElement("div");
            item.className = "sticker-item";
            item.innerHTML = `
              <img src="${s.url}" alt="${s.name}" title="${s.name}" />
              <span class="sticker-name">${s.name}</span>
              <span class="sticker-syntax">:${s.name}:</span>
              <button class="btn btn-danger btn-sm sticker-delete" data-name="${s.name}">✕</button>
            `;
            grid.appendChild(item);
          });
        });
    }

    loadStickers();

    grid.addEventListener("click", (e) => {
      const btn = e.target.closest(".sticker-delete");
      if (!btn) return;
      const name = btn.dataset.name;
      if (!confirm(`Delete sticker :${name}:?`)) return;
      fetch(`/admin/stickers/${name}`, {
        method: "DELETE",
        headers: { "X-CSRF-Token": window._csrfToken || "" },
      }).then((r) => {
        if (r.ok) loadStickers();
        else r.json().then((d) => alert(d.error || "Delete failed"));
      });
    });

    if (uploadBtn && fileInput) {
      uploadBtn.addEventListener("click", () => {
        const file = fileInput.files[0];
        if (!file) return alert("Please select a file first.");
        const fd = new FormData();
        fd.append("file", file);
        fetch("/admin/upload_sticker", {
          method: "POST",
          headers: { "X-CSRF-Token": window._csrfToken || "" },
          body: fd,
        })
          .then((r) => r.json())
          .then((d) => {
            if (d.error) return alert(d.error);
            fileInput.value = "";
            loadStickers();
          });
      });
    }
  })();
  </script>
  ```

  Note: `window._csrfToken` must be set somewhere in the existing admin page. Check how other sections (e.g., sounds) pass the CSRF token — it's likely already set as `window._csrfToken = "{{ session.csrf_token }}"` or passed via a data attribute. Match that pattern.

- [ ] **Step 2: Run the full test suite**

  ```bash
  uv run --project server python -m pytest server/tests/ -v --rootdir=. -x -q
  ```

  Expected: All PASS.

- [ ] **Step 3: Commit**

  ```bash
  git add server/templates/admin.html
  git commit -m "feat: add Stickers management section to admin UI"
  ```

---

## Task 8: Final verification

- [ ] **Step 1: Run complete test suite**

  ```bash
  uv run --project server python -m pytest server/tests/ -v --rootdir=.
  ```

  Expected: All tests PASS (347+ including new sticker tests).

- [ ] **Step 2: Build Electron bundle**

  ```bash
  cd danmu-desktop && npx webpack && cd ..
  ```

  Expected: Build succeeds.

- [ ] **Step 3: Manual smoke test**

  1. Start the server: `cd server && uv run python -m server`
  2. Open admin panel, log in
  3. Navigate to Stickers section — verify it shows "No stickers uploaded yet."
  4. Upload a GIF sticker — verify thumbnail appears
  5. Open the web UI, type `:sticker_name:` — verify it fires as image danmu in overlay
  6. Type `hello :sticker_name:` — verify it fires as regular text (not sticker)
  7. Delete the sticker from admin — verify it disappears from the grid

- [ ] **Step 4: Final commit**

  ```bash
  git add -A
  git commit -m "feat: complete sticker danmu feature — GIF support + local sticker library"
  ```
