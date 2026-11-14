"""Atomic file replace, for files that may hold secrets.

The temp file is always newly created (``O_EXCL``) under a unique dotfile
name next to the target. A temp file left behind by an interrupted write is
never reused, so its permissions cannot leak into the new content.

``exact_mode`` controls whether the final file is forced to *mode* with
fchmod (for secret files) or just created under the umask like an ordinary
write. ``durable`` controls whether the data and the rename are fsync'd;
callers writing high-frequency, losable updates can turn it off, either with
the ``durable=False`` argument or, when they reach ``write_atomic`` through a
wrapper that cannot forward the flag, by running inside ``fsync_suppressed()``.
"""

from __future__ import annotations

import contextlib
import errno
import logging
import os
import secrets
import threading
from pathlib import Path
from typing import Iterator, Union

logger = logging.getLogger(__name__)

# Per-thread fsync suppression. The webhook delivery path reaches write_atomic
# through WebhookService._write_hooks, which tests may replace with a stub that
# only accepts ``(path, data, mode)``; it therefore cannot pass ``durable``
# along. Wrapping the losable status write in ``fsync_suppressed()`` turns the
# fsync off for that thread without changing the call. Thread-local because a
# gevent worker must not silence another thread's durable write.
_fsync_suppressed = threading.local()


@contextlib.contextmanager
def fsync_suppressed() -> Iterator[None]:
    """Skip the fsync of any write_atomic on this thread for the block.

    For high-frequency, losable writes (a webhook's last-delivery status) that
    go through a wrapper unable to forward ``durable=False``.
    """
    previous = getattr(_fsync_suppressed, "active", False)
    _fsync_suppressed.active = True
    try:
        yield
    finally:
        _fsync_suppressed.active = previous


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


def write_atomic(
    path: Union[str, Path],
    data: bytes,
    mode: int = 0o600,
    *,
    exact_mode: bool = True,
    durable: bool = True,
) -> None:
    """Write *data* to *path* via a fresh temp file, then rename over it.

    exact_mode:
        True (default) forces the file to *mode* with fchmod, for files that
        hold secrets. False lets the umask apply to *mode* like an ordinary
        write and never chmods — matching how non-secret state files behaved
        before they moved onto this helper.
    durable:
        True (default) fsyncs the data and the directory so the new content
        survives a crash. False — or running inside ``fsync_suppressed()`` —
        skips both fsyncs for high-frequency updates that can be lost without
        harm (a webhook's last-delivery status).
    """
    durable = durable and not getattr(_fsync_suppressed, "active", False)
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
        if exact_mode and fchmod is not None:
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
            if durable:
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
    if durable:
        _fsync_dir(target.parent)
