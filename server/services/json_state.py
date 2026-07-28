"""JSON-backed state container — base for admin-mutable runtime settings.

Motivation: `ws_auth.py`, `security_settings.py`, `ratelimit_ip.py` all
declared the same 60-80 lines: `_STATE_FILE = runtime/*.json`, an RLock,
an atomic tmp-then-rename `_atomic_write`, a `_load_from_disk` that
falls back to defaults on parse errors, a `get_state()` returning a
deepcopy, a `set_state()` that merges + validates + persists, and a
`_reset_for_tests()` for pytest isolation. Every field was per-module
domain data; every mechanism was identical.

This class collapses those mechanisms into one place. Each caller keeps
its own domain-specific `default` factory and `normalize` validator;
mechanism (RLock, atomic write, deepcopy on read, one-shot log on
unwritable disk, pid+tid tmp suffix, optional 0o600 chmod) lives here.

Usage:

    from .json_state import JsonState

    _DEFAULT = {"allowlist": [], "denylist": []}

    def _normalize(raw):
        # raise ValueError on bad shape; return canonical dict
        ...

    _state = JsonState(
        "ratelimit_ip_rules.json", default=lambda: dict(_DEFAULT), normalize=_normalize
    )

    get_state = _state.get

    def set_state(patch):
        return _state.update(patch)

    def _reset_for_tests():
        _state.reset_for_tests()

Modules that hold bearer credentials (like ws_auth's token) pass
``secure=True`` to force 0o600 chmod on the persisted file.

Precedence: allow > deny for classifiers is a per-module concern; this
class doesn't know about it. It only handles the container.
"""

from __future__ import annotations

import copy
import errno
import json
import logging
import os
import threading
from pathlib import Path
from typing import Any, Callable, Dict, Optional

logger = logging.getLogger(__name__)

_RUNTIME_DIR = Path(__file__).resolve().parent.parent / "runtime"


class JsonState:
    """Thread-safe JSON-backed state container with atomic writes.

    Parameters
    ----------
    filename:
        Name of the file under ``server/runtime/`` where state is
        persisted (e.g. ``"ws_auth.json"``). Pass a full path only via
        ``reset_for_tests`` — the runtime dir convention is enforced at
        construction time so consumers don't each re-derive it.
    default:
        Zero-arg factory returning a fresh default state dict. Called
        when the file is missing or unparseable. Must return a NEW dict
        each call (don't share references) — the container mutates the
        result freely.
    normalize:
        Callable ``(raw) -> dict`` that validates + coerces raw JSON (or
        a caller-supplied patch) into a canonical shape. Raise
        ``ValueError`` on invalid input. Called on every load and every
        update.
    secure:
        If True, the on-disk file is chmod'd to 0o600 (owner-only read).
        Enable for files that contain bearer tokens or other secrets.
        Silently no-ops on filesystems where chmod isn't supported
        (Windows, some network mounts).
    eager_persist_default:
        If True, the default state is persisted to disk immediately when
        the file is missing or unparseable on first load. Enable for
        modules whose ``default`` factory generates non-deterministic
        values that must stay stable across restarts (e.g. ws_auth's
        random token seed — regenerating on every process start would
        force-disconnect every live client).
    """

    def __init__(
        self,
        filename: str,
        default: Callable[[], Dict[str, Any]],
        normalize: Callable[[Any], Dict[str, Any]],
        *,
        secure: bool = False,
        eager_persist_default: bool = False,
    ):
        self._path: Path = _RUNTIME_DIR / filename
        self._default = default
        self._normalize = normalize
        self._secure = secure
        self._eager_persist_default = eager_persist_default
        self._lock = threading.RLock()
        self._cache: Optional[Dict[str, Any]] = None
        self._write_failure_logged = False

    # ── public API ──────────────────────────────────────────────────

    @property
    def path(self) -> Path:
        """Current on-disk location. Changes across `reset_for_tests`."""
        return self._path

    @property
    def lock(self) -> threading.RLock:
        """Underlying RLock — hold this to wrap atomic read-then-update patterns.

        Example: a token-rotation flow needs to read current `require_token`,
        keep it, and write a fresh token, without another writer racing in
        between. Nested `with state.lock` + `state.update(...)` is safe
        because the lock is reentrant.
        """
        return self._lock

    def get(self) -> Dict[str, Any]:
        """Return a deepcopy of current state. Load on first call."""
        with self._lock:
            if self._cache is None:
                self._cache = self._load()
            return copy.deepcopy(self._cache)

    def update(self, patch: Dict[str, Any]) -> Dict[str, Any]:
        """Merge patch into current state, normalize, persist. Return new state.

        The merge is shallow (patch keys overwrite top-level keys).
        Callers wanting deeper merges should read `get()`, build the
        full desired dict, and pass it in.

        Raises ``ValueError`` (via normalize) on invalid input.
        Disk-write failures are logged once and swallowed; in-memory
        cache is always updated so admin UI stays responsive.
        """
        with self._lock:
            current = self.get()  # deepcopy — safe to mutate
            merged = {**current, **patch}
            normalized = self._normalize(merged)
            self._cache = normalized
            try:
                self._atomic_write(normalized)
            except OSError as exc:
                self._log_write_failure_once(exc)
            return copy.deepcopy(normalized)

    def reset_for_tests(self, path: Optional[Path] = None) -> None:
        """Drop cache and optionally redirect to a new on-disk path.

        Called by pytest autouse fixtures to isolate per-test state.
        Passing ``path`` replaces the file location; passing ``None``
        keeps the current location and only clears the cache.
        """
        with self._lock:
            if path is not None:
                self._path = path
            self._cache = None
            self._write_failure_logged = False

    # ── internals ───────────────────────────────────────────────────

    def _load(self) -> Dict[str, Any]:
        used_default = False
        if not self._path.exists():
            state = self._default()
            used_default = True
        else:
            try:
                raw = json.loads(self._path.read_text(encoding="utf-8"))
            except Exception as exc:
                logger.warning(
                    "json_state: failed to read %s: %s; using defaults",
                    self._path,
                    exc,
                )
                state = self._default()
                used_default = True
            else:
                try:
                    state = self._normalize(raw)
                except ValueError as exc:
                    logger.warning(
                        "json_state: ignoring invalid state file %s: %s",
                        self._path,
                        exc,
                    )
                    state = self._default()
                    used_default = True

        if used_default and self._eager_persist_default:
            try:
                self._atomic_write(state)
                logger.info("json_state: seeded %s", self._path)
            except OSError as exc:
                self._log_write_failure_once(exc)
        return state

    def _atomic_write(self, state: Dict[str, Any]) -> None:
        """tmp + rename atomic write. pid+tid suffix avoids multi-worker races."""
        self._path.parent.mkdir(parents=True, exist_ok=True)
        tmp = self._path.with_suffix(f".tmp.{os.getpid()}.{threading.get_ident()}")
        mode = 0o600 if self._secure else 0o644
        flags = os.O_WRONLY | os.O_CREAT | os.O_TRUNC
        fd = os.open(tmp, flags, mode)
        try:
            with os.fdopen(fd, "w", encoding="utf-8") as f:
                json.dump(state, f, ensure_ascii=False, indent=2)
            if self._secure:
                try:
                    os.chmod(tmp, 0o600)
                except OSError as exc:
                    # Windows / unusual FS — best-effort, log once.
                    if exc.errno not in (errno.ENOSYS, errno.EPERM):
                        raise
                    logger.warning("chmod 0o600 not supported on %s: %s", tmp, exc)
            tmp.replace(self._path)
        except Exception:
            try:
                tmp.unlink()
            except OSError:
                pass
            raise

    def _log_write_failure_once(self, exc: Exception) -> None:
        """One-shot warn on unwritable runtime dir; subsequent failures go DEBUG.

        Common cause: bind-mount owned by wrong UID (e.g. Oracle Cloud
        `ubuntu`=1001 vs container `appuser`=1000). Service degrades to
        in-memory-only; admin changes work for the current process but
        don't survive restart.
        """
        if self._write_failure_logged:
            logger.debug("json_state persist still failing (%s): %s", self._path, exc)
            return
        self._write_failure_logged = True
        logger.warning(
            "Cannot persist %s (%s: %s). State will live in memory for this "
            "process only — admin changes won't survive a container restart. "
            "Common cause: host bind-mount owned by a different UID than the "
            "container's `appuser` (1000). Fix: `sudo chown -R 1000:1000 "
            "server/runtime` on the host, then recreate the container.",
            self._path,
            type(exc).__name__,
            exc,
        )
