"""Backup restore accepts exactly what an export produces.

Covers the allowlist shared by pack/unpack, path checks, file permissions
after restore, and the public poll-media route serving images only.
"""

import io
import json
import os
import stat
import tarfile

import pytest

from server import config as config_module
from server.config import Config
from server.services import backup as backup_svc


def _tarball(members, *, symlinks=()):
    buf = io.BytesIO()
    with tarfile.open(fileobj=buf, mode="w:gz") as tar:
        for name, data in members.items():
            info = tarfile.TarInfo(name=name)
            info.size = len(data)
            info.mode = 0o644
            tar.addfile(info, io.BytesIO(data))
        for name, target in symlinks:
            info = tarfile.TarInfo(name=name)
            info.type = tarfile.SYMTYPE
            info.linkname = target
            tar.addfile(info)
    return buf.getvalue()


def _mode(path):
    return stat.S_IMODE(os.stat(path).st_mode)


@pytest.fixture()
def dirs(tmp_path, monkeypatch):
    root = tmp_path / "server"
    d = {name: root / name for name in ("runtime", "effects", "plugins", "user_plugins")}
    for p in d.values():
        p.mkdir(parents=True)
    monkeypatch.setattr(
        backup_svc,
        "_INCLUDE_DIRS",
        backup_svc._build_areas(
            runtime=d["runtime"],
            effects=d["effects"],
            plugins=d["plugins"],
            user_plugins=d["user_plugins"],
        ),
    )
    monkeypatch.setattr(config_module, "_HASH_FILE", d["runtime"] / "admin_password.hash")
    d["root"] = root
    return d


# ── refused ───────────────────────────────────────────────────────────────


def test_restore_refuses_files_an_export_never_contains(dirs):
    raw = _tarball(
        {
            "runtime/polls/abcdef12/x.html": b"<p>",
            "runtime/polls/abcdef12/x.js": b"1",
            "runtime/polls/abcdef12/x.svg": b"<svg/>",
            "runtime/admin_password.hash": b"",
            "runtime/deep/nested/any.bin": b"\0",
            "effects/notadme.py": b"x = 1\n",
            "effects/sub/nested.dme": b"name: n\n",
            "plugins/__pycache__/example.cpython-311.pyc": b"\0",
            "user_plugins/README.md": b"hi",
            "user_plugins/sub/inner.py": b"x = 1\n",
            "runtime/.hidden.json": b"{}",
            "runtime/settings.json.tmp": b"{}",
            "other/x.json": b"{}",
        }
    )
    result = backup_svc.unpack(raw, dry_run=False)
    assert result["applied"] == 0, result
    codes = {s["path"]: s["code"] for s in result["skipped"]}
    assert set(codes) == {
        "runtime/polls/abcdef12/x.html",
        "runtime/polls/abcdef12/x.js",
        "runtime/polls/abcdef12/x.svg",
        "runtime/admin_password.hash",
        "runtime/deep/nested/any.bin",
        "effects/notadme.py",
        "effects/sub/nested.dme",
        "plugins/__pycache__/example.cpython-311.pyc",
        "user_plugins/README.md",
        "user_plugins/sub/inner.py",
        "runtime/.hidden.json",
        "runtime/settings.json.tmp",
        "other/x.json",
    }
    assert codes["runtime/polls/abcdef12/x.html"] == "not_backup_file"
    assert codes["runtime/.hidden.json"] == "unsafe_path"
    written = [p for p in dirs["root"].rglob("*") if p.is_file()]
    assert written == []


def test_restore_never_writes_the_admin_password_hash(dirs, monkeypatch):
    """Even where the hash path is configured to look like runtime state."""
    hash_file = dirs["runtime"] / "admin_hash.json"
    monkeypatch.setattr(config_module, "_HASH_FILE", hash_file)
    result = backup_svc.unpack(_tarball({"runtime/admin_hash.json": b"x"}), dry_run=False)
    assert result["applied"] == 0
    assert result["skipped"][0]["code"] == "admin_password"
    assert not hash_file.exists()


def test_restore_rejects_absolute_path_hidden_after_prefix(dirs):
    """``runtime//abs`` must not turn into an absolute join, even into a
    sibling directory whose name starts with the area's name."""
    sibling = dirs["root"] / "runtime_sibling"
    sibling.mkdir()
    member = "runtime/" + str(sibling / "x.json")
    assert "//" in member
    result = backup_svc.unpack(_tarball({member: b"{}"}), dry_run=False)
    assert result["applied"] == 0
    assert result["skipped"][0]["code"] == "unsafe_path"
    assert not (sibling / "x.json").exists()


@pytest.mark.parametrize(
    "name",
    ["../escape.json", "/abs.json", "runtime/../../escape.json", "runtime/./x.json", "runtime/"],
)
def test_restore_rejects_traversal_forms(dirs, name):
    result = backup_svc.unpack(_tarball({name: b"{}"}), dry_run=False)
    assert result["applied"] == 0
    assert [s["code"] for s in result["skipped"]] == ["unsafe_path"]


def test_restore_rejects_symlink_members(dirs):
    raw = _tarball({}, symlinks=[("runtime/link.json", "/etc/passwd")])
    result = backup_svc.unpack(raw, dry_run=False)
    assert result["applied"] == 0
    assert result["skipped"][0]["code"] == "unsafe_path"


def test_restore_refuses_symlinked_subdirectory_escape(dirs, tmp_path):
    outside = tmp_path / "outside"
    outside.mkdir()
    (dirs["runtime"] / "stickers").symlink_to(outside, target_is_directory=True)
    result = backup_svc.unpack(_tarball({"runtime/stickers/packs.json": b"{}"}), dry_run=False)
    assert result["applied"] == 0
    assert result["skipped"][0]["code"] == "unsafe_path"
    assert not (outside / "packs.json").exists()


# ── accepted ──────────────────────────────────────────────────────────────


def test_old_format_backup_still_restores(dirs, monkeypatch):
    """A tarball as 5.x exported it: 0644 members, no new manifest keys,
    plus the README and bytecode the old exporter swept in."""
    monkeypatch.setattr(Config, "ALLOW_PLUGIN_UPLOAD", True)
    manifest = {"version": "1", "generated_at": 1, "tool": "danmu-fire backup", "files": []}
    raw = _tarball(
        {
            "runtime/settings.json": b'{"FontSize": [false, 32]}',
            "runtime/stickers/packs.json": b'{"packs": []}',
            "runtime/fire_token.json": b'{"format": 2, "enabled": true, "token": "t"}',
            "effects/demo.dme": b"name: demo\n",
            "plugins/example_logger.py": b"x = 1\n",
            "user_plugins/one.py": b"x = 2\n",
            "user_plugins/README.md": b"readme",
            "user_plugins/__pycache__/one.cpython-311.pyc": b"\0",
            "manifest.json": json.dumps(manifest).encode(),
        }
    )
    result = backup_svc.unpack(raw, dry_run=False)
    assert result["ok"], result
    assert result["applied"] == 6
    assert {s["path"] for s in result["skipped"]} == {
        "user_plugins/README.md",
        "user_plugins/__pycache__/one.cpython-311.pyc",
    }
    assert (dirs["runtime"] / "stickers" / "packs.json").read_bytes() == b'{"packs": []}'
    assert (dirs["user_plugins"] / "one.py").read_bytes() == b"x = 2\n"


def test_restored_files_get_service_permissions(dirs):
    raw = _tarball(
        {
            "runtime/fire_token.json": b'{"format": 2, "enabled": false, "token": ""}',
            "runtime/ws_auth.json": b'{"require_token": false, "token": ""}',
            "runtime/webhooks.json": b"[]",
            "runtime/settings.json": b"{}",
        }
    )
    old_umask = os.umask(0o022)
    try:
        result = backup_svc.unpack(raw, dry_run=False)
    finally:
        os.umask(old_umask)
    assert result["ok"], result
    for name in ("fire_token.json", "ws_auth.json", "webhooks.json"):
        assert _mode(dirs["runtime"] / name) == 0o600, name
    assert _mode(dirs["runtime"] / "settings.json") == 0o644


def test_export_matches_restore_rules(dirs):
    (dirs["runtime"] / "settings.json").write_text("{}")
    (dirs["runtime"] / "admin_password.hash").write_text("hash")
    (dirs["user_plugins"] / "one.py").write_text("x = 1\n")
    (dirs["user_plugins"] / "README.md").write_text("readme")
    (dirs["user_plugins"] / "__pycache__").mkdir()
    (dirs["user_plugins"] / "__pycache__" / "one.cpython-311.pyc").write_bytes(b"\0")
    raw = backup_svc.pack()
    with tarfile.open(fileobj=io.BytesIO(raw), mode="r:gz") as tar:
        members = {m.name: m for m in tar.getmembers()}
    assert set(members) == {"runtime/settings.json", "user_plugins/one.py", "manifest.json"}
    assert {stat.S_IMODE(m.mode) for m in members.values()} == {0o600}
    # And the inventory endpoint shows the same list.
    assert {f["path"] for f in backup_svc.inventory()} == set(members) - {"manifest.json"}


def test_pack_to_path_is_owner_only(dirs, tmp_path):
    out = tmp_path / "snap.tar.gz"
    backup_svc.pack(out)
    assert _mode(out) == 0o600


def test_webhook_store_is_owner_only(tmp_path):
    from server.services import webhook as webhook_mod

    svc = webhook_mod.WebhookService()
    svc.register({"url": "http://127.0.0.1:9/h", "events": ["on_danmu"], "secret": "s"})
    assert _mode(webhook_mod._WEBHOOKS_FILE) == 0o600


# ── asset pack: same path rule ────────────────────────────────────────────


def test_asset_restore_rejects_absolute_path_after_prefix(tmp_path, monkeypatch):
    from server.services import asset_backup

    emojis = tmp_path / "emojis"
    sibling = tmp_path / "emojis_x"
    emojis.mkdir()
    sibling.mkdir()
    monkeypatch.setattr(asset_backup, "_INCLUDE_DIRS", [("emojis", emojis, "emojis", "*")])
    member = "emojis/" + str(sibling / "cat.png")
    result = asset_backup.unpack(_tarball({member: b"\x89PNG"}), dry_run=False)
    assert result["applied"] == 0
    assert not (sibling / "cat.png").exists()
    ok = asset_backup.unpack(_tarball({"emojis/cat.png": b"\x89PNG"}), dry_run=False)
    assert ok["applied"] == 1


# ── public poll media serves images only ──────────────────────────────────


@pytest.fixture()
def poll_media(tmp_path, monkeypatch):
    from server.routes.admin import poll as poll_route

    media = tmp_path / "polls"
    (media / "abcdef12").mkdir(parents=True)
    monkeypatch.setattr(poll_route, "POLL_MEDIA_DIR", media)
    return media / "abcdef12"


@pytest.mark.parametrize("name", ["x.html", "x.js", "x.svg", "x.json", "x.txt"])
def test_poll_media_refuses_non_images(client, poll_media, name):
    (poll_media / name).write_bytes(b"<script>1</script>")
    resp = client.get(f"/polls/media/abcdef12/{name}")
    assert resp.status_code == 404


@pytest.mark.parametrize(
    "name, mime", [("q.png", "image/png"), ("q.jpg", "image/jpeg"), ("q.webp", "image/webp")]
)
def test_poll_media_serves_images_with_inert_headers(client, poll_media, name, mime):
    (poll_media / name).write_bytes(b"\x89PNG\r\n\x1a\n")
    resp = client.get(f"/polls/media/abcdef12/{name}")
    assert resp.status_code == 200
    assert resp.mimetype == mime
    assert resp.headers["X-Content-Type-Options"] == "nosniff"
    csp = resp.headers["Content-Security-Policy"]
    assert "default-src 'none'" in csp and "sandbox" in csp


def test_page_csp_unchanged_elsewhere(client):
    """The stricter media policy must not leak into normal pages."""
    csp = client.get("/").headers["Content-Security-Policy"]
    assert "sandbox" not in csp
