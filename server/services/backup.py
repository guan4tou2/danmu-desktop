"""Backup pack / unpack — full-state tarball export and dry-run import.

Bundles every piece of operator-managed runtime state into a single
``.tar.gz`` file so operators can move config across machines or pin
a snapshot before a risky change:

    danmu-backup-<timestamp>.tar.gz
    ├── manifest.json           # version, generated_at, files included
    ├── runtime/
    │   ├── settings.json       # overlay defaults
    │   ├── webhooks.json       # webhook endpoints (this name wherever
    │   │                       #   WEBHOOKS_PATH points)
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

import glob
import hashlib
import io
import json
import logging
import os
import re
import tarfile
import time
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Callable, Dict, List, NamedTuple, Optional, Tuple, Union

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


def _same_file(a: Path, b: Path) -> bool:
    """Whether *a* and *b* are the same file on this host.

    ``Path.resolve()`` equality misses case-only differences on a
    case-insensitive filesystem (APFS, NTFS), where ``WS_AUTH.json`` and
    ``ws_auth.json`` are one file. ``os.path.samefile`` asks the filesystem,
    so a case variant of a credential store is recognised as that store
    instead of being written as an ordinary file. When a file does not exist
    yet, fall back to a case-insensitive comparison of the resolved paths.
    """
    try:
        return os.path.samefile(a, b)
    except OSError:
        pass
    try:
        ra, rb = str(a.resolve()), str(b.resolve())
    except (OSError, RuntimeError):
        return False
    return os.path.normcase(ra) == os.path.normcase(rb)


def _is_admin_password_file(target: Path) -> bool:
    candidates = {config_module._HASH_FILE, config_module._LEGACY_HASH_FILE}
    try:
        return any(_same_file(target, Path(c)) for c in candidates)
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


# ── connection credentials ───────────────────────────────────────────────────
#
# By default an export leaves out the credentials other systems use to talk to
# this server: the /fire integration token, the display WebSocket token, and
# each outbound webhook's signing secret and URL (Discord/Slack URLs are
# themselves secrets). Everything else in those files is kept. Restoring such
# a backup keeps the credentials the target server already has.
#
# Which file is a credential file is decided only by what this server knows:
# the store each credential service reads and writes. Nothing in an uploaded
# archive can declare another file to be one. In an archive the stores always
# have the names in _CREDENTIAL_ARCS, whatever they are called locally
# (WEBHOOKS_PATH can rename or move the webhook store), and a restore hands
# them to the service, which writes its own configured store under its own
# lock.

CREDENTIALS_INCLUDED = "included"
CREDENTIALS_OMITTED = "omitted"
SKIP_WEBHOOK_NO_CREDENTIALS = "webhook_no_credentials"
SKIP_WEBHOOK_INVALID = "webhook_invalid"
SKIP_CREDENTIAL_INVALID = "credential_invalid"
SKIP_WEBHOOK_STORE_MISMATCH = "webhook_store_mismatch"

MERGE_WEBHOOK_UPDATED = "webhook_updated"
MERGE_WEBHOOK_KEPT = "webhook_kept"
MERGE_UNREADABLE_KEPT = "unreadable_file_kept"
MERGE_FIRE_TOKEN_LEGACY = "fire_token_legacy_ignored"
MERGE_WS_AUTH_OFF = "ws_auth_turned_off"

# kind → its path inside an archive
_CREDENTIAL_ARCS = {
    "fire_token": "runtime/fire_token.json",
    "ws_auth": "runtime/ws_auth.json",
    "webhooks": "runtime/webhooks.json",
}
_ARC_KINDS = {arc: kind for kind, arc in _CREDENTIAL_ARCS.items()}
# Lower-cased store archive names. A member whose name matches one of these
# case-insensitively but not exactly is a case variant of a credential store:
# on a case-insensitive filesystem it is that physical file, so writing it as
# a plain runtime file would overwrite the store and bypass the credential
# merge. Such members are refused outright, on every filesystem.
_ARC_KINDS_CASEFOLD = {arc.casefold() for arc in _ARC_KINDS}


def _credential_stores() -> Dict[str, Path]:
    """kind → the file its service reads and writes, as configured now."""
    from . import fire_token, webhook, ws_auth

    return {
        "fire_token": Path(fire_token._STATE_FILE),
        "ws_auth": Path(ws_auth._state.path),
        "webhooks": Path(webhook._WEBHOOKS_FILE),
    }


def _store_kind(path: Path, stores: Dict[str, Path]) -> Optional[str]:
    """Which credential store *path* is, if any — same-file, not string match."""
    for kind, store in stores.items():
        if _same_file(path, store):
            return kind
    return None


def _iter_export_files():
    """Yield (area, path, arc_name, credential kind or None) for every file
    an export contains.

    Each credential store appears once, under its archive name. A runtime
    file that is a store, or that has a store's archive name without being
    that store (left over from before WEBHOOKS_PATH changed, say), is not
    exported as ordinary runtime state.
    """
    stores = _credential_stores()
    runtime: Optional[_Area] = None
    for area in _areas():
        if area.label == "runtime" and runtime is None:
            runtime = area
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
            if area.label == "runtime" and (arc_name in _ARC_KINDS or _store_kind(f, stores)):
                continue
            yield area, f, arc_name, None
    if runtime is None:
        return
    for kind, store in stores.items():
        if store.is_file():
            yield runtime, store, _CREDENTIAL_ARCS[kind], kind


def inventory() -> List[Dict[str, Any]]:
    """What an export would contain right now (label, path, size)."""
    files = []
    for area, f, arc_name, _kind in _iter_export_files():
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


def _looks_like_webhook_list(obj: Any) -> bool:
    """Conservatively, whether *obj* is a webhook store's content.

    Used to catch a webhook store that travels under a non-standard name
    (an older backup, or a leftover of a renamed WEBHOOKS_PATH) so its URLs
    and secrets are not exported raw or restored as a plain file. Kept
    strict — every entry must be a dict carrying both ``url`` and ``events``,
    which other runtime lists (filter_rules, api_tokens) do not — so ordinary
    runtime JSON is never mistaken for it.
    """
    if not isinstance(obj, list) or not obj:
        return False
    return all(isinstance(h, dict) and "url" in h and "events" in h for h in obj)


def _is_webhook_payload(data: bytes) -> bool:
    """Whether raw bytes parse as a webhook list (see _looks_like_webhook_list)."""
    try:
        return _looks_like_webhook_list(json.loads(data.decode("utf-8")))
    except (ValueError, UnicodeDecodeError):
        return False


def _note(path: str, code: str, reason: str) -> Dict[str, str]:
    return {"path": path, "code": code, "reason": reason}


# Each merge takes the backup's content and the service's live state (the
# state it enforces now, not whatever happens to be on disk), and returns
# (merged, skipped, notes). A backup that actually carries a credential is
# authoritative for that store; a credential-free backup — the manifest says
# omitted, or the credential fields are empty — keeps what the target already
# has. Either way a credential the target holds is never blanked just because
# the backup does not carry it.


def _merge_fire_token(incoming: Any, current: Optional[Dict[str, Any]], path: str, omitted: bool):
    from . import fire_token

    if not isinstance(incoming, dict):
        raise ValueError("fire_token.json is not an object")
    notes: List[Dict[str, str]] = []
    if incoming.get("token") and incoming.get("format") != fire_token._FORMAT:
        # A token from before the current format is never honoured; such a
        # backup counts as carrying no token.
        notes.append(
            _note(path, MERGE_FIRE_TOKEN_LEGACY, "token predates the current format, not restored")
        )
    elif incoming.get("token") and not omitted:
        return dict(incoming), [], notes
    merged = {**incoming, "format": fire_token._FORMAT}
    if current is not None and current.get("token"):
        # Credential and its on/off switch both stay as they are here.
        merged.update(
            token=current["token"],
            enabled=bool(current.get("enabled", False)),
            rotated_at=current.get("rotated_at", 0.0),
            created_at=current.get("created_at", 0.0),
        )
    else:
        merged.update(token="", enabled=False)
    return merged, [], notes


def _merge_ws_auth(incoming: Any, current: Optional[Dict[str, Any]], path: str, omitted: bool):
    if not isinstance(incoming, dict):
        raise ValueError("ws_auth.json is not an object")
    merged = dict(incoming)
    if not (incoming.get("token") and not omitted):
        merged["token"] = str((current or {}).get("token") or "")
        if merged.get("require_token") and not merged["token"]:
            # Token auth stays on, as in the backup: never write "required
            # but no token", which the loader would turn into auth off.
            import secrets

            merged["token"] = secrets.token_urlsafe(24)
    notes: List[Dict[str, str]] = []
    if current and current.get("require_token") and not merged.get("require_token", True):
        notes.append(_note(path, MERGE_WS_AUTH_OFF, "display token requirement will be turned off"))
    return merged, [], notes


def _normalize_backup_hooks(incoming: Any, path: str):
    """Each backup hook as the service would load it; unusable ones skipped."""
    from . import webhook

    if not isinstance(incoming, list):
        raise ValueError("webhooks.json is not a list")
    hooks: List[Dict[str, Any]] = []
    skipped: List[Dict[str, str]] = []
    for index, entry in enumerate(incoming):
        try:
            hooks.append(webhook._load_entry(entry).to_dict())
        except (TypeError, ValueError) as exc:
            hook_id = entry.get("id") if isinstance(entry, dict) else None
            label = hook_id if isinstance(hook_id, str) and hook_id else f"#{index + 1}"
            skipped.append(
                _skip(f"{path} ({label})", SKIP_WEBHOOK_INVALID, f"invalid webhook: {exc}")
            )
    return hooks, skipped


def _merge_webhooks(
    incoming: Any, current: Optional[List[Dict[str, Any]]], path: str, omitted: bool
):
    hooks, skipped = _normalize_backup_hooks(incoming, path)
    current_hooks = list(current or [])
    by_id = {h.get("id"): h for h in current_hooks if h.get("id")}
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

    if not omitted and any(h.get("url") for h in hooks):
        # A backup that carries credentials is authoritative for the list.
        # A hook in it with a URL is taken as is (an empty secret is a valid
        # unsigned webhook); one without a URL can only take this server's
        # URL and secret by id, never keep a secret with no destination.
        out = []
        for hook in hooks:
            if hook.get("url"):
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


def _service_view(kind: str, raw: Any) -> Tuple[Any, bool]:
    """(what the service makes of *raw*, whether it cannot use all of it)."""
    from . import fire_token, webhook, ws_auth

    if kind == "fire_token":
        try:
            state = fire_token.parse_state(raw)
        except ValueError:
            return None, True
        # None: a token from before the current format, which the service
        # ignores — a file it does not recognise, kept aside like a damaged one.
        return state, state is None
    if kind == "ws_auth":
        try:
            return ws_auth._normalize(raw), False
        except ValueError:
            return None, True
    if not isinstance(raw, list):
        return None, True
    hooks, partial = [], False
    for entry in raw:
        try:
            hooks.append(webhook._load_entry(entry).to_dict())
        except (TypeError, ValueError):
            partial = True
    return hooks, partial


def _target_state(kind: str, target: Path) -> Tuple[Any, bool]:
    """(service view of the target's store or None, whether the file exists
    but the service cannot use all of it — then it is kept aside first)."""
    if not target.exists():
        return None, False
    try:
        raw = json.loads(target.read_text(encoding="utf-8"))
    except (OSError, ValueError):
        return None, True
    return _service_view(kind, raw)


def _validated(kind: str, merged: Any) -> Any:
    """*merged* as the service would load it; ValueError if it would not."""
    from . import fire_token, webhook, ws_auth

    if kind == "fire_token":
        state = fire_token.parse_state(merged)
        if state is None:
            raise ValueError("fire token predates the current format")
        return state
    if kind == "ws_auth":
        return ws_auth._normalize(merged)
    if not isinstance(merged, list):
        raise ValueError("webhooks.json is not a list")
    try:
        return [webhook._load_entry(h).to_dict() for h in merged]
    except TypeError as exc:
        raise ValueError(str(exc)) from exc


class _CredentialRefused(Exception):
    """The backup's credential file cannot become a state the service loads."""

    def __init__(self, skip: Dict[str, str]):
        super().__init__(skip["reason"])
        self.skip = skip


class _PreserveFailed(Exception):
    """An unusable store could not be copied aside, so it is not overwritten."""


def _merge_credential(kind: str, incoming: Any, current: Any, path: str, omitted: bool):
    """(validated merged state, skipped, notes); _CredentialRefused if unusable."""
    try:
        merged, skipped, notes = _CREDENTIAL_KINDS[kind][1](incoming, current, path, omitted)
        return _validated(kind, merged), skipped, notes
    except (TypeError, ValueError, AttributeError) as exc:
        raise _CredentialRefused(
            _skip(path, SKIP_CREDENTIAL_INVALID, f"not a state this server can load: {exc}")
        ) from exc


def _preserve_unreadable(target: Path) -> Optional[Path]:
    """Copy an unusable credential file aside before it is overwritten.

    Same naming as JsonState's keep_unreadable_file
    (``<name>.corrupt-<UTC timestamp>``). An existing copy with identical
    bytes is reused; a different file never replaces an earlier copy, even
    within the same second. Owner-only, since the bytes may hold a credential.
    """
    try:
        data = target.read_bytes()
    except OSError as exc:
        logger.warning("backup: cannot copy unreadable %s: %s", target, exc)
        return None
    prefix = f"{target.name}.corrupt-"
    for existing in sorted(target.parent.glob(glob.escape(prefix) + "*")):
        try:
            if existing.is_file() and existing.read_bytes() == data:
                return existing
        except OSError:
            continue
    stamp = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    copy = target.with_name(prefix + stamp)
    n = 1
    while copy.exists() or copy.is_symlink():
        copy = target.with_name(f"{prefix}{stamp}-{n}")
        n += 1
    try:
        atomic_file.write_atomic(copy, data, 0o600)
    except OSError as exc:
        logger.warning("backup: cannot copy unreadable %s: %s", target, exc)
        return None
    logger.warning("backup: kept unreadable %s as %s before restoring it", target, copy)
    return copy


def _webhooks_live() -> List[Dict[str, Any]]:
    """The webhook service's current list (unredacted), under its lock."""
    from . import webhook

    svc = webhook.WebhookService()
    with svc._lock:
        return [h.to_dict() for h in svc._hooks.values()]


def _live_current(kind: str, disk_current: Any) -> Any:
    """The merge base: the state the service enforces now, not the file.

    Reading the service's in-memory state (rather than re-reading the file)
    is what stops a corrupt or stale on-disk copy from tricking a restore into
    blanking a credential the server is still using, or into silently turning
    an on switch off. Read-only and non-seeding: safe in a dry-run preview and,
    for ws_auth, reentrant inside ``replace``. Falls back to the disk view only
    when the service has nothing loaded, which means the file is also the
    effective state.
    """
    from . import fire_token, ws_auth

    if kind == "fire_token":
        return dict(fire_token._state) if fire_token._state is not None else disk_current
    if kind == "ws_auth":
        return ws_auth._state.current()
    return _webhooks_live()


def _restore_credential(kind: str, incoming: Any, path: str, omitted: bool, target: Path):
    """Merge and write one credential store through its service.

    The service runs ``build`` under its own write lock: read what it has
    now, merge, keep an unusable file aside, then it writes the file and
    swaps its in-memory state. Nothing else can write that store in
    between. Returns (skipped, notes); raises _CredentialRefused,
    _PreserveFailed or OSError, leaving the store as it was.
    """
    from . import fire_token, webhook, ws_auth

    result: Dict[str, Any] = {}

    def build(live: Optional[List[Dict[str, Any]]] = None):
        # Whether the on-disk file must be kept aside is decided from disk; a
        # corrupt file is copied aside *before* the live state is read, so a
        # non-seeding read can never overwrite its bytes first.
        disk_current, unusable = _target_state(kind, target)
        if unusable:
            copy = _preserve_unreadable(target)
            if copy is None:
                raise _PreserveFailed()
        # The merge base is the service's live state. For webhooks the service
        # hands its own list in as ``live``; the others read it here.
        current = live if live is not None else _live_current(kind, disk_current)
        merged, skipped, notes = _merge_credential(kind, incoming, current, path, omitted)
        if unusable:
            notes.append(_note(path, MERGE_UNREADABLE_KEPT, f"unreadable file kept as {copy.name}"))
        result["skipped"], result["notes"] = skipped, notes
        return merged

    if kind == "fire_token":
        fire_token.restore(build)
    elif kind == "ws_auth":
        ws_auth._state.replace(build)
    else:
        webhook.WebhookService().restore_hooks(build)
    return result["skipped"], result["notes"]


# Services that cache a restored runtime file and must re-read it once the
# restore has written it: archive path → reload callable. Credential stores
# are not listed — their services swap in the restored state themselves, in
# the same locked step as the write (_restore_credential).
#
# Currently empty: every other restored runtime file is read fresh on each
# request, so it takes effect without a reload (see DEPLOYMENT.md for the ones
# that still need a restart). The filter-rules reload
# ("runtime/filter_rules.json" → the filter engine) is being added on a
# separate branch and plugs in here; the table and the apply-phase loop below
# stay so that lands as a one-line addition.
_RELOAD_AFTER_RESTORE: Dict[str, Callable[[], None]] = {}


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
    """
    buf = io.BytesIO()
    included: List[Dict[str, Any]] = []

    with tarfile.open(fileobj=buf, mode="w:gz") as tar:
        for area, f, arc_name, kind in _iter_export_files():
            try:
                data = f.read_bytes()
                mtime = int(f.stat().st_mtime)
            except OSError as exc:
                logger.warning("backup pack skip %s: %s", f, exc)
                continue
            if kind is not None and not include_credentials:
                try:
                    stripped = _CREDENTIAL_KINDS[kind][0](json.loads(data.decode("utf-8")))
                except (ValueError, UnicodeDecodeError) as exc:
                    # Cannot tell what is a credential in a damaged file;
                    # leaving it out is the only safe choice.
                    logger.warning("backup pack skip unreadable %s: %s", f, exc)
                    continue
                data = json.dumps(stripped, ensure_ascii=False, indent=2).encode("utf-8")
            elif kind is None and area.label == "runtime" and not include_credentials:
                # A runtime file that is not a recognised store but holds a
                # webhook list (an older backup's name, or a leftover from a
                # renamed WEBHOOKS_PATH) would otherwise carry its URLs and
                # secrets out raw. Strip it by content, not by its name.
                try:
                    parsed = json.loads(data.decode("utf-8"))
                except (ValueError, UnicodeDecodeError):
                    parsed = None
                if _looks_like_webhook_list(parsed):
                    data = json.dumps(_strip_webhooks(parsed), ensure_ascii=False, indent=2).encode(
                        "utf-8"
                    )
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


def unpack(tarball_bytes: bytes, dry_run: bool = True) -> Dict[str, Any]:
    """Inspect (and optionally apply) a backup tarball.

    Returns a dict with:
        ok: bool                   — overall validity
        manifest: dict | None      — parsed manifest.json (if present)
        members: [{ path, size, label }]
        applied: int               — number of files written (0 if dry_run)
        skipped: [{ path, code, reason }] — files refused, with a reason code
        merged: [{ path, code, reason }]  — credential merges worth showing
        errors: [str]              — "write …": that file was not written;
                                     "reload …": written, but the running
                                     service did not pick it up
        reload_failed: [str]       — archive paths written but not reloaded
        restart_required: bool     — true when reload_failed is not empty

    Safety rules enforced:
      - total size ≤ 16 MB, file count ≤ 2000
      - only files an export produces (see _check_member): known area,
        that area's extension and depth, plain path segments, no links
      - plugin files only when ALLOW_PLUGIN_UPLOAD is on
      - never the admin password hash
      - credential stores are recognised by this server's own store paths
        and written by their services; other files are written 0644
    """
    out: Dict[str, Any] = {
        "ok": False,
        "manifest": None,
        "members": [],
        "applied": 0,
        "skipped": [],
        "merged": [],
        "errors": [],
        "reload_failed": [],
        "restart_required": False,
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
    stores = _credential_stores()
    names = {m.name for m in members}

    code_allowed = code_policy.code_upload_allowed()

    # A webhook list can travel under a non-store name (an older backup, or a
    # leftover of a renamed WEBHOOKS_PATH). At most one such stray may stand in
    # for the webhook store, and only when the archive has no real one — the
    # canonical name, or a member that resolves to this server's webhook store.
    stray_webhooks_used = False
    webhooks_store_present = _CREDENTIAL_ARCS["webhooks"] in names
    if not webhooks_store_present:
        for m in members:
            if not m.isfile() or m.issym() or m.islnk():
                continue
            acc, _ = _check_member(m.name)
            if acc is None:
                continue
            a, t = acc
            if (
                a.label == "runtime"
                and _ARC_KINDS.get(m.name) is None
                and m.name.casefold() not in _ARC_KINDS_CASEFOLD
                and _store_kind(t, stores) == "webhooks"
            ):
                webhooks_store_present = True
                break

    # Walk members + collect safe vs skipped lists.
    # (member name, target, data, credential kind, parsed credential content)
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

        kind = None
        if area.label == "runtime":
            kind = _ARC_KINDS.get(m.name)
            if kind is None:
                if m.name.casefold() in _ARC_KINDS_CASEFOLD:
                    # Same name as a credential store but for case: never a
                    # plain file (see _ARC_KINDS_CASEFOLD).
                    out["skipped"].append(
                        _skip(
                            m.name,
                            SKIP_NOT_BACKUP_FILE,
                            "credential store name differs only by case",
                        )
                    )
                    continue
                # A file that lands on one of this server's stores under
                # another name (an older backup of a renamed store) is that
                # store — unless the archive carries the store as well.
                kind = _store_kind(target, stores)
                if kind is not None and _CREDENTIAL_ARCS[kind] in names:
                    out["skipped"].append(
                        _skip(m.name, SKIP_NOT_BACKUP_FILE, "duplicate of a credential store")
                    )
                    continue
                if kind is None and _is_webhook_payload(data):
                    # A webhook list under a non-store name: route it to the
                    # webhook store so its URLs and secrets go through the
                    # service, never written raw as a plain file. Only when no
                    # real webhook store is in the archive, and only once.
                    if webhooks_store_present or stray_webhooks_used:
                        out["skipped"].append(
                            _skip(
                                m.name,
                                SKIP_WEBHOOK_STORE_MISMATCH,
                                "webhook-shaped file but the backup already has a webhook store",
                            )
                        )
                        continue
                    kind = "webhooks"
                    stray_webhooks_used = True
            if kind is not None:
                target = stores[kind]

        incoming = None
        if kind is not None:
            try:
                incoming = json.loads(data.decode("utf-8"))
            except (ValueError, UnicodeDecodeError) as exc:
                out["skipped"].append(_skip(m.name, SKIP_READ_FAILED, f"read failed: {exc}"))
                continue
            # Preview of the merge against the live state (what the service
            # enforces now). The apply step merges again under the service's
            # lock; the unusable flag still comes from disk.
            disk_current, unusable = _target_state(kind, target)
            current = _live_current(kind, disk_current)
            try:
                _, dropped, notes = _merge_credential(
                    kind, incoming, current, m.name, credentials_omitted
                )
            except _CredentialRefused as exc:
                out["skipped"].append(exc.skip)
                continue
            if dry_run:
                out["skipped"].extend(dropped)
                out["merged"].extend(notes)
                if unusable:
                    out["merged"].append(
                        _note(m.name, MERGE_UNREADABLE_KEPT, "unreadable file will be kept aside")
                    )

        safe_writes.append((m.name, target, data, kind, incoming))
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
    to_reload: Dict[str, None] = {}
    for member, target, data, kind, incoming in safe_writes:
        if kind is not None:
            try:
                dropped, notes = _restore_credential(
                    kind, incoming, member, credentials_omitted, target
                )
            except _CredentialRefused as exc:
                out["skipped"].append(exc.skip)
                continue
            except _PreserveFailed:
                # Without a copy, overwriting would lose the only record of
                # what the file held.
                out["errors"].append(f"write {member}: unreadable file could not be kept")
                continue
            except OSError as exc:
                out["errors"].append(f"write {member}: {exc}")
                continue
            out["skipped"].extend(dropped)
            out["merged"].extend(notes)
            out["applied"] += 1
            continue
        try:
            _write_file(target, data, 0o644)
        except OSError as exc:
            out["errors"].append(f"write {member}: {exc}")
            continue
        out["applied"] += 1
        if member in _RELOAD_AFTER_RESTORE:
            to_reload[member] = None

    # Services that cache a restored file pick up the new content now. The
    # file is already on disk; a failure here means the running server keeps
    # the old state until it restarts.
    for member in to_reload:
        try:
            _RELOAD_AFTER_RESTORE[member]()
        except Exception as exc:  # report, never mistake for success
            logger.warning("backup: reload after restore failed for %s: %s", member, exc)
            out["errors"].append(f"reload {member}: {exc}")
            out["reload_failed"].append(member)
            out["restart_required"] = True

    out["ok"] = len(out["errors"]) == 0
    return out
