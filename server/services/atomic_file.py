"""Atomic file replace with an exact mode, for files that may hold secrets.

The temp file is always newly created (``O_EXCL``) under a unique dotfile
name next to the target, and gets its final mode before any data is
written. A temp file left behind by an interrupted write is never reused,
so its permissions cannot leak into the new content. After the rename the
directory is synced too, so the new name survives a crash.
"""

from __future__ import annotations

import errno
import logging
import os
import secrets
import threading
from pathlib import Path
from typing import Union

logger = logging.getLogger(__name__)

# Filesystems without POSIX permissions (some network and Windows mounts)
# refuse chmod. os.open has already created the file with at most *mode*
# (the umask only removes bits), so carrying on never widens access.
_CHMOD_UNSUPPORTED = {errno.EPERM, errno.ENOSYS, errno.ENOTSUP, errno.EOPNOTSUPP}


def _fsync_dir(directory: Path) -> None:
    """Make a rename in *directory* durable. Best-effort: not every platform
    or filesystem can open or sync a directory, and the write itself has
    already succeeded."""
    flags = os.O_RDONLY | getattr(os, "O_DIRECTORY", 0)
    try:
        fd = os.open(directory, flags)
    except OSError:
        return
    try:
        os.fsync(fd)
    except OSError as exc:
        logger.debug("fsync of %s failed: %s", directory, exc)
    finally:
        os.close(fd)


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
        fchmod = getattr(os, "fchmod", None)
        if fchmod is not None:
            try:
                fchmod(fd, mode)
            except OSError as exc:
                if exc.errno not in _CHMOD_UNSUPPORTED:
                    raise
                logger.debug("chmod not supported for %s: %s", tmp, exc)
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
    _fsync_dir(target.parent)
