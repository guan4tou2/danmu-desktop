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
