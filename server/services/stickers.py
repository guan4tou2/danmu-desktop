"""
Sticker service for danmu.

Admin uploads GIF/PNG/WebP stickers; viewers trigger with :name: syntax.
Resolution returns the filename only; callers construct the absolute URL.

Hot-scan: rescans on demand (no periodic background scan needed — stickers
change infrequently compared to emojis/effects).

Multi-pack model (added 2026-04-25, backlog P1-4):
    Stickers live as files in server/static/stickers/<name>.<ext> (unchanged).
    A separate metadata layer in server/runtime/stickers/packs.json maps
    sticker names to pack ids and tracks per-pack/per-sticker weights for
    random-sticker draws. Migration is idempotent: on first load, if no
    packs.json exists but stickers do, all stickers are assigned to a
    synthetic "default" pack.
"""

import json
import logging
import re
import threading
import uuid
from pathlib import Path
from typing import Any, Dict, List, Optional

logger = logging.getLogger(__name__)

_STICKERS_DIR = Path(__file__).parent.parent / "static" / "stickers"
_RUNTIME_DIR = Path(__file__).parent.parent / "runtime" / "stickers"
_PACKS_FILE = _RUNTIME_DIR / "packs.json"
_ALLOWED_EXTENSIONS = {"gif", "png", "webp"}
_MAX_UPLOAD_SIZE = 2 * 1024 * 1024  # 2 MB
_NAME_RE = re.compile(r"^[a-zA-Z0-9_]{1,32}$")
_STICKER_SYNTAX_RE = re.compile(r"^:([a-zA-Z0-9_]{1,32}):$")
_URL_PREFIX = "/static/stickers"
_MAX_COUNT = 50  # overridden by Config.STICKER_MAX_COUNT at app startup
_PACK_NAME_MAX = 64
_DEFAULT_PACK_ID = "default"


class StickerService:
    """Sticker file management and resolution (not a singleton — use module-level instance)."""

    def __init__(self) -> None:
        self._cache: Dict[str, str] = {}  # name -> filename
        self._lock = threading.Lock()
        # Pack metadata
        self._packs: Dict[str, Dict[str, Any]] = {}  # pack_id -> pack dict
        self._sticker_meta: Dict[str, Dict[str, Any]] = {}  # name -> {pack_id, weight}
        self._loaded = False

    # ── Pack persistence ─────────────────────────────────────────────────

    def _load_packs(self) -> None:
        """Load pack metadata from disk, creating a default pack if missing."""
        _RUNTIME_DIR.mkdir(parents=True, exist_ok=True)
        if _PACKS_FILE.exists():
            try:
                raw = json.loads(_PACKS_FILE.read_text(encoding="utf-8"))
                packs = raw.get("packs", []) if isinstance(raw, dict) else []
                stickers = raw.get("stickers", []) if isinstance(raw, dict) else []
                self._packs = {p["id"]: p for p in packs if isinstance(p, dict) and p.get("id")}
                self._sticker_meta = {
                    s["name"]: {
                        "pack_id": s.get("pack_id", _DEFAULT_PACK_ID),
                        "weight": float(s.get("weight", 1.0)),
                    }
                    for s in stickers
                    if isinstance(s, dict) and s.get("name")
                }
            except Exception as e:
                logger.error("[Sticker] Failed to load packs.json: %s", e)
                self._packs = {}
                self._sticker_meta = {}

        # Migration: ensure default pack exists.
        if _DEFAULT_PACK_ID not in self._packs:
            self._packs[_DEFAULT_PACK_ID] = {
                "id": _DEFAULT_PACK_ID,
                "name": "Default",
                "enabled": True,
                "weight": 1.0,
                "order": 0,
            }

        # Migration: orphan stickers (in cache but no meta) → default pack.
        for name in self._cache:
            if name not in self._sticker_meta:
                self._sticker_meta[name] = {"pack_id": _DEFAULT_PACK_ID, "weight": 1.0}

        # Save initial state if file was missing.
        if not _PACKS_FILE.exists():
            self._save_packs()
        self._loaded = True

    def _save_packs(self) -> None:
        """Persist pack metadata atomically."""
        _RUNTIME_DIR.mkdir(parents=True, exist_ok=True)
        try:
            data = {
                "packs": list(self._packs.values()),
                "stickers": [
                    {"name": name, **meta} for name, meta in self._sticker_meta.items()
                ],
            }
            tmp = _PACKS_FILE.with_suffix(".tmp")
            tmp.write_text(json.dumps(data, indent=2, ensure_ascii=False), encoding="utf-8")
            tmp.replace(_PACKS_FILE)
        except OSError as e:
            logger.error("[Sticker] Failed to save packs.json: %s", e)

    def _ensure_loaded(self) -> None:
        """Make sure packs are loaded; safe to call repeatedly."""
        if not self._loaded:
            with self._lock:
                if not self._loaded:
                    self._load_packs()

    # ── File scanning (unchanged sticker lookup behaviour) ───────────────

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
            # If packs are loaded, ensure newly scanned stickers have meta.
            if self._loaded:
                changed = False
                for n in new_cache:
                    if n not in self._sticker_meta:
                        self._sticker_meta[n] = {
                            "pack_id": _DEFAULT_PACK_ID,
                            "weight": 1.0,
                        }
                        changed = True
                if changed:
                    self._save_packs()

    def resolve(self, text: str) -> Optional[str]:
        """Return the sticker filename if text is exactly ':name:', else None."""
        text = text.strip()
        m = _STICKER_SYNTAX_RE.match(text)
        if not m:
            return None
        name = m.group(1)
        with self._lock:
            return self._cache.get(name)

    def list_stickers(self) -> List[Dict[str, Any]]:
        """Return [{name, url, filename, pack_id, weight}] sorted by name."""
        self._ensure_loaded()
        with self._lock:
            cache = dict(self._cache)
            meta = {n: dict(m) for n, m in self._sticker_meta.items()}
        out = []
        for name, filename in cache.items():
            m = meta.get(name, {"pack_id": _DEFAULT_PACK_ID, "weight": 1.0})
            out.append(
                {
                    "name": name,
                    "url": f"{_URL_PREFIX}/{filename}",
                    "filename": filename,
                    "pack_id": m.get("pack_id", _DEFAULT_PACK_ID),
                    "weight": m.get("weight", 1.0),
                }
            )
        return sorted(out, key=lambda x: x["name"])

    def delete(self, name: str) -> bool:
        """Delete all files for the given sticker name. Returns True if any file was deleted."""
        if not _NAME_RE.match(name):
            return False
        _STICKERS_DIR.mkdir(parents=True, exist_ok=True)
        deleted = False
        for ext in _ALLOWED_EXTENSIONS:
            candidate = _STICKERS_DIR / f"{name}.{ext}"
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
            with self._lock:
                if self._sticker_meta.pop(name, None) is not None:
                    self._save_packs()
        return deleted

    def check_count_limit(self) -> None:
        """Raise ValueError if the sticker limit has been reached."""
        with self._lock:
            count = len(self._cache)
        if count >= _MAX_COUNT:
            raise ValueError(f"sticker limit reached ({count}/{_MAX_COUNT})")

    # ── Pack CRUD ────────────────────────────────────────────────────────

    def list_packs(self) -> List[Dict[str, Any]]:
        """Return packs sorted by order ascending, then name."""
        self._ensure_loaded()
        with self._lock:
            packs = [dict(p) for p in self._packs.values()]
        return sorted(packs, key=lambda p: (p.get("order", 0), p.get("name", "")))

    def create_pack(self, name: str) -> Dict[str, Any]:
        """Create a new pack with the given name. Returns the pack dict."""
        clean = (name or "").strip()
        if not clean:
            raise ValueError("Pack name required")
        if len(clean) > _PACK_NAME_MAX:
            raise ValueError(f"Pack name too long (max {_PACK_NAME_MAX})")
        self._ensure_loaded()
        pack_id = uuid.uuid4().hex[:12]
        with self._lock:
            order = max((p.get("order", 0) for p in self._packs.values()), default=-1) + 1
            pack = {
                "id": pack_id,
                "name": clean,
                "enabled": True,
                "weight": 1.0,
                "order": order,
            }
            self._packs[pack_id] = pack
            self._save_packs()
            return dict(pack)

    def rename_pack(self, pack_id: str, name: str) -> bool:
        clean = (name or "").strip()
        if not clean:
            raise ValueError("Pack name required")
        if len(clean) > _PACK_NAME_MAX:
            raise ValueError(f"Pack name too long (max {_PACK_NAME_MAX})")
        self._ensure_loaded()
        with self._lock:
            pack = self._packs.get(pack_id)
            if not pack:
                return False
            pack["name"] = clean
            self._save_packs()
            return True

    def toggle_pack(self, pack_id: str) -> Optional[Dict[str, Any]]:
        """Flip enabled flag. Returns updated pack or None if not found."""
        self._ensure_loaded()
        with self._lock:
            pack = self._packs.get(pack_id)
            if not pack:
                return None
            pack["enabled"] = not bool(pack.get("enabled", True))
            self._save_packs()
            return dict(pack)

    def reorder_pack(self, pack_id: str, order: int) -> bool:
        """Set a pack's order. Other packs keep their existing order."""
        self._ensure_loaded()
        with self._lock:
            pack = self._packs.get(pack_id)
            if not pack:
                return False
            try:
                pack["order"] = int(order)
            except (TypeError, ValueError):
                return False
            self._save_packs()
            return True

    def delete_pack(self, pack_id: str) -> bool:
        """Delete pack and all stickers belonging to it. Refuses to delete default."""
        if pack_id == _DEFAULT_PACK_ID:
            raise ValueError("Cannot delete the default pack")
        self._ensure_loaded()
        with self._lock:
            if pack_id not in self._packs:
                return False
            sticker_names = [
                n for n, m in self._sticker_meta.items() if m.get("pack_id") == pack_id
            ]
            del self._packs[pack_id]
            for name in sticker_names:
                self._sticker_meta.pop(name, None)
            self._save_packs()

        # Delete the underlying files outside the lock.
        for name in sticker_names:
            self.delete(name)
        return True

    def assign_sticker(
        self, name: str, pack_id: str, weight: Optional[float] = None
    ) -> bool:
        """Assign a sticker to a pack with optional weight override."""
        self._ensure_loaded()
        with self._lock:
            if pack_id not in self._packs:
                return False
            if name not in self._cache:
                return False
            meta = self._sticker_meta.get(
                name, {"pack_id": _DEFAULT_PACK_ID, "weight": 1.0}
            )
            meta["pack_id"] = pack_id
            if weight is not None:
                try:
                    meta["weight"] = max(0.0, min(1.0, float(weight)))
                except (TypeError, ValueError):
                    pass
            self._sticker_meta[name] = meta
            self._save_packs()
            return True

    # ── Test helpers ─────────────────────────────────────────────────────

    def _reset_for_tests(self) -> None:
        """Reset internal state. Tests redirect _RUNTIME_DIR/_PACKS_FILE first."""
        with self._lock:
            self._cache = {}
            self._packs = {}
            self._sticker_meta = {}
            self._loaded = False


sticker_service = StickerService()
