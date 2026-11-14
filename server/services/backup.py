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
import re
import tarfile
import time
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, List, NamedTuple, Optional, Tuple, Union

from server import config as config_module
from server.config import Config

from . import atomic_file, code_policy

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


MERGE_WEBHOOK_UPDATED = "webhook_updated"
MERGE_WEBHOOK_KEPT = "webhook_kept"
MERGE_UNREADABLE_KEPT = "unreadable_file_kept"

# Each merge returns (merged_obj, skipped, merged_notes). It merges when the
# backup says credentials were omitted OR the file's credential fields are
# empty — whatever the manifest claims, a restore never blanks a credential
# the target has, and never writes a file that switches connection auth off.


def _note(path: str, code: str, reason: str) -> Dict[str, str]:
    return {"path": path, "code": code, "reason": reason}


def _valid_fire_token(current: Any) -> Optional[Dict[str, Any]]:
    """The target's fire-token state if the loader honours its token today."""
    from . import fire_token

    if not isinstance(current, dict):
        return None
    # A token written before the current format is deliberately ignored after
    # an upgrade and must not come back to life inside a current-format file.
    if current.get("token") and current.get("format") == fire_token._FORMAT:
        return current
    return None


def _merge_fire_token(incoming: Any, current: Any, path: str, omitted: bool):
    if not isinstance(incoming, dict):
        raise ValueError("fire_token.json is not an object")
    if incoming.get("token") and not omitted:
        return incoming, [], []
    from . import fire_token

    merged = dict(incoming)
    keep = _valid_fire_token(current)
    if keep is not None:
        # Credential and its on/off switch both stay as they are here.
        merged.update(
            format=fire_token._FORMAT,
            token=keep["token"],
            enabled=bool(keep.get("enabled", False)),
            rotated_at=keep.get("rotated_at", 0.0),
            created_at=keep.get("created_at", 0.0),
        )
    else:
        merged.update(token="", enabled=False)
    return merged, [], []


def _merge_ws_auth(incoming: Any, current: Any, path: str, omitted: bool):
    from . import ws_auth

    if not isinstance(incoming, dict):
        raise ValueError("ws_auth.json is not an object")
    if incoming.get("token") and not omitted:
        return incoming, [], []
    # Only a state file the loader would accept counts as the current token.
    try:
        current = ws_auth._normalize(current)
    except ValueError:
        current = {}
    merged = dict(incoming)
    merged["token"] = str(current.get("token") or "")
    if merged.get("require_token") and not merged["token"]:
        # Token auth stays on, as in the backup: never write "required but
        # no token", which the loader would turn into auth switched off.
        import secrets

        merged["token"] = secrets.token_urlsafe(24)
    return merged, [], []


def _hook_has_credentials(hook: Dict[str, Any]) -> bool:
    return bool(hook.get("url") or hook.get("secret"))


def _merge_webhooks(incoming: Any, current: Any, path: str, omitted: bool):
    if not isinstance(incoming, list):
        raise ValueError("webhooks.json is not a list")
    hooks = [h for h in incoming if isinstance(h, dict)]
    current_hooks = (
        [h for h in (current or []) if isinstance(h, dict)] if isinstance(current, list) else []
    )
    by_id = {h.get("id"): h for h in current_hooks if h.get("id")}
    skipped: List[Dict[str, str]] = []
    notes: List[Dict[str, str]] = []

    def label(hook):
        return f"{path} ({hook.get('id', '?')})"

    def no_credentials(hook):
        skipped.append(
            _skip(
                label(hook),
                SKIP_WEBHOOK_NO_CREDENTIALS,
                "webhook URL and secret are not in this backup or on this server",
            )
        )

    if not omitted and any(_hook_has_credentials(h) for h in hooks):
        # A backup that carries credentials is authoritative for the list.
        # A hook in it without a URL can only take this server's by id.
        out = []
        for hook in hooks:
            if _hook_has_credentials(hook):
                out.append(hook)
                continue
            existing = by_id.get(hook.get("id"))
            if existing is None or not existing.get("url"):
                no_credentials(hook)
                continue
            out.append({**hook, "url": existing["url"], "secret": existing.get("secret", "")})
        return out, skipped, notes

    # Credential-free: every hook this server has stays. A matching hook takes
    # the backup's settings and keeps its own URL and secret; a hook only in
    # the backup cannot be created without a URL.
    incoming_by_id = {h.get("id"): h for h in hooks if h.get("id")}
    out = []
    for existing in current_hooks:
        update = incoming_by_id.get(existing.get("id"))
        if update is None:
            out.append(existing)
            notes.append(_note(label(existing), MERGE_WEBHOOK_KEPT, "kept, not in this backup"))
            continue
        out.append({**update, "url": existing.get("url", ""), "secret": existing.get("secret", "")})
        notes.append(
            _note(label(existing), MERGE_WEBHOOK_UPDATED, "settings updated, URL and secret kept")
        )
    for hook in hooks:
        if hook.get("id") not in by_id:
            no_credentials(hook)
    return out, skipped, notes


# kind: (strip for export, merge on restore)
_CREDENTIAL_KINDS = {
    "fire_token": (_strip_fire_token, _merge_fire_token),
    "ws_auth": (_strip_ws_auth, _merge_ws_auth),
    "webhooks": (_strip_webhooks, _merge_webhooks),
}
# Where each lives under runtime/ with the default configuration.
_DEFAULT_CREDENTIAL_NAMES = {
    "fire_token.json": "fire_token",
    "ws_auth.json": "ws_auth",
    "webhooks.json": "webhooks",
}


def _configured_credential_paths() -> Dict[Path, str]:
    """The files the services actually read, as configured right now.

    WEBHOOKS_PATH can rename or move the webhook store; the fire token and
    ws_auth files have fixed names but are read from the modules so test
    redirection is honoured too.
    """
    from . import fire_token, webhook, ws_auth

    out: Dict[Path, str] = {}
    for path, kind in (
        (fire_token._STATE_FILE, "fire_token"),
        (ws_auth._state.path, "ws_auth"),
        (webhook._WEBHOOKS_FILE, "webhooks"),
    ):
        try:
            out[Path(path).resolve()] = kind
        except OSError:
            continue
    return out


def _credential_kind(
    area: _Area,
    arc_name: str,
    local_path: Path,
    configured: Dict[Path, str],
    declared: Optional[Dict[str, str]] = None,
) -> Optional[str]:
    """Which credential file *arc_name* is, if any.

    A file counts as a credential file when the backup's manifest declares
    it, when it is the file a service is configured to use on this server,
    or when it has a service's default name directly under runtime/.
    """
    if area.label != "runtime":
        return None
    if declared and declared.get(arc_name) in _CREDENTIAL_KINDS:
        return declared[arc_name]
    try:
        kind = configured.get(local_path.resolve())
    except OSError:
        kind = None
    if kind:
        return kind
    rel = arc_name[len(area.prefix) + 1 :]
    return _DEFAULT_CREDENTIAL_NAMES.get(rel)


def _declared_credential_files(manifest: Any) -> Dict[str, str]:
    raw = manifest.get("credential_files") if isinstance(manifest, dict) else None
    if not isinstance(raw, dict):
        return {}
    return {k: v for k, v in raw.items() if isinstance(k, str) and v in _CREDENTIAL_KINDS}


def _readable_credential_state(kind: str, current: Any) -> bool:
    if kind == "ws_auth":
        from . import ws_auth

        try:
            ws_auth._normalize(current)
        except ValueError:
            return False
        return True
    if kind == "webhooks":
        return isinstance(current, list)
    return isinstance(current, dict)


def _current_credential_state(kind: str, target: Path) -> Tuple[Any, bool]:
    """(parsed target file or None, whether it exists but cannot be used)."""
    if not target.is_file():
        return None, False
    try:
        current = json.loads(target.read_text(encoding="utf-8"))
    except (OSError, ValueError):
        return None, True
    if not _readable_credential_state(kind, current):
        return None, True
    return current, False


def _merge_credentials(kind: str, data: bytes, target: Path, path: str, omitted: bool):
    """Combine a backup's credential file with the target's own credentials.

    Returns (bytes to write, skipped, merged notes, target_unreadable).
    """
    incoming = json.loads(data.decode("utf-8"))
    current, unreadable = _current_credential_state(kind, target)
    merged, skipped, notes = _CREDENTIAL_KINDS[kind][1](incoming, current, path, omitted)
    encoded = json.dumps(merged, ensure_ascii=False, indent=2).encode("utf-8")
    return encoded, skipped, notes, unreadable


def _preserve_unreadable(target: Path) -> Optional[Path]:
    """Copy an unreadable credential file aside before it is overwritten.

    Same naming as JsonState's keep_unreadable_file
    (``<name>.corrupt-<UTC timestamp>``); an existing copy with identical
    bytes is reused. Owner-only, since the bytes may hold a credential.
    """
    try:
        data = target.read_bytes()
    except OSError as exc:
        logger.warning("backup: cannot copy unreadable %s: %s", target, exc)
        return None
    prefix = f"{target.name}.corrupt-"
    for existing in sorted(target.parent.glob(prefix + "*")):
        try:
            if existing.read_bytes() == data:
                return existing
        except OSError:
            continue
    stamp = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    copy = target.with_name(prefix + stamp)
    try:
        atomic_file.write_atomic(copy, data, 0o600)
    except OSError as exc:
        logger.warning("backup: cannot copy unreadable %s: %s", target, exc)
        return None
    logger.warning("backup: kept unreadable %s as %s before restoring it", target, copy)
    return copy


def _reload_fire_token() -> None:
    from . import fire_token

    fire_token.reload()


def _reload_ws_auth() -> None:
    from . import ws_auth

    ws_auth._state.reload()


def _reload_webhooks() -> None:
    from . import webhook

    if webhook.WebhookService._instance is not None:
        webhook.WebhookService._instance.reload()


# Services that cache a restored file: credential kind → reload. Without
# this the running server kept serving (and later wrote back) the
# pre-restore state until a restart.
_RELOAD_AFTER_RESTORE = {
    "fire_token": _reload_fire_token,
    "ws_auth": _reload_ws_auth,
    "webhooks": _reload_webhooks,
}


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

    Connection credentials (see _CREDENTIAL_KINDS) are left out unless
    ``include_credentials`` is set — the option for moving a whole site.
    The manifest lists which archive paths are credential files, so the
    restoring server recognises them even under a non-default name.
    """
    buf = io.BytesIO()
    included: List[Dict[str, Any]] = []
    credential_files: Dict[str, str] = {}
    configured = _configured_credential_paths()

    with tarfile.open(fileobj=buf, mode="w:gz") as tar:
        for area, f, arc_name in _iter_export_files():
            try:
                data = f.read_bytes()
                mtime = int(f.stat().st_mtime)
            except OSError as exc:
                logger.warning("backup pack skip %s: %s", f, exc)
                continue
            kind = _credential_kind(area, arc_name, f, configured)
            if kind is not None:
                credential_files[arc_name] = kind
            if kind is not None and not include_credentials:
                try:
                    stripped = _CREDENTIAL_KINDS[kind][0](json.loads(data.decode("utf-8")))
                except (ValueError, UnicodeDecodeError) as exc:
                    # Cannot tell what is a credential in a damaged file;
                    # leaving it out is the only safe choice.
                    logger.warning("backup pack skip unreadable %s: %s", f, exc)
                    credential_files.pop(arc_name, None)
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
        manifest = _build_manifest(included, include_credentials)
        manifest["credential_files"] = credential_files
        manifest_bytes = json.dumps(manifest, ensure_ascii=False, indent=2).encode("utf-8")
        _add_member(tar, "manifest.json", manifest_bytes, int(time.time()))

    raw = buf.getvalue()

    if target_path is not None:
        target = Path(target_path)
        target.parent.mkdir(parents=True, exist_ok=True)
        _write_file(target, raw, 0o600)
        return b""
    return raw


def _write_file(target: Path, data: bytes, mode: int) -> None:
    """Atomic replace with an explicit mode; see atomic_file.write_atomic.

    The temp file is a dotfile, so a concurrent export never picks it up.
    """
    atomic_file.write_atomic(target, data, mode)


def _file_mode(credential_kind: Optional[str]) -> int:
    # Credential files are written owner-only, as their services write them.
    return 0o600 if credential_kind else 0o644


def unpack(tarball_bytes: bytes, dry_run: bool = True) -> Dict[str, Any]:
    """Inspect (and optionally apply) a backup tarball.

    Returns a dict with:
        ok: bool                   — overall validity
        manifest: dict | None      — parsed manifest.json (if present)
        members: [{ path, size, label }]
        applied: int               — number of files written (0 if dry_run)
        skipped: [{ path, code, reason }] — files refused, with a reason code
        merged: [{ path, code, reason }]  — credential merges worth showing
                                            (webhooks updated/kept, unreadable
                                            files kept aside)
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
        "merged": [],
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
    configured = _configured_credential_paths()
    declared = _declared_credential_files(manifest)

    code_allowed = code_policy.code_upload_allowed()

    # Walk members + collect safe vs skipped lists.
    # (member name, target, data, credential kind, target unreadable)
    safe_writes: List[tuple] = []
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

        kind = _credential_kind(area, m.name, target, configured, declared)
        unreadable_target = False
        if kind is not None:
            try:
                data, dropped, notes, unreadable_target = _merge_credentials(
                    kind, data, target, m.name, credentials_omitted
                )
            except (ValueError, UnicodeDecodeError, TypeError, AttributeError) as exc:
                out["skipped"].append(_skip(m.name, SKIP_READ_FAILED, f"read failed: {exc}"))
                continue
            out["skipped"].extend(dropped)
            out["merged"].extend(notes)
            if unreadable_target and dry_run:
                out["merged"].append(
                    _note(m.name, MERGE_UNREADABLE_KEPT, "unreadable file will be kept aside")
                )

        safe_writes.append((m.name, target, data, kind, unreadable_target))
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
    restored_kinds = set()
    for member, target, data, kind, unreadable_target in safe_writes:
        try:
            if unreadable_target:
                copy = _preserve_unreadable(target)
                if copy is None:
                    # Without a copy, overwriting would lose the only
                    # record of what the file held.
                    out["errors"].append(f"write {target}: unreadable file could not be kept")
                    continue
                out["merged"].append(
                    _note(member, MERGE_UNREADABLE_KEPT, f"unreadable file kept as {copy.name}")
                )
            _write_file(target, data, _file_mode(kind))
            out["applied"] += 1
            if kind is not None:
                restored_kinds.add(kind)
        except OSError as exc:
            out["errors"].append(f"write {target}: {exc}")

    # Services that cache their file pick up the restored content now.
    for kind in sorted(restored_kinds):
        reload = _RELOAD_AFTER_RESTORE.get(kind)
        if reload is None:
            continue
        try:
            reload()
        except Exception as exc:  # restored file is on disk; report, don't fail
            logger.warning("backup: reload after restore failed for %s: %s", kind, exc)
            out["errors"].append(f"reload {kind}: {exc}")

    out["ok"] = len(out["errors"]) == 0
    return out
