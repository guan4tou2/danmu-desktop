"""Ring-buffer of plugin stdout / stderr lines.

Powers ``/admin/plugins/console`` — the LIVE CONSOLE panel on the admin
Plugins page. The plugin manager wraps each hook invocation in a
``redirect_stdout`` / ``redirect_stderr`` block so any ``print()`` from
the plugin (or anything writing to ``sys.stdout``) is funneled into this
buffer tagged with the plugin name, instead of going to the server's
stdout.

Each entry::

    {
      "seq":    monotonically increasing int (>0)
      "ts":     epoch seconds (float)
      "level":  "INFO" | "WARN" | "ERROR" | "DEBUG"
      "plugin": str
      "msg":    str (single line, trailing newline stripped)
    }
"""

from __future__ import annotations

import io
import threading
from collections import deque
from time import time as _time
from typing import Any, Deque, Dict, List, Optional

_BUFFER_SIZE = 200

_buffer: Deque[Dict[str, Any]] = deque(maxlen=_BUFFER_SIZE)
_lock = threading.Lock()
_seq = 0


def record(plugin: str, level: str, msg: str) -> None:
    """Append a single console line to the ring buffer.

    Multi-line messages are split into one entry per line so the frontend
    grid lays out cleanly. Empty lines are skipped (plugins often print
    a trailing blank).
    """
    global _seq
    if not msg:
        return
    lines = [ln for ln in msg.splitlines() if ln.strip()]
    if not lines:
        return
    with _lock:
        for ln in lines:
            _seq += 1
            _buffer.append(
                {
                    "seq": _seq,
                    "ts": _time(),
                    "level": (level or "INFO").upper(),
                    "plugin": plugin or "—",
                    "msg": ln[:500],
                }
            )


def recent(since: int = 0, limit: int = 100) -> List[Dict[str, Any]]:
    """Events with seq > since, capped at *limit*. Newest first."""
    with _lock:
        events = [e for e in _buffer if e["seq"] > since]
    if len(events) > limit:
        events = events[-limit:]
    return list(reversed(events))


def clear() -> None:
    """Test helper — drop all buffered lines and reset seq."""
    global _seq
    with _lock:
        _buffer.clear()
        _seq = 0


# ─── stdout / stderr proxy ────────────────────────────────────────────────

class _PluginStream(io.TextIOBase):
    """A write-only text stream that funnels into ``record()``.

    Used as the target for ``contextlib.redirect_stdout`` while a plugin
    hook is running. Multi-write lines (i.e. plugins doing
    ``print("abc", end="")`` then ``print("def")``) are buffered until a
    newline is seen, so the ring buffer doesn't get fragmented entries.
    """

    def __init__(self, plugin: str, level: str = "INFO") -> None:
        super().__init__()
        self._plugin = plugin
        self._level = level
        self._pending = ""

    def writable(self) -> bool:  # pragma: no cover — io.TextIOBase contract
        return True

    def write(self, s: str) -> int:
        if not isinstance(s, str):
            s = str(s)
        self._pending += s
        # Flush complete lines as they arrive.
        if "\n" in self._pending:
            chunks = self._pending.split("\n")
            self._pending = chunks[-1]
            for line in chunks[:-1]:
                if line:
                    record(self._plugin, self._level, line)
        return len(s)

    def flush(self) -> None:
        if self._pending:
            record(self._plugin, self._level, self._pending)
            self._pending = ""
