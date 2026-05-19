"""Backup pack / unpack — full-state tarball export and dry-run import.

Bundles every piece of operator-managed runtime state into a single
``.tar.gz`` file so operators can move config across machines or pin
a snapshot before a risky change:

    danmu-backup-<timestamp>.tar.gz
    ├── manifest.json           # version, generated_at, files included
    ├── runtime/
    │   ├── settings.json       # overlay defaults
    │   ├── webhooks.json       # webhook endpoints (secrets included)
    │   ├── filter_rules.json   # moderation filter rules
    │   ├── audience.json       # audience overlay (flags/kicks)
    │   ├── (etc — every *.json under runtime/)
    ├── effects/                # *.dme files (built-in + user-uploaded)
    ├── plugins/                # *.py / *.js plugins
    └── user_plugins/           # user-uploaded plugins (kept separate)

Two surfaces:

    pack(target_path | None) → bytes (or writes to path)
        Produces the tarball. Returns the binary blob when no path given
        (the route uses this to stream a download response).

    unpack(tarball_bytes, dry_run=True) → manifest dict
        Reads the tarball, returns a list of files it would write. With
        ``dry_run=False`` it actually applies the contents (atomic per-file
        replace, no whole-tree rollback — caveat documented in the route).
"""

from __future__ import annotations

import hashlib
import io
import json
import logging
import tarfile
import time
from pathlib import Path
from typing import Any, Dict, List, Optional, Union

from server.config import Config

logger = logging.getLogger(__name__)

# Single source for "what's the project root"; everything else hangs off it.
_SERVER_ROOT = Path(__file__).resolve().parent.parent

_RUNTIME_DIR = _SERVER_ROOT / "runtime"
_EFFECTS_DIR = _SERVER_ROOT / "effects"
_PLUGINS_DIR = Path(getattr(Config, "PLUGINS_DIR", _SERVER_ROOT / "plugins"))
_USER_PLUGINS_DIR = _SERVER_ROOT / "user_plugins"

_BACKUP_VERSION = "1"
_MAX_IMPORT_SIZE = 16 * 1024 * 1024  # 16 MB — sanity cap on uploaded backups
_MAX_FILE_COUNT = 2000               # refuse pathologically large tarballs

# Subset of state directories we pack/unpack. Order matters only for
# manifest readability — extraction iterates the tarball's own member list.
_INCLUDE_DIRS: List[tuple] = [
    # (label, source_dir, archive_prefix, glob_pattern)
    ("runtime",      _RUNTIME_DIR,      "runtime",      "*.json"),
    ("effects",      _EFFECTS_DIR,      "effects",      "*.dme"),
    ("plugins",      _PLUGINS_DIR,      "plugins",      "*"),
    ("user_plugins", _USER_PLUGINS_DIR, "user_plugins", "*"),
]


def _sha256(buf: bytes) -> str:
    return hashlib.sha256(buf).hexdigest()


def _build_manifest(included: List[Dict[str, Any]]) -> Dict[str, Any]:
    return {
        "version": _BACKUP_VERSION,
        "generated_at": int(time.time()),
        "tool": "danmu-fire backup",
        "files": included,
        "file_count": len(included),
        "total_bytes": sum(f.get("size", 0) for f in included),
    }


def pack(target_path: Optional[Union[str, Path]] = None) -> bytes:
    """Produce a `.tar.gz` snapshot of operator-managed state.

    If `target_path` is given, the tarball is written there (atomic
    via tmp + replace) and an empty bytes object is returned. Otherwise
    the tarball is returned in-memory — used by the download endpoint.
    """
    buf = io.BytesIO()
    included: List[Dict[str, Any]] = []

    with tarfile.open(fileobj=buf, mode="w:gz") as tar:
        for label, src_dir, prefix, glob in _INCLUDE_DIRS:
            if not src_dir.exists():
                continue
            for f in sorted(src_dir.rglob(glob)):
                if not f.is_file():
                    continue
                # Skip *.tmp + hidden files (dotfiles) — those are
                # in-flight atomic-write artifacts or system noise.
                if f.name.endswith(".tmp") or f.name.startswith("."):
                    continue
                rel = f.relative_to(src_dir)
                arc_name = f"{prefix}/{rel.as_posix()}"
                try:
                    data = f.read_bytes()
                except OSError as exc:
                    logger.warning("backup pack skip %s: %s", f, exc)
                    continue
                info = tarfile.TarInfo(name=arc_name)
                info.size = len(data)
                info.mtime = int(f.stat().st_mtime)
                info.mode = 0o644
                tar.addfile(info, io.BytesIO(data))
                included.append({
                    "label": label,
                    "path": arc_name,
                    "size": len(data),
                    "sha256": _sha256(data),
                })

        # Manifest goes last so its hash reflects the full inventory.
        manifest_bytes = json.dumps(
            _build_manifest(included), ensure_ascii=False, indent=2
        ).encode("utf-8")
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
    """Inspect (and optionally apply) a backup tarball.

    Returns a dict with:
        ok: bool                   — overall validity
        manifest: dict | None      — parsed manifest.json (if present)
        members: [{ path, size, label }]
        applied: int               — number of files written (0 if dry_run)
        skipped: [{ path, reason }] — files refused by the safety checks
        errors: [str]              — fatal errors

    Safety rules enforced:
      - total size ≤ 16 MB
      - file count ≤ 2000
      - every archive path must start with one of the known prefixes
        (runtime/, effects/, plugins/, user_plugins/, manifest.json)
      - no `..` traversal, no absolute paths, no symlinks
      - target directory is created (with parents) but not chowned —
        permissions inherit from process umask
    """
    out: Dict[str, Any] = {
        "ok": False,
        "manifest": None,
        "members": [],
        "applied": 0,
        "skipped": [],
        "errors": [],
    }

    if len(tarball_bytes) > _MAX_IMPORT_SIZE:
        out["errors"].append(f"backup exceeds {_MAX_IMPORT_SIZE // (1024*1024)} MB")
        return out

    allowed_prefixes = {prefix + "/" for _, _, prefix, _ in _INCLUDE_DIRS}

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
        out["errors"].append(f"backup contains {len(members)} files (> {_MAX_FILE_COUNT})")
        tar.close()
        return out

    # Find + parse manifest first (members may be in any order).
    manifest = None
    for m in members:
        if m.name == "manifest.json" and m.isfile():
            try:
                f = tar.extractfile(m)
                if f is None:
                    continue
                manifest = json.loads(f.read().decode("utf-8"))
                break
            except (json.JSONDecodeError, UnicodeDecodeError) as exc:
                out["errors"].append(f"manifest.json malformed: {exc}")
                tar.close()
                return out
    out["manifest"] = manifest

    # Walk members + collect safe vs skipped lists.
    safe_writes: List[tuple] = []  # (resolved_path, data)
    for m in members:
        if m.name == "manifest.json":
            continue
        if m.issym() or m.islnk():
            out["skipped"].append({"path": m.name, "reason": "symlink rejected"})
            continue
        if not m.isfile():
            continue
        # Reject traversal + absolute paths
        if m.name.startswith("/") or ".." in Path(m.name).parts:
            out["skipped"].append({"path": m.name, "reason": "path traversal rejected"})
            continue
        # Must be under a known prefix
        if not any(m.name.startswith(p) for p in allowed_prefixes):
            out["skipped"].append({"path": m.name, "reason": "unknown prefix"})
            continue

        try:
            stream = tar.extractfile(m)
            if stream is None:
                out["skipped"].append({"path": m.name, "reason": "extractfile returned None"})
                continue
            data = stream.read()
        except (tarfile.TarError, OSError) as exc:
            out["skipped"].append({"path": m.name, "reason": f"read failed: {exc}"})
            continue

        # Resolve target path: <_SERVER_ROOT>/<prefix>/<rel> with the
        # prefix mapped back to its source directory (so runtime/ in the
        # tarball lands in server/runtime/ regardless of cwd).
        prefix, rel = m.name.split("/", 1)
        src_dir = next((s for label, s, p, g in _INCLUDE_DIRS if p == prefix), None)
        if src_dir is None:
            out["skipped"].append({"path": m.name, "reason": "no matching source dir"})
            continue
        target = src_dir / rel
        # Resolve and confirm we're still inside src_dir (paranoia layer).
        try:
            target_resolved = target.resolve()
            src_resolved = src_dir.resolve()
            if not str(target_resolved).startswith(str(src_resolved)):
                out["skipped"].append({"path": m.name, "reason": "resolves outside source dir"})
                continue
        except OSError as exc:
            out["skipped"].append({"path": m.name, "reason": f"resolve failed: {exc}"})
            continue

        safe_writes.append((target, data))
        out["members"].append({
            "path": m.name,
            "size": m.size,
            "label": prefix,
        })

    tar.close()

    if dry_run:
        out["ok"] = len(out["errors"]) == 0
        return out

    # Apply phase — atomic per-file via tmp + replace.
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
