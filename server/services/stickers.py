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
