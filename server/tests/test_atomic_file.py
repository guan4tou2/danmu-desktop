"""atomic_file.write_atomic: fresh owner-only temp file, exact final mode."""

import os
import stat

import pytest

from server.services import atomic_file
from server.services import webhook as webhook_mod


def _mode(path):
    return stat.S_IMODE(os.stat(path).st_mode)


def _temps(directory):
    return [p for p in directory.iterdir() if p.name.endswith(".tmp")]


def test_replaces_a_loose_file_with_an_owner_only_one(tmp_path):
    target = tmp_path / "secret.json"
    target.write_text("old")
    target.chmod(0o644)
    atomic_file.write_atomic(target, b"new", 0o600)
    assert target.read_bytes() == b"new"
    assert _mode(target) == 0o600
    assert _temps(tmp_path) == []


def test_final_mode_is_exact_regardless_of_umask(tmp_path):
    old = os.umask(0o077)
    try:
        atomic_file.write_atomic(tmp_path / "plain.json", b"{}", 0o644)
    finally:
        os.umask(old)
    assert _mode(tmp_path / "plain.json") == 0o644


def test_never_reuses_an_existing_temp_file(tmp_path, monkeypatch):
    monkeypatch.setattr(atomic_file.secrets, "token_hex", lambda n: "fixed")
    target = tmp_path / "secret.json"
    stale = target.with_name(
        f".secret.json.{os.getpid()}-{atomic_file.threading.get_ident()}-fixed.tmp"
    )
    stale.write_text("left over")
    stale.chmod(0o644)
    with pytest.raises(FileExistsError):
        atomic_file.write_atomic(target, b"secret", 0o600)
    assert stale.read_text() == "left over"
    assert not target.exists()


def test_failed_replace_cleans_up_and_keeps_the_old_file(tmp_path, monkeypatch):
    target = tmp_path / "secret.json"
    target.write_text("old")

    def boom(src, dst):
        raise OSError("disk full")

    monkeypatch.setattr(atomic_file.os, "replace", boom)
    with pytest.raises(OSError):
        atomic_file.write_atomic(target, b"new", 0o600)
    assert target.read_text() == "old"
    assert _temps(tmp_path) == []


def test_webhook_store_ignores_a_leftover_temp_file(tmp_path):
    store = webhook_mod._WEBHOOKS_FILE
    leftover = store.with_suffix(".tmp")  # the name the old writer reused
    leftover.write_text("[]")
    leftover.chmod(0o644)
    svc = webhook_mod.WebhookService()
    svc.register({"url": "http://127.0.0.1:9/h", "events": ["on_danmu"], "secret": "s"})
    assert _mode(store) == 0o600
    assert "s" in store.read_text()
    assert leftover.read_text() == "[]"


def test_directory_is_synced_after_the_rename(tmp_path, monkeypatch):
    synced = []
    real_fsync = atomic_file.os.fsync

    def record(fd):
        synced.append(stat.S_ISDIR(os.fstat(fd).st_mode))
        return real_fsync(fd)

    monkeypatch.setattr(atomic_file.os, "fsync", record)
    atomic_file.write_atomic(tmp_path / "secret.json", b"x", 0o600)
    # The file's data first, then the directory holding the new name.
    assert synced == [False, True]


def test_a_directory_sync_failure_does_not_fail_the_write(tmp_path, monkeypatch):
    real_fsync = atomic_file.os.fsync

    def fail_for_directories(fd):
        if stat.S_ISDIR(os.fstat(fd).st_mode):
            raise OSError("fsync not supported for directories")
        return real_fsync(fd)

    monkeypatch.setattr(atomic_file.os, "fsync", fail_for_directories)
    atomic_file.write_atomic(tmp_path / "secret.json", b"x", 0o600)
    assert (tmp_path / "secret.json").read_bytes() == b"x"


def test_durable_false_skips_both_fsyncs(tmp_path, monkeypatch):
    fsyncs = []
    monkeypatch.setattr(atomic_file.os, "fsync", lambda fd: fsyncs.append(fd))
    atomic_file.write_atomic(tmp_path / "x.json", b"x", 0o600, durable=False)
    assert fsyncs == []  # neither the data nor the directory is synced
    assert (tmp_path / "x.json").read_bytes() == b"x"
    assert _mode(tmp_path / "x.json") == 0o600  # exact mode still applies


def test_fsync_suppressed_context_skips_fsync_without_the_argument(tmp_path, monkeypatch):
    fsyncs = []
    monkeypatch.setattr(atomic_file.os, "fsync", lambda fd: fsyncs.append(fd))
    with atomic_file.fsync_suppressed():
        atomic_file.write_atomic(tmp_path / "x.json", b"x", 0o600)  # plain 3-arg call
    assert fsyncs == []
    # Outside the block the default (durable) behaviour is restored.
    atomic_file.write_atomic(tmp_path / "y.json", b"y", 0o600)
    assert fsyncs  # fsync happened for the durable write


def test_exact_mode_false_lets_the_umask_apply(tmp_path):
    old = os.umask(0o022)
    try:
        atomic_file.write_atomic(tmp_path / "plain.json", b"{}", 0o644, exact_mode=False)
    finally:
        os.umask(old)
    assert _mode(tmp_path / "plain.json") == 0o644


def test_exact_mode_false_never_calls_fchmod(tmp_path, monkeypatch):
    def boom(fd, mode):
        raise AssertionError("fchmod must not be called when exact_mode is False")

    monkeypatch.setattr(atomic_file.os, "fchmod", boom)
    atomic_file.write_atomic(tmp_path / "plain.json", b"{}", 0o644, exact_mode=False)
    assert (tmp_path / "plain.json").read_bytes() == b"{}"


def test_filesystems_without_chmod_still_get_at_most_the_open_mode(tmp_path, monkeypatch):
    import errno

    def unsupported(fd, mode):
        raise OSError(errno.EPERM, "Operation not permitted")

    monkeypatch.setattr(atomic_file.os, "fchmod", unsupported)
    old = os.umask(0o022)
    try:
        atomic_file.write_atomic(tmp_path / "secret.json", b"x", 0o600)
    finally:
        os.umask(old)
    assert _mode(tmp_path / "secret.json") == 0o600
