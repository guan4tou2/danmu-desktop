"""Backup pack / unpack — full-state tarball export and dry-run import.

Bundles every piece of operator-managed runtime state into a single
``.tar.gz`` file so operators can move config across machines or pin
a snapshot before a risky change:

    danmu-backup-<timestamp>.tar.gz
    ├── manifest.json           # version, generated_at, files included
    ├── runtime/
    │   ├── settings.json       # overlay defaults
    │   ├── webhooks.json       # webhook endpoints
    │   ├── filter_rules.json   # moderation filter rules
    │   ├── audience.json       # audience overlay (flags/kicks)
    │   ├── (etc — every *.json under runtime/)
    ├── effects/                # *.dme files (built-in + user-uploaded)
    ├── plugins/                # bundled *.py plugins
    └── user_plugins/           # user-uploaded *.py plugins (kept separate)

Two surfaces:

    pack(target_path | None) → bytes (or writes to path)
        Produces the tarball. Returns the binary blob when no path given
        (the route uses this to stream a download response).

    unpack(tarball_bytes, dry_run=True) → manifest dict
        Reads the tarball, returns a list of files it would write. With
        ``dry_run=False`` it actually applies the contents (atomic per-file
        replace, no whole-tree rollback — caveat documented in the route).

What may be restored is exactly what an export produces. Both sides go
through :func:`_check_member`: a file belongs to one of the areas below, sits
at an allowed depth, has that area's extension and plain file names. Anything
else in an uploaded tarball is skipped and reported with a reason code. Plugin
files are Python that the server imports, so they are additionally subject to
the ALLOW_PLUGIN_UPLOAD deployment switch (``code_policy``). The admin
password hash is never restored.
"""

from __future__ import annotations

import hashlib
import io
import json
import logging
import os
import re
import tarfile
import threading
import time
from pathlib import Path
from typing import Any, Dict, List, NamedTuple, Optional, Tuple, Union

from server import config as config_module
from server.config import Config

from . import code_policy

logger = logging.getLogger(__name__)

# Single source for "what's the project root"; everything else hangs off it.
_SERVER_ROOT = Path(__file__).resolve().parent.parent

_RUNTIME_DIR = _SERVER_ROOT / "runtime"
_EFFECTS_DIR = _SERVER_ROOT / "effects"
_PLUGINS_DIR = Path(getattr(Config, "PLUGINS_DIR", _SERVER_ROOT / "plugins"))
_USER_PLUGINS_DIR = _SERVER_ROOT / "user_plugins"

_BACKUP_VERSION = "1"
_MAX_IMPORT_SIZE = 16 * 1024 * 1024  # 16 MB — sanity cap on uploaded backups
_MAX_FILE_COUNT = 2000  # refuse pathologically large tarballs

# Files in a backup are written with the same permissions their owning
# service uses: these hold bearer credentials and are owner-only.
_OWNER_ONLY_FILES = frozenset({"fire_token.json", "ws_auth.json", "webhooks.json"})

# One path segment: plain characters, no leading dot (so no ".", "..",
# dotfiles or editor temp files) and no separators.
_SEGMENT_RE = re.compile(r"^[A-Za-z0-9_-][A-Za-z0-9_.-]{0,127}$")


class _Area(NamedTuple):
    """One directory a backup covers, and the files in it that belong to it."""

    label: str
    src_dir: Path
    prefix: str
    suffix: str  # the only extension exported / restored
    nested: bool  # subdirectories allowed (runtime/stickers/packs.json)
    code: bool  # Python the server imports — gated by ALLOW_PLUGIN_UPLOAD


# Per-label rules. The plugin manager imports top-level *.py from plugins/
# and user_plugins/; effects are top-level *.dme; runtime state is JSON.
_RULES: Dict[str, Tuple[str, bool, bool]] = {
    "runtime": (".json", True, False),
    "effects": (".dme", False, False),
    "plugins": (".py", False, True),
    "user_plugins": (".py", False, True),
}


def _build_areas(
    *,
    runtime: Union[str, Path] = _RUNTIME_DIR,
    effects: Union[str, Path] = _EFFECTS_DIR,
    plugins: Union[str, Path] = _PLUGINS_DIR,
    user_plugins: Union[str, Path] = _USER_PLUGINS_DIR,
) -> List[_Area]:
    dirs = {"runtime": runtime, "effects": effects, "plugins": plugins}
    dirs["user_plugins"] = user_plugins
    return [_Area(label, Path(d), label, *_RULES[label]) for label, d in dirs.items()]


# Order matters only for manifest readability — extraction iterates the
# tarball's own member list.
_INCLUDE_DIRS: List[Any] = _build_areas()


def _areas() -> List[_Area]:
    """Current areas. Also accepts the older ``(label, dir, prefix, glob)``
    tuples so callers that point a single area at a temp dir keep working."""
    out: List[_Area] = []
    for entry in _INCLUDE_DIRS:
        if isinstance(entry, _Area):
            out.append(entry)
            continue
        label, src_dir, prefix = entry[0], Path(entry[1]), entry[2]
        out.append(_Area(label, src_dir, prefix, *_RULES[label]))
    return out


# ── reason codes (the admin UI translates these) ─────────────────────────────

SKIP_UNSAFE_PATH = "unsafe_path"
SKIP_NOT_BACKUP_FILE = "not_backup_file"
SKIP_ADMIN_PASSWORD = "admin_password"
SKIP_READ_FAILED = "read_failed"
SKIP_CODE_DISABLED = code_policy.UPLOAD_DISABLED_CODE


def _skip(path: str, code: str, reason: str) -> Dict[str, str]:
    return {"path": path, "code": code, "reason": reason}


def _is_admin_password_file(target: Path) -> bool:
    candidates = {config_module._HASH_FILE, config_module._LEGACY_HASH_FILE}
    try:
        resolved = target.resolve()
        return any(resolved == Path(c).resolve() for c in candidates)
    except OSError:
        return True


def _check_member(name: str) -> Tuple[Optional[Tuple[_Area, Path]], Optional[Dict[str, str]]]:
    """Map an archive path to (area, target) or explain why it is refused.

    Shared by pack and unpack, so a restore accepts exactly what an export
    writes. ``code`` gating (ALLOW_PLUGIN_UPLOAD) is applied by the caller,
    because exporting plugins is fine even where restoring them is not.
    """
    if not name or "\\" in name or "\x00" in name or name.startswith("/"):
        return None, _skip(name, SKIP_UNSAFE_PATH, "path traversal rejected")
    parts = name.split("/")
    # Empty segments ("runtime//abs/path", trailing "/"), "." and ".." are
    # all refused by the segment pattern.
    if any(not _SEGMENT_RE.match(seg) for seg in parts):
        return None, _skip(name, SKIP_UNSAFE_PATH, "path traversal rejected")

    area = next((a for a in _areas() if a.prefix == parts[0]), None)
    rel = parts[1:]
    if area is None or not rel:
        return None, _skip(name, SKIP_NOT_BACKUP_FILE, "not part of a backup")
    if (len(rel) > 1 and not area.nested) or not rel[-1].endswith(area.suffix):
        return None, _skip(name, SKIP_NOT_BACKUP_FILE, "not part of a backup")

    target = area.src_dir.joinpath(*rel)
    try:
        if not target.resolve().is_relative_to(area.src_dir.resolve()):
            return None, _skip(name, SKIP_UNSAFE_PATH, "resolves outside source dir")
    except (OSError, RuntimeError) as exc:
        return None, _skip(name, SKIP_UNSAFE_PATH, f"resolve failed: {exc}")
    if _is_admin_password_file(target):
        return None, _skip(name, SKIP_ADMIN_PASSWORD, "admin password is never restored")
    return (area, target), None


def _iter_export_files():
    """Yield (area, path, arc_name) for every file an export contains."""
    for area in _areas():
        if not area.src_dir.is_dir():
            continue
        walker = area.src_dir.rglob("*") if area.nested else area.src_dir.glob("*")
        for f in sorted(walker):
            if not f.is_file() or f.is_symlink():
                continue
            rel = f.relative_to(area.src_dir).as_posix()
            arc_name = f"{area.prefix}/{rel}"
            accepted, _ = _check_member(arc_name)
            if accepted is None:
                continue
            yield area, f, arc_name


def inventory() -> List[Dict[str, Any]]:
    """What an export would contain right now (label, path, size)."""
    files = []
    for area, f, arc_name in _iter_export_files():
        try:
            size = f.stat().st_size
        except OSError:
            continue
        files.append({"label": area.label, "path": arc_name, "size": size})
    return files


def _sha256(buf: bytes) -> str:
    return hashlib.sha256(buf).hexdigest()


def _build_manifest(included: List[Dict[str, Any]], include_credentials: bool) -> Dict[str, Any]:
    return {
        "version": _BACKUP_VERSION,
        "generated_at": int(time.time()),
        "tool": "danmu-fire backup",
        # Backups made before this key existed always carried credentials.
        "credentials": CREDENTIALS_INCLUDED if include_credentials else CREDENTIALS_OMITTED,
        "files": included,
        "file_count": len(included),
        "total_bytes": sum(f.get("size", 0) for f in included),
    }


# ── connection credentials ───────────────────────────────────────────────────
#
# By default an export leaves out the credentials other systems use to talk to
# this server: the /fire integration token, the display WebSocket token, and
# each outbound webhook's signing secret and URL (Discord/Slack URLs are
# themselves secrets). Everything else in those files is kept. Restoring such
# a backup keeps the credentials the target server already has.

CREDENTIALS_INCLUDED = "included"
CREDENTIALS_OMITTED = "omitted"
SKIP_WEBHOOK_NO_CREDENTIALS = "webhook_no_credentials"


def _strip_fire_token(obj: Any) -> Any:
    if not isinstance(obj, dict):
        raise ValueError("fire_token.json is not an object")
    return {**obj, "token": ""}


def _strip_ws_auth(obj: Any) -> Any:
    if not isinstance(obj, dict):
        raise ValueError("ws_auth.json is not an object")
    return {**obj, "token": ""}


def _strip_webhooks(obj: Any) -> Any:
    if not isinstance(obj, list):
        raise ValueError("webhooks.json is not a list")
    return [{**h, "url": "", "secret": ""} for h in obj if isinstance(h, dict)]


def _merge_fire_token(incoming: Any, current: Any, _path: str) -> Tuple[Any, List[Dict]]:
    current = current if isinstance(current, dict) else {}
    merged = dict(incoming)
    token = str(current.get("token") or "")
    merged["token"] = token
    if token:
        for key in ("format", "rotated_at", "created_at"):
            if key in current:
                merged[key] = current[key]
    else:
        merged["enabled"] = False
    return merged, []


def _merge_ws_auth(incoming: Any, current: Any, _path: str) -> Tuple[Any, List[Dict]]:
    current = current if isinstance(current, dict) else {}
    merged = dict(incoming)
    merged["token"] = str(current.get("token") or "")
    if merged.get("require_token") and not merged["token"]:
        # Token auth stays on, as in the backup; displays need the new
        # token from Admin → Security either way, since the old one was
        # not in the backup.
        import secrets

        merged["token"] = secrets.token_urlsafe(24)
    return merged, []


def _merge_webhooks(incoming: Any, current: Any, path: str) -> Tuple[Any, List[Dict]]:
    by_id = {h.get("id"): h for h in (current or []) if isinstance(h, dict) and h.get("id")}
    merged, skipped = [], []
    for hook in incoming:
        existing = by_id.get(hook.get("id"))
        if existing is None or not existing.get("url"):
            skipped.append(
                _skip(
                    f"{path} ({hook.get('id', '?')})",
                    SKIP_WEBHOOK_NO_CREDENTIALS,
                    "webhook URL and secret are not in this backup or on this server",
                )
            )
            continue
        merged.append({**hook, "url": existing["url"], "secret": existing.get("secret", "")})
    return merged, skipped


# runtime/<name>: (strip for export, merge on restore)
_CREDENTIAL_FILES = {
    "fire_token.json": (_strip_fire_token, _merge_fire_token),
    "ws_auth.json": (_strip_ws_auth, _merge_ws_auth),
    "webhooks.json": (_strip_webhooks, _merge_webhooks),
}


def _credential_handlers(area: _Area, arc_name: str):
    name = arc_name[len(area.prefix) + 1 :]
    if area.label != "runtime" or "/" in name:
        return None
    return _CREDENTIAL_FILES.get(name)


def _merge_credentials(handlers, data: bytes, target: Path, path: str):
    """Put the target's own credentials into a credential-free backup file."""
    incoming = json.loads(data.decode("utf-8"))
    try:
        current = json.loads(target.read_text(encoding="utf-8")) if target.is_file() else None
    except (OSError, ValueError):
        current = None
    merged, skipped = handlers[1](incoming, current, path)
    return json.dumps(merged, ensure_ascii=False, indent=2).encode("utf-8"), skipped


def _add_member(tar: tarfile.TarFile, name: str, data: bytes, mtime: int) -> None:
    info = tarfile.TarInfo(name=name)
    info.size = len(data)
    info.mtime = mtime
    # The archive can hold credentials; whoever extracts it with tar should
    # not get world-readable files.
    info.mode = 0o600
    tar.addfile(info, io.BytesIO(data))


def pack(
    target_path: Optional[Union[str, Path]] = None, *, include_credentials: bool = False
) -> bytes:
    """Produce a `.tar.gz` snapshot of operator-managed state.

    If `target_path` is given, the tarball is written there (atomic
    via tmp + replace) and an empty bytes object is returned. Otherwise
    the tarball is returned in-memory — used by the download endpoint.

    Connection credentials (see _CREDENTIAL_FILES) are left out unless
    ``include_credentials`` is set — the option for moving a whole site.
    """
    buf = io.BytesIO()
    included: List[Dict[str, Any]] = []

    with tarfile.open(fileobj=buf, mode="w:gz") as tar:
        for area, f, arc_name in _iter_export_files():
            try:
                data = f.read_bytes()
                mtime = int(f.stat().st_mtime)
            except OSError as exc:
                logger.warning("backup pack skip %s: %s", f, exc)
                continue
            handlers = None if include_credentials else _credential_handlers(area, arc_name)
            if handlers is not None:
                try:
                    stripped = handlers[0](json.loads(data.decode("utf-8")))
                except (ValueError, UnicodeDecodeError) as exc:
                    # Cannot tell what is a credential in a damaged file;
                    # leaving it out is the only safe choice.
                    logger.warning("backup pack skip unreadable %s: %s", f, exc)
                    continue
                data = json.dumps(stripped, ensure_ascii=False, indent=2).encode("utf-8")
            _add_member(tar, arc_name, data, mtime)
            included.append(
                {
                    "label": area.label,
                    "path": arc_name,
                    "size": len(data),
                    "sha256": _sha256(data),
                }
            )

        # Manifest goes last so its hash reflects the full inventory.
        manifest_bytes = json.dumps(
            _build_manifest(included, include_credentials), ensure_ascii=False, indent=2
        ).encode("utf-8")
        _add_member(tar, "manifest.json", manifest_bytes, int(time.time()))

    raw = buf.getvalue()

    if target_path is not None:
        target = Path(target_path)
        target.parent.mkdir(parents=True, exist_ok=True)
        _write_file(target, raw, 0o600)
        return b""
    return raw


def _write_file(target: Path, data: bytes, mode: int) -> None:
    """Atomic replace with an explicit mode (tmp + rename).

    The temp file is a dotfile with a per-process name, so a concurrent
    export never picks it up and a stale one is never reused with other
    permissions.
    """
    target.parent.mkdir(parents=True, exist_ok=True)
    tmp = target.with_name(f".{target.name}.restore-{os.getpid()}-{threading.get_ident()}.tmp")
    fd = os.open(tmp, os.O_WRONLY | os.O_CREAT | os.O_EXCL, mode)
    try:
        with os.fdopen(fd, "wb") as f:
            f.write(data)
        os.chmod(tmp, mode)
        os.replace(tmp, target)
    except BaseException:
        try:
            os.unlink(tmp)
        except OSError:
            pass
        raise


def _file_mode(area: _Area, target: Path) -> int:
    if area.label == "runtime" and target.name in _OWNER_ONLY_FILES:
        return 0o600
    return 0o644


def unpack(tarball_bytes: bytes, dry_run: bool = True) -> Dict[str, Any]:
    """Inspect (and optionally apply) a backup tarball.

    Returns a dict with:
        ok: bool                   — overall validity
        manifest: dict | None      — parsed manifest.json (if present)
        members: [{ path, size, label }]
        applied: int               — number of files written (0 if dry_run)
        skipped: [{ path, code, reason }] — files refused, with a reason code
        errors: [str]              — fatal errors

    Safety rules enforced:
      - total size ≤ 16 MB, file count ≤ 2000
      - only files an export produces (see _check_member): known area,
        that area's extension and depth, plain path segments, no links
      - plugin files only when ALLOW_PLUGIN_UPLOAD is on
      - never the admin password hash
      - files are written with the permissions their service uses
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
    # Older backups have no "credentials" key and always carried them.
    credentials_omitted = (
        isinstance(manifest, dict) and manifest.get("credentials") == CREDENTIALS_OMITTED
    )
    out["credentials"] = CREDENTIALS_OMITTED if credentials_omitted else CREDENTIALS_INCLUDED

    code_allowed = code_policy.code_upload_allowed()

    # Walk members + collect safe vs skipped lists.
    safe_writes: List[tuple] = []  # (area, target, data)
    for m in members:
        if m.name == "manifest.json":
            continue
        if m.issym() or m.islnk():
            out["skipped"].append(_skip(m.name, SKIP_UNSAFE_PATH, "symlink rejected"))
            continue
        if not m.isfile():
            continue

        accepted, refusal = _check_member(m.name)
        if accepted is None:
            out["skipped"].append(refusal)
            continue
        area, target = accepted
        if area.code and not code_allowed:
            out["skipped"].append(
                _skip(m.name, SKIP_CODE_DISABLED, code_policy.UPLOAD_DISABLED_MESSAGE)
            )
            continue

        try:
            stream = tar.extractfile(m)
            if stream is None:
                out["skipped"].append(_skip(m.name, SKIP_READ_FAILED, "extractfile returned None"))
                continue
            data = stream.read()
        except (tarfile.TarError, OSError) as exc:
            out["skipped"].append(_skip(m.name, SKIP_READ_FAILED, f"read failed: {exc}"))
            continue

        handlers = _credential_handlers(area, m.name) if credentials_omitted else None
        if handlers is not None:
            try:
                data, dropped = _merge_credentials(handlers, data, target, m.name)
            except (ValueError, UnicodeDecodeError, TypeError, AttributeError) as exc:
                out["skipped"].append(_skip(m.name, SKIP_READ_FAILED, f"read failed: {exc}"))
                continue
            out["skipped"].extend(dropped)

        safe_writes.append((area, target, data))
        out["members"].append(
            {
                "path": m.name,
                "size": m.size,
                "label": area.label,
            }
        )

    tar.close()

    if dry_run:
        out["ok"] = len(out["errors"]) == 0
        return out

    # Apply phase — atomic per-file via tmp + replace.
    wrote_fire_token = False
    for area, target, data in safe_writes:
        try:
            _write_file(target, data, _file_mode(area, target))
            out["applied"] += 1
            wrote_fire_token = wrote_fire_token or target.name == "fire_token.json"
        except OSError as exc:
            out["errors"].append(f"write {target}: {exc}")

    # fire_token caches its state; without this the restored token (or the
    # restored "no token") only took effect after a restart, so /fire kept
    # honouring the pre-restore credential.
    if wrote_fire_token:
        from . import fire_token

        fire_token.reload()

    out["ok"] = len(out["errors"]) == 0
    return out
