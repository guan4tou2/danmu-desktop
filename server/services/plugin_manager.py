"""
Danmu plugin manager.

Provides a hook-based plugin system for danmu-desktop server.
Plugins are Python files in the plugins/ directory that subclass DanmuPlugin.

Hot-reload: every SCAN_INTERVAL seconds the plugins directory is re-scanned;
files with changed mtime are reloaded automatically.

Enabled/disabled state is persisted to plugins_state.json alongside the
plugins directory.
"""

import importlib
import importlib.util
import json
import logging
import threading
import time
from pathlib import Path
from typing import Any, Dict, List, Optional

logger = logging.getLogger(__name__)

_SERVER_DIR = Path(__file__).parent.parent
# Bundled example plugins shipped with the server image. Read-only intent —
# upgrades should surface new example plugins without user action.
_BUNDLED_PLUGINS_DIR = _SERVER_DIR / "plugins"
# User-added plugins. Gitignored on the host, bind-mountable in Docker so
# custom plugins survive image upgrades.
_USER_PLUGINS_DIR = _SERVER_DIR / "user_plugins"
# Enabled/disabled state lives in the persisted runtime/ dir so it survives
# container recreate. Legacy path (plugins/plugins_state.json) is migrated
# on first load — see _load_state().
_STATE_FILE = _SERVER_DIR / "runtime" / "plugins_state.json"
_LEGACY_STATE_FILE = _BUNDLED_PLUGINS_DIR / "plugins_state.json"
_SCAN_INTERVAL = 5.0
_HOOK_TIMEOUT = 3.0

_HOOK_NAMES = frozenset(
    {
        "on_fire",
        "on_connect",
        "on_disconnect",
        "on_poll_vote",
        "on_startup",
        "on_shutdown",
    }
)


# ---------------------------------------------------------------------------
# Base class & sentinel exception
# ---------------------------------------------------------------------------


class StopPropagation(Exception):
    """Raise inside a plugin hook to stop the event from reaching later plugins."""


class DanmuPlugin:
    """Base class that all danmu plugins must subclass."""

    name: str = "unnamed"
    version: str = "1.0.0"
    description: str = ""
    priority: int = 100  # lower = executes first

    def on_fire(self, context: dict) -> Optional[dict]:
        """Called when a danmu is fired. Return modified context or None."""
        return context

    def on_connect(self, client_info: dict) -> None:
        """Called when a client connects."""

    def on_disconnect(self, client_info: dict) -> None:
        """Called when a client disconnects."""

    def on_poll_vote(self, vote_info: dict) -> None:
        """Called when a poll vote is received."""

    def on_startup(self) -> None:
        """Called when the server starts up."""

    def on_shutdown(self) -> None:
        """Called when the server shuts down."""


# ---------------------------------------------------------------------------
# Internal holder
# ---------------------------------------------------------------------------


class _PluginEntry:
    """Wraps a loaded plugin instance with metadata."""

    __slots__ = ("instance", "filepath", "mtime", "enabled")

    def __init__(
        self,
        instance: DanmuPlugin,
        filepath: str,
        mtime: float,
        enabled: bool = True,
    ):
        self.instance = instance
        self.filepath = filepath
        self.mtime = mtime
        self.enabled = enabled


# ---------------------------------------------------------------------------
# PluginManager (singleton)
# ---------------------------------------------------------------------------


class PluginManager:
    """Thread-safe plugin manager with hot-reload support."""

    def __init__(self) -> None:
        self._lock = threading.RLock()
        self._plugins: Dict[str, _PluginEntry] = {}  # name -> entry
        self._mtime_map: Dict[str, float] = {}  # filepath -> mtime
        self._path_to_name: Dict[str, str] = {}  # filepath -> plugin name
        self._last_scan: float = 0.0
        self._state: Dict[str, bool] = {}  # name -> enabled (persisted)
        self._scan_lock = threading.Lock()
        self._loaded = False

    # ---- persistence -------------------------------------------------------

    def _load_state(self) -> Dict[str, bool]:
        """Load enabled/disabled state from disk.

        One-time migration: if the legacy state file (next to bundled plugins)
        exists and the new runtime location does not, copy the legacy content
        so users upgrading from v4.6.2 or earlier don't lose toggles.
        """
        try:
            if not _STATE_FILE.exists() and _LEGACY_STATE_FILE.exists():
                try:
                    _STATE_FILE.parent.mkdir(parents=True, exist_ok=True)
                    _STATE_FILE.write_bytes(_LEGACY_STATE_FILE.read_bytes())
                    logger.info(
                        "[PluginManager] Migrated legacy state %s -> %s",
                        _LEGACY_STATE_FILE,
                        _STATE_FILE,
                    )
                except Exception as exc:
                    logger.warning("[PluginManager] Legacy state migration failed: %s", exc)

            if _STATE_FILE.exists():
                with open(_STATE_FILE, encoding="utf-8") as f:
                    data = json.load(f)
                if isinstance(data, dict):
                    return {k: bool(v) for k, v in data.items()}
        except Exception as exc:
            logger.warning("[PluginManager] Failed to load state file: %s", exc)
        return {}

    def _save_state(self) -> None:
        """Persist enabled/disabled state to disk. Caller must hold _lock."""
        state = {name: entry.enabled for name, entry in self._plugins.items()}
        try:
            _STATE_FILE.parent.mkdir(parents=True, exist_ok=True)
            tmp = _STATE_FILE.with_suffix(".tmp")
            with open(tmp, "w", encoding="utf-8") as f:
                json.dump(state, f, indent=2)
            tmp.replace(_STATE_FILE)
        except Exception as exc:
            logger.error("[PluginManager] Failed to save state: %s", exc)

    # ---- loading -----------------------------------------------------------

    def _load_plugin_from_file(self, path: Path) -> Optional[DanmuPlugin]:
        """Import a single .py file and return the first DanmuPlugin subclass instance."""
        module_name = f"_danmu_plugin_{path.stem}_{id(path)}"
        try:
            spec = importlib.util.spec_from_file_location(module_name, str(path))
            if spec is None or spec.loader is None:
                logger.warning("[PluginManager] Cannot create spec for %s", path)
                return None
            module = importlib.util.module_from_spec(spec)
            spec.loader.exec_module(module)
        except Exception as exc:
            logger.error("[PluginManager] Failed to import %s: %s", path.name, exc)
            return None

        # Find first concrete DanmuPlugin subclass defined in this module.
        for attr_name in dir(module):
            obj = getattr(module, attr_name, None)
            if (
                isinstance(obj, type)
                and issubclass(obj, DanmuPlugin)
                and obj is not DanmuPlugin
                and obj.__module__ == module_name
            ):
                try:
                    return obj()
                except Exception as exc:
                    logger.error(
                        "[PluginManager] Failed to instantiate %s from %s: %s",
                        obj.__name__,
                        path.name,
                        exc,
                    )
                    return None
        return None

    def _scan_dirs(self, explicit_dir: Optional[str] = None) -> List[Path]:
        """Return the list of directories to scan for plugin .py files.

        If *explicit_dir* is passed (tests), only that directory is scanned.
        Otherwise scan bundled + user dirs in that order; a plugin name
        appearing in both prefers the user version (loaded later overwrites).
        """
        if explicit_dir:
            return [Path(explicit_dir)]
        return [_BUNDLED_PLUGINS_DIR, _USER_PLUGINS_DIR]

    def load_all(self, plugins_dir: Optional[str] = None) -> None:
        """Scan bundled + user plugin dirs for .py files and load them."""
        scan_dirs = self._scan_dirs(plugins_dir)
        for d in scan_dirs:
            d.mkdir(parents=True, exist_ok=True)
        self._state = self._load_state()

        with self._lock:
            self._plugins.clear()
            self._mtime_map.clear()
            self._path_to_name.clear()

        for scan_dir in scan_dirs:
            for py_file in sorted(scan_dir.glob("*.py")):
                if py_file.name.startswith("_"):
                    continue
                instance = self._load_plugin_from_file(py_file)
                if instance is None:
                    continue
                name = instance.name
                mtime = py_file.stat().st_mtime
                enabled = self._state.get(name, True)
                entry = _PluginEntry(instance, str(py_file), mtime, enabled)
                with self._lock:
                    self._plugins[name] = entry
                    self._mtime_map[str(py_file)] = mtime
                    self._path_to_name[str(py_file)] = name
                logger.info(
                    "[PluginManager] Loaded plugin: %s v%s (%s) from %s",
                    name,
                    instance.version,
                    "enabled" if enabled else "disabled",
                    scan_dir.name,
                )

        with self._lock:
            self._last_scan = time.monotonic()
            self._loaded = True
            self._save_state()

    def reload(self) -> None:
        """Unload all plugins and re-scan the directory."""
        with self._lock:
            old_plugins = dict(self._plugins)

        # Call on_shutdown for each currently loaded plugin.
        for entry in old_plugins.values():
            if entry.enabled:
                try:
                    entry.instance.on_shutdown()
                except Exception:
                    pass

        self.load_all()

        # Call on_startup for each newly loaded plugin.
        with self._lock:
            new_plugins = list(self._plugins.values())
        for entry in new_plugins:
            if entry.enabled:
                try:
                    entry.instance.on_startup()
                except Exception as exc:
                    logger.error(
                        "[PluginManager] on_startup failed for %s: %s",
                        entry.instance.name,
                        exc,
                    )

    # ---- hot-reload scan ---------------------------------------------------

    def _maybe_scan(self) -> None:
        """Trigger a hot-reload scan if enough time has elapsed."""
        with self._lock:
            if not self._loaded:
                return
            elapsed = time.monotonic() - self._last_scan
        if elapsed < _SCAN_INTERVAL:
            return
        if not self._scan_lock.acquire(blocking=False):
            return
        try:
            self._hot_scan()
        finally:
            self._scan_lock.release()

    def _hot_scan(self) -> None:
        """Re-scan bundled + user plugin dirs, reload changed, remove deleted."""
        # Walk bundled first, user second — later entries override earlier
        # ones when building the shadow map (user > bundled for same name).
        current_files: Dict[str, Path] = {}
        for scan_dir in (_BUNDLED_PLUGINS_DIR, _USER_PLUGINS_DIR):
            if not scan_dir.is_dir():
                continue
            for p in sorted(scan_dir.glob("*.py")):
                if p.name.startswith("_"):
                    continue
                current_files[str(p)] = p

        with self._lock:
            prev_mtime_map = dict(self._mtime_map)

        changed = False

        # Check for new or modified files.
        for fpath, p in current_files.items():
            try:
                mtime = p.stat().st_mtime
            except OSError:
                continue

            if prev_mtime_map.get(fpath) == mtime:
                continue

            # File is new or modified -- reload it.
            instance = self._load_plugin_from_file(p)
            if instance is None:
                continue

            name = instance.name
            is_from_user_dir = str(p).startswith(str(_USER_PLUGINS_DIR))
            with self._lock:
                old_entry = self._plugins.get(name)
                # Shadow priority: a reloaded bundled file must NOT overwrite
                # the active registry entry if that entry is backed by the
                # user version. We still record new mtime so we don't re-import
                # every scan.
                if (
                    old_entry is not None
                    and not is_from_user_dir
                    and str(Path(old_entry.filepath)).startswith(str(_USER_PLUGINS_DIR))
                ):
                    self._mtime_map[fpath] = mtime
                    self._path_to_name[fpath] = name
                    logger.info(
                        "[PluginManager] Re-scanned bundled %s but user override is "
                        "active — keeping user version",
                        p.name,
                    )
                    continue
                enabled = old_entry.enabled if old_entry else self._state.get(name, True)
                entry = _PluginEntry(instance, fpath, mtime, enabled)
                self._plugins[name] = entry
                self._mtime_map[fpath] = mtime
                self._path_to_name[fpath] = name
            changed = True
            logger.info("[PluginManager] Hot-reloaded plugin: %s from %s", name, p.name)

        # Check for deleted files.
        for fpath in set(prev_mtime_map) - set(current_files):
            with self._lock:
                old_name = self._path_to_name.pop(fpath, None)
                self._mtime_map.pop(fpath, None)
                if not old_name:
                    continue
                current_entry = self._plugins.get(old_name)
                # Only drop from registry if the deleted file was THE active
                # source for this plugin name. A deleted bundled file when the
                # user version is active should be a silent delete.
                if current_entry is None or current_entry.filepath != fpath:
                    logger.info(
                        "[PluginManager] Removed shadowed file %s (plugin %s still "
                        "served by %s)",
                        Path(fpath).name,
                        old_name,
                        current_entry.filepath if current_entry else "<none>",
                    )
                    continue

                self._plugins.pop(old_name, None)
                changed = True
                logger.info("[PluginManager] Removed plugin: %s", old_name)

                # Fall back to the bundled version if a user plugin was removed
                # and a same-named bundled file exists (or vice versa — rare).
                fallback_path = None
                for alt_dir in (_USER_PLUGINS_DIR, _BUNDLED_PLUGINS_DIR):
                    candidate = alt_dir / Path(fpath).name
                    if str(candidate) != fpath and candidate.is_file():
                        fallback_path = candidate
                        break
                if fallback_path is None:
                    continue
            # Load fallback OUTSIDE the lock (_load_plugin_from_file does I/O).
            fallback_instance = self._load_plugin_from_file(fallback_path)
            if fallback_instance is None:
                continue
            with self._lock:
                try:
                    fb_mtime = fallback_path.stat().st_mtime
                except OSError:
                    continue
                enabled = self._state.get(fallback_instance.name, True)
                fb_entry = _PluginEntry(fallback_instance, str(fallback_path), fb_mtime, enabled)
                self._plugins[fallback_instance.name] = fb_entry
                self._mtime_map[str(fallback_path)] = fb_mtime
                self._path_to_name[str(fallback_path)] = fallback_instance.name
                logger.info(
                    "[PluginManager] Fell back to %s for plugin %s",
                    fallback_path,
                    fallback_instance.name,
                )

        with self._lock:
            self._last_scan = time.monotonic()
            if changed:
                self._save_state()

    # ---- enable / disable --------------------------------------------------

    def enable(self, name: str) -> bool:
        """Enable a plugin by name. Returns True if found."""
        with self._lock:
            entry = self._plugins.get(name)
            if entry is None:
                return False
            entry.enabled = True
            self._save_state()
            return True

    def disable(self, name: str) -> bool:
        """Disable a plugin by name. Returns True if found."""
        with self._lock:
            entry = self._plugins.get(name)
            if entry is None:
                return False
            entry.enabled = False
            self._save_state()
            return True

    # ---- introspection -----------------------------------------------------

    def list_plugins(self) -> List[Dict[str, Any]]:
        """Return a list of dicts describing each loaded plugin."""
        self._maybe_scan()
        with self._lock:
            result = []
            for entry in self._plugins.values():
                inst = entry.instance
                result.append(
                    {
                        "name": inst.name,
                        "version": inst.version,
                        "description": inst.description,
                        "enabled": entry.enabled,
                        "priority": inst.priority,
                    }
                )
        return sorted(result, key=lambda p: (p["priority"], p["name"]))

    def get_plugin(self, name: str) -> Optional[Dict[str, Any]]:
        """Return info dict for a single plugin, or None."""
        self._maybe_scan()
        with self._lock:
            entry = self._plugins.get(name)
            if entry is None:
                return None
            inst = entry.instance
            return {
                "name": inst.name,
                "version": inst.version,
                "description": inst.description,
                "enabled": entry.enabled,
                "priority": inst.priority,
            }

    # ---- event emission ----------------------------------------------------

    def emit(self, hook_name: str, context: Optional[dict] = None) -> Optional[dict]:
        """
        Call *hook_name* on every enabled plugin, in priority order.

        For hooks that accept and return a context dict (e.g. on_fire), the
        context is threaded through the chain -- each plugin receives the
        output of the previous one.

        Returns the (possibly modified) context, or None if StopPropagation
        was raised.
        """
        if hook_name not in _HOOK_NAMES:
            logger.warning("[PluginManager] Unknown hook: %s", hook_name)
            return context

        self._maybe_scan()

        with self._lock:
            entries = [e for e in self._plugins.values() if e.enabled]
        entries.sort(key=lambda e: (e.instance.priority, e.instance.name))

        for entry in entries:
            method = getattr(entry.instance, hook_name, None)
            if method is None:
                continue

            result_holder: List[Any] = []
            error_holder: List[BaseException] = []

            def _run(m=method, ctx=context):
                try:
                    if hook_name == "on_fire":
                        result_holder.append(m(ctx))
                    elif hook_name in ("on_connect", "on_disconnect", "on_poll_vote"):
                        m(ctx or {})
                    else:
                        m()
                except StopPropagation:
                    error_holder.append(StopPropagation())
                except Exception as exc:
                    error_holder.append(exc)

            t = threading.Thread(target=_run, daemon=True)
            t.start()
            t.join(timeout=_HOOK_TIMEOUT)

            if t.is_alive():
                logger.error(
                    "[PluginManager] Plugin %s timed out on %s (%.1fs)",
                    entry.instance.name,
                    hook_name,
                    _HOOK_TIMEOUT,
                )
                continue

            if error_holder:
                err = error_holder[0]
                if isinstance(err, StopPropagation):
                    logger.info(
                        "[PluginManager] StopPropagation raised by %s on %s",
                        entry.instance.name,
                        hook_name,
                    )
                    return None
                logger.error(
                    "[PluginManager] Plugin %s raised %s on %s: %s",
                    entry.instance.name,
                    type(err).__name__,
                    hook_name,
                    err,
                )
                continue

            if hook_name == "on_fire" and result_holder:
                returned = result_holder[0]
                if returned is not None:
                    context = returned

        return context


# ---------------------------------------------------------------------------
# Module-level singleton
# ---------------------------------------------------------------------------

plugin_manager = PluginManager()
