"""Factory reset helpers for operator-managed runtime state.

The reset is intentionally narrower than deleting ``server/runtime`` as a
directory. It removes runtime state files by extension and resets in-memory
services, while leaving admin credentials, static uploads, effects, plugins,
and arbitrary binary assets untouched.
"""

from __future__ import annotations

import logging
from pathlib import Path
from typing import Any, Dict, List

from server.managers import settings_store

logger = logging.getLogger(__name__)

_SERVER_ROOT = Path(__file__).resolve().parent.parent
_RUNTIME_DIR = _SERVER_ROOT / "runtime"
_STATE_SUFFIXES = {".json", ".jsonl", ".log", ".tmp"}


def _is_state_file(path: Path) -> bool:
    if path.name.startswith("."):
        return False
    if path.suffix in _STATE_SUFFIXES:
        return True
    return path.name.endswith(".log.1")


def _remove_runtime_state_files() -> List[str]:
    removed: List[str] = []
    if not _RUNTIME_DIR.exists():
        return removed

    for path in sorted(_RUNTIME_DIR.rglob("*")):
        if not path.is_file() or not _is_state_file(path):
            continue
        try:
            rel = path.relative_to(_RUNTIME_DIR).as_posix()
        except ValueError:
            continue
        try:
            path.unlink()
            removed.append(rel)
        except OSError as exc:
            logger.warning("factory reset could not remove %s: %s", path, exc)
    return removed


def _reset_in_memory_services() -> List[str]:
    reset: List[str] = []

    settings_store.reset()
    reset.append("settings")

    try:
        from . import history

        if history.danmu_history is not None:
            history.danmu_history.clear()
            reset.append("history")
    except Exception as exc:  # pragma: no cover - defensive best effort
        logger.warning("factory reset history reset failed: %s", exc)

    try:
        from .filter_engine import filter_engine

        with filter_engine._lock:  # noqa: SLF001 - intentional internal reset
            filter_engine._rules = []  # noqa: SLF001
            filter_engine._regex_cache.clear()  # noqa: SLF001
            filter_engine._rate_tracker.clear()  # noqa: SLF001
        reset.append("filters")
    except Exception as exc:  # pragma: no cover
        logger.warning("factory reset filters reset failed: %s", exc)

    for module_name, func_name, label in (
        ("broadcast", "reset_for_tests", "broadcast"),
        ("session_service", "reset_for_tests", "session"),
        ("onscreen_config", "_reset_for_tests", "onscreen_limits"),
        ("ws_auth", "_reset_for_tests", "ws_auth"),
        ("fire_token", "reset_for_tests", "fire_token"),
        ("security_settings", "reset_for_tests", "security_settings"),
        ("live_feed_buffer", "reset", "live_feed"),
        ("fingerprint_tracker", "reset", "fingerprints"),
        ("plugin_console", "clear", "plugin_console"),
        ("filter_events", "clear", "filter_events"),
        ("fire_sources", "clear", "fire_sources"),
    ):
        try:
            module = __import__(f"server.services.{module_name}", fromlist=[func_name])
            getattr(module, func_name)()
            reset.append(label)
        except Exception as exc:  # pragma: no cover
            logger.warning("factory reset %s reset failed: %s", label, exc)

    try:
        from . import audit_log

        with audit_log._lock:  # noqa: SLF001 - clear in-memory ring only
            audit_log._ring.clear()  # noqa: SLF001
            audit_log._loaded = True  # noqa: SLF001
            audit_log._write_failure_logged = False  # noqa: SLF001
        reset.append("audit")
    except Exception as exc:  # pragma: no cover
        logger.warning("factory reset audit reset failed: %s", exc)

    try:
        from . import widgets

        widgets.clear_all()
        reset.append("widgets")
    except Exception as exc:  # pragma: no cover
        logger.warning("factory reset widgets reset failed: %s", exc)

    try:
        from . import ws_queue

        ws_queue.dequeue_all()
        reset.append("ws_queue")
    except Exception as exc:  # pragma: no cover
        logger.warning("factory reset ws_queue reset failed: %s", exc)

    try:
        from .poll import poll_service

        poll_service.reset()
        reset.append("poll")
    except Exception as exc:  # pragma: no cover
        logger.warning("factory reset poll reset failed: %s", exc)

    try:
        from .scheduler import scheduler_service

        scheduler_service.shutdown()
        reset.append("scheduler")
    except Exception as exc:  # pragma: no cover
        logger.warning("factory reset scheduler reset failed: %s", exc)

    try:
        from .mod_queue import mod_queue

        mod_queue.clear()
        reset.append("mod_queue")
    except Exception as exc:  # pragma: no cover
        logger.warning("factory reset mod_queue reset failed: %s", exc)

    try:
        from . import audience

        audience.reset_for_test()
        reset.append("audience")
    except Exception as exc:  # pragma: no cover
        logger.warning("factory reset audience reset failed: %s", exc)

    try:
        from . import webhook

        webhook.WebhookService._instance = None  # noqa: SLF001
        reset.append("webhooks")
    except Exception as exc:  # pragma: no cover
        logger.warning("factory reset webhooks reset failed: %s", exc)

    return reset


def reset_runtime_state(*, confirm: str) -> Dict[str, Any]:
    if confirm != "reset":
        raise ValueError("confirmation must be reset")

    removed = _remove_runtime_state_files()
    services_reset = _reset_in_memory_services()
    return {
        "ok": True,
        "removed": removed,
        "services_reset": services_reset,
    }
