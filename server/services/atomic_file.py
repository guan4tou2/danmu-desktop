"""Atomic file replace with an exact mode, for files that may hold secrets.

The temp file is always newly created (``O_EXCL``) under a unique dotfile
name next to the target, and gets its final mode before any data is
written. A temp file left behind by an interrupted write is never reused,
so its permissions cannot leak into the new content.
"""

from __future__ import annotations

import os
import secrets
import threading
from pathlib import Path
from typing import Union


def write_atomic(path: Union[str, Path], data: bytes, mode: int = 0o600) -> None:
    """Write *data* to *path* via a fresh temp file, then rename over it."""
    target = Path(path)
    target.parent.mkdir(parents=True, exist_ok=True)
    tmp = target.with_name(
        f".{target.name}.{os.getpid()}-{threading.get_ident()}-{secrets.token_hex(4)}.tmp"
    )
    fd = os.open(tmp, os.O_WRONLY | os.O_CREAT | os.O_EXCL, mode)
    try:
        # Exact mode before the content arrives (os.open's mode is masked
        # by the umask; fchmod is not).
        os.fchmod(fd, mode)
        with os.fdopen(fd, "wb") as f:
            fd = -1
            f.write(data)
            f.flush()
            os.fsync(f.fileno())
        os.replace(tmp, target)
    except BaseException:
        if fd != -1:
            os.close(fd)
        try:
            os.unlink(tmp)
        except OSError:
            pass
        raise
