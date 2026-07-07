"""Asset pack export/import for uploaded emoji, sticker, and sound files.

This is intentionally separate from services.backup: full backup stays small
and operator-state focused, while asset packs can contain larger uploaded media.
"""

from __future__ import annotations

import hashlib
import io
import json
import logging
import re
import tarfile
import time
from pathlib import Path
from typing import Any, Dict, List, Optional, Union

logger = logging.getLogger(__name__)

_SERVER_ROOT = Path(__file__).resolve().parent.parent
_EMOJIS_DIR = _SERVER_ROOT / "static" / "emojis"
_STICKERS_DIR = _SERVER_ROOT / "static" / "stickers"
_SOUNDS_DIR = _SERVER_ROOT / "static" / "sounds"
_STICKER_RUNTIME_DIR = _SERVER_ROOT / "runtime" / "stickers"

_BACKUP_VERSION = "assets-v1"
_MAX_IMPORT_SIZE = 64 * 1024 * 1024
_MAX_FILE_COUNT = 2000
_SAFE_NAME_RE = re.compile(r"^[a-zA-Z0-9_-]{1,64}$")

_INCLUDE_DIRS: List[tuple] = [
    ("emojis", _EMOJIS_DIR, "emojis", "*"),
    ("stickers", _STICKERS_DIR, "stickers", "*"),
    ("sounds", _SOUNDS_DIR, "sounds", "*"),
    ("sticker_runtime", _STICKER_RUNTIME_DIR, "runtime/stickers", "*.json"),
]

_IMAGE_EXTENSIONS = {"png", "gif", "webp"}
_SOUND_EXTENSIONS = {"mp3", "ogg", "wav"}
_SOUND_METADATA = {"sound_rules.json", "sound_volumes.json"}
_STICKER_METADATA = {"packs.json"}


def _sha256(buf: bytes) -> str:
    return hashlib.sha256(buf).hexdigest()


def _build_manifest(included: List[Dict[str, Any]]) -> Dict[str, Any]:
    return {
        "version": _BACKUP_VERSION,
        "generated_at": int(time.time()),
        "tool": "danmu-fire asset backup",
        "files": included,
        "file_count": len(included),
        "total_bytes": sum(f.get("size", 0) for f in included),
    }


def _extension(path: str) -> str:
    return Path(path).suffix.lstrip(".").lower()


def _stem_ok(path: str) -> bool:
    return bool(_SAFE_NAME_RE.match(Path(path).stem))


def _asset_allowed(label: str, rel_path: str) -> bool:
    name = Path(rel_path).name
    ext = _extension(rel_path)
    if name.endswith(".tmp") or name.startswith("."):
        return False
    if label in {"emojis", "stickers"}:
        return ext in _IMAGE_EXTENSIONS and _stem_ok(rel_path)
    if label == "sounds":
        if name in _SOUND_METADATA:
            return True
        return ext in _SOUND_EXTENSIONS and _stem_ok(rel_path)
    if label == "sticker_runtime":
        return name in _STICKER_METADATA and ext == "json"
    return False


def _match_include(archive_path: str) -> Optional[tuple]:
    for label, src_dir, prefix, glob in _INCLUDE_DIRS:
        marker = prefix + "/"
        if archive_path.startswith(marker):
            return label, src_dir, prefix, archive_path[len(marker) :]
    return None


def _manifest_from_dirs() -> List[Dict[str, Any]]:
    included: List[Dict[str, Any]] = []
    for label, src_dir, prefix, glob in _INCLUDE_DIRS:
        if not src_dir.exists():
            continue
        for f in sorted(src_dir.rglob(glob)):
            if not f.is_file():
                continue
            rel = f.relative_to(src_dir).as_posix()
            if not _asset_allowed(label, rel):
                continue
            try:
                data = f.read_bytes()
            except OSError as exc:
                logger.warning("asset backup skip %s: %s", f, exc)
                continue
            included.append(
                {
                    "label": label,
                    "path": f"{prefix}/{rel}",
                    "size": len(data),
                    "sha256": _sha256(data),
                }
            )
    return included


def manifest() -> Dict[str, Any]:
    return _build_manifest(_manifest_from_dirs())


def pack(target_path: Optional[Union[str, Path]] = None) -> bytes:
    """Produce a .tar.gz snapshot of uploaded static assets."""
    buf = io.BytesIO()
    included: List[Dict[str, Any]] = []

    with tarfile.open(fileobj=buf, mode="w:gz") as tar:
        for label, src_dir, prefix, glob in _INCLUDE_DIRS:
            if not src_dir.exists():
                continue
            for f in sorted(src_dir.rglob(glob)):
                if not f.is_file():
                    continue
                rel = f.relative_to(src_dir).as_posix()
                if not _asset_allowed(label, rel):
                    continue
                try:
                    data = f.read_bytes()
                    mtime = int(f.stat().st_mtime)
                except OSError as exc:
                    logger.warning("asset backup pack skip %s: %s", f, exc)
                    continue
                arc_name = f"{prefix}/{rel}"
                info = tarfile.TarInfo(name=arc_name)
                info.size = len(data)
                info.mtime = mtime
                info.mode = 0o644
                tar.addfile(info, io.BytesIO(data))
                included.append(
                    {
                        "label": label,
                        "path": arc_name,
                        "size": len(data),
                        "sha256": _sha256(data),
                    }
                )

        manifest_bytes = json.dumps(_build_manifest(included), ensure_ascii=False, indent=2).encode(
            "utf-8"
        )
        info = tarfile.TarInfo(name="manifest.json")
        info.size = len(manifest_bytes)
        info.mtime = int(time.time())
        info.mode = 0o644
        tar.addfile(info, io.BytesIO(manifest_bytes))

    raw = buf.getvalue()
    if target_path is not None:
        target = Path(target_path)
        target.parent.mkdir(parents=True, exist_ok=True)
        tmp = target.with_suffix(target.suffix + ".tmp")
        tmp.write_bytes(raw)
        tmp.replace(target)
        return b""
    return raw


def unpack(tarball_bytes: bytes, dry_run: bool = True) -> Dict[str, Any]:
    """Inspect and optionally apply an uploaded asset pack."""
    out: Dict[str, Any] = {
        "ok": False,
        "manifest": None,
        "members": [],
        "applied": 0,
        "skipped": [],
        "errors": [],
    }

    if len(tarball_bytes) > _MAX_IMPORT_SIZE:
        out["errors"].append(f"asset pack exceeds {_MAX_IMPORT_SIZE // (1024*1024)} MB")
        return out

    try:
        tar = tarfile.open(fileobj=io.BytesIO(tarball_bytes), mode="r:gz")
    except tarfile.TarError as exc:
        out["errors"].append(f"not a valid .tar.gz: {exc}")
        return out

    try:
        members = tar.getmembers()
    except tarfile.TarError as exc:
        out["errors"].append(f"failed to read members: {exc}")
        tar.close()
        return out

    if len(members) > _MAX_FILE_COUNT:
        out["errors"].append(f"asset pack contains {len(members)} files (> {_MAX_FILE_COUNT})")
        tar.close()
        return out

    manifest_doc = None
    for member in members:
        if member.name == "manifest.json" and member.isfile():
            try:
                stream = tar.extractfile(member)
                if stream is not None:
                    manifest_doc = json.loads(stream.read().decode("utf-8"))
                break
            except (json.JSONDecodeError, UnicodeDecodeError) as exc:
                out["errors"].append(f"manifest.json malformed: {exc}")
                tar.close()
                return out
    out["manifest"] = manifest_doc

    safe_writes: List[tuple] = []
    for member in members:
        if member.name == "manifest.json":
            continue
        if member.issym() or member.islnk():
            out["skipped"].append({"path": member.name, "reason": "symlink rejected"})
            continue
        if not member.isfile():
            continue
        if member.name.startswith("/") or ".." in Path(member.name).parts:
            out["skipped"].append({"path": member.name, "reason": "path traversal rejected"})
            continue

        match = _match_include(member.name)
        if match is None:
            out["skipped"].append({"path": member.name, "reason": "unknown prefix"})
            continue
        label, src_dir, prefix, rel = match
        if not _asset_allowed(label, rel):
            out["skipped"].append({"path": member.name, "reason": "extension rejected"})
            continue

        try:
            stream = tar.extractfile(member)
            if stream is None:
                out["skipped"].append({"path": member.name, "reason": "extractfile returned None"})
                continue
            data = stream.read()
        except (tarfile.TarError, OSError) as exc:
            out["skipped"].append({"path": member.name, "reason": f"read failed: {exc}"})
            continue

        target = src_dir / rel
        try:
            target_resolved = target.resolve()
            src_resolved = src_dir.resolve()
            if not str(target_resolved).startswith(str(src_resolved)):
                out["skipped"].append(
                    {"path": member.name, "reason": "resolves outside source dir"}
                )
                continue
        except OSError as exc:
            out["skipped"].append({"path": member.name, "reason": f"resolve failed: {exc}"})
            continue

        safe_writes.append((target, data))
        out["members"].append(
            {
                "path": member.name,
                "size": member.size,
                "label": label,
            }
        )

    tar.close()

    if dry_run:
        out["ok"] = len(out["errors"]) == 0
        return out

    for target, data in safe_writes:
        try:
            target.parent.mkdir(parents=True, exist_ok=True)
            tmp = target.with_suffix(target.suffix + ".tmp")
            tmp.write_bytes(data)
            tmp.replace(target)
            out["applied"] += 1
        except OSError as exc:
            out["errors"].append(f"write {target}: {exc}")

    out["ok"] = len(out["errors"]) == 0
    return out


def refresh_asset_services() -> None:
    """Refresh in-memory caches after assets are imported through the route."""
    try:
        from server.services.emoji import emoji_service

        emoji_service._scan()
    except Exception as exc:  # pragma: no cover - defensive cache refresh
        logger.warning("emoji refresh after asset import failed: %s", exc)
    try:
        from server.services.stickers import sticker_service

        sticker_service._scan()
    except Exception as exc:  # pragma: no cover - defensive cache refresh
        logger.warning("sticker refresh after asset import failed: %s", exc)
    try:
        from server.services.sound import sound_service

        sound_service._maybe_scan(force=True)
        sound_service._load_rules()
        sound_service._load_volumes()
    except Exception as exc:  # pragma: no cover - defensive cache refresh
        logger.warning("sound refresh after asset import failed: %s", exc)
