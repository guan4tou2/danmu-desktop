"""Tests for services.backup + /admin/backup endpoints (Batch 12 BE)."""

import io
import json
import tarfile
from pathlib import Path

import pytest

from server.services import backup as backup_svc
from server.services import factory_reset as factory_reset_svc

# ── Helpers ────────────────────────────────────────────────────────────────


def login(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)


def csrf_token(client):
    login(client)
    with client.session_transaction() as sess:
        return sess["csrf_token"]


@pytest.fixture()
def isolated_backup_dirs(tmp_path, monkeypatch):
    """Point all _INCLUDE_DIRS at tmp dirs so pack/unpack don't touch
    the real server runtime."""
    runtime = tmp_path / "runtime"
    effects = tmp_path / "effects"
    plugins = tmp_path / "plugins"
    user_plugins = tmp_path / "user_plugins"
    for d in (runtime, effects, plugins, user_plugins):
        d.mkdir()

    # Seed minimal contents
    (runtime / "settings.json").write_text('{"FontSize": [false, 32]}', encoding="utf-8")
    (runtime / "webhooks.json").write_text("[]", encoding="utf-8")
    (effects / "demo.dme").write_text("name: demo\n", encoding="utf-8")
    (plugins / "hello.py").write_text("# @name hello\n", encoding="utf-8")
    (user_plugins / "user_one.py").write_text("# @name user_one\n", encoding="utf-8")

    monkeypatch.setattr(
        backup_svc,
        "_INCLUDE_DIRS",
        [
            ("runtime", runtime, "runtime", "*.json"),
            ("effects", effects, "effects", "*.dme"),
            ("plugins", plugins, "plugins", "*"),
            ("user_plugins", user_plugins, "user_plugins", "*"),
        ],
    )
    return {
        "runtime": runtime,
        "effects": effects,
        "plugins": plugins,
        "user_plugins": user_plugins,
    }


@pytest.fixture()
def isolated_asset_dirs(tmp_path, monkeypatch):
    """Point asset pack sources at temp dirs so import/export tests do not
    mutate real uploaded emojis/stickers/sounds."""
    from server.services import asset_backup as asset_backup_svc

    emojis = tmp_path / "emojis"
    stickers = tmp_path / "stickers"
    sounds = tmp_path / "sounds"
    sticker_runtime = tmp_path / "runtime" / "stickers"
    for d in (emojis, stickers, sounds, sticker_runtime):
        d.mkdir(parents=True)

    (emojis / "cat.png").write_bytes(b"\x89PNG\r\n")
    (stickers / "wave.webp").write_bytes(b"RIFFWEBP")
    (sounds / "ding.mp3").write_bytes(b"ID3")
    (sounds / "sound_rules.json").write_text("[]", encoding="utf-8")
    (sounds / "sound_volumes.json").write_text('{"ding.mp3": 0.75}', encoding="utf-8")
    (sticker_runtime / "packs.json").write_text(
        json.dumps(
            {
                "packs": [{"id": "default", "name": "Default", "enabled": True}],
                "stickers": [{"name": "wave", "pack_id": "default", "weight": 1}],
            }
        ),
        encoding="utf-8",
    )

    monkeypatch.setattr(
        asset_backup_svc,
        "_INCLUDE_DIRS",
        [
            ("emojis", emojis, "emojis", "*"),
            ("stickers", stickers, "stickers", "*"),
            ("sounds", sounds, "sounds", "*"),
            ("sticker_runtime", sticker_runtime, "runtime/stickers", "*.json"),
        ],
    )
    return {
        "svc": asset_backup_svc,
        "emojis": emojis,
        "stickers": stickers,
        "sounds": sounds,
        "sticker_runtime": sticker_runtime,
    }


# ── Service-level pack ────────────────────────────────────────────────────


def test_pack_returns_valid_tarball(isolated_backup_dirs):
    raw = backup_svc.pack()
    assert raw[:2] == b"\x1f\x8b"  # gzip magic
    tar = tarfile.open(fileobj=io.BytesIO(raw), mode="r:gz")
    names = tar.getnames()
    assert "manifest.json" in names
    assert "runtime/settings.json" in names
    assert "effects/demo.dme" in names
    assert "plugins/hello.py" in names
    assert "user_plugins/user_one.py" in names
    tar.close()


def test_pack_manifest_lists_every_file(isolated_backup_dirs):
    raw = backup_svc.pack()
    tar = tarfile.open(fileobj=io.BytesIO(raw), mode="r:gz")
    manifest_member = tar.extractfile("manifest.json")
    manifest = json.loads(manifest_member.read().decode("utf-8"))
    tar.close()
    paths = {f["path"] for f in manifest["files"]}
    assert paths == {
        "runtime/settings.json",
        "runtime/webhooks.json",
        "effects/demo.dme",
        "plugins/hello.py",
        "user_plugins/user_one.py",
    }
    assert manifest["file_count"] == 5
    assert manifest["version"] == "1"


def test_pack_skips_tmp_and_dotfiles(isolated_backup_dirs):
    """*.tmp partial-writes + dotfiles must not leak into backups."""
    (isolated_backup_dirs["runtime"] / "settings.json.tmp").write_text("partial", encoding="utf-8")
    (isolated_backup_dirs["runtime"] / ".DS_Store").write_text("\0", encoding="utf-8")
    raw = backup_svc.pack()
    tar = tarfile.open(fileobj=io.BytesIO(raw), mode="r:gz")
    names = tar.getnames()
    tar.close()
    assert not any(n.endswith(".tmp") for n in names)
    assert not any(Path(n).name.startswith(".") for n in names)


def test_pack_writes_to_target_path(isolated_backup_dirs, tmp_path):
    target = tmp_path / "out" / "snapshot.tar.gz"
    result = backup_svc.pack(target_path=target)
    assert result == b""
    assert target.exists()
    assert target.read_bytes()[:2] == b"\x1f\x8b"


def test_asset_pack_manifest_lists_static_assets(isolated_asset_dirs):
    raw = isolated_asset_dirs["svc"].pack()
    tar = tarfile.open(fileobj=io.BytesIO(raw), mode="r:gz")
    names = tar.getnames()
    manifest = json.loads(tar.extractfile("manifest.json").read().decode("utf-8"))
    tar.close()

    assert names == [
        "emojis/cat.png",
        "stickers/wave.webp",
        "sounds/ding.mp3",
        "sounds/sound_rules.json",
        "sounds/sound_volumes.json",
        "runtime/stickers/packs.json",
        "manifest.json",
    ]
    assert manifest["version"] == "assets-v1"
    assert manifest["file_count"] == 6
    assert {f["label"] for f in manifest["files"]} == {
        "emojis",
        "stickers",
        "sounds",
        "sticker_runtime",
    }


def test_asset_unpack_apply_writes_assets(isolated_asset_dirs):
    raw = isolated_asset_dirs["svc"].pack()
    for d in (
        isolated_asset_dirs["emojis"],
        isolated_asset_dirs["stickers"],
        isolated_asset_dirs["sounds"],
        isolated_asset_dirs["sticker_runtime"],
    ):
        for f in d.iterdir():
            if f.is_file():
                f.unlink()

    result = isolated_asset_dirs["svc"].unpack(raw, dry_run=False)

    assert result["ok"] is True
    assert result["applied"] == 6
    assert (isolated_asset_dirs["emojis"] / "cat.png").exists()
    assert (isolated_asset_dirs["stickers"] / "wave.webp").exists()
    assert (isolated_asset_dirs["sounds"] / "ding.mp3").exists()
    assert (isolated_asset_dirs["sounds"] / "sound_rules.json").exists()
    assert (isolated_asset_dirs["sticker_runtime"] / "packs.json").exists()


def test_asset_unpack_skips_disallowed_extension(isolated_asset_dirs):
    buf = io.BytesIO()
    with tarfile.open(fileobj=buf, mode="w:gz") as tar:
        bad = b"<svg></svg>"
        info = tarfile.TarInfo(name="emojis/bad.svg")
        info.size = len(bad)
        tar.addfile(info, io.BytesIO(bad))

    result = isolated_asset_dirs["svc"].unpack(buf.getvalue(), dry_run=True)

    assert result["ok"] is True
    assert result["members"] == []
    assert any(s["reason"] == "extension rejected" for s in result["skipped"])


# ── Service-level unpack (dry-run) ────────────────────────────────────────


def test_unpack_dry_run_lists_files(isolated_backup_dirs):
    raw = backup_svc.pack()
    result = backup_svc.unpack(raw, dry_run=True)
    assert result["ok"] is True
    assert result["applied"] == 0
    assert {m["path"] for m in result["members"]} == {
        "runtime/settings.json",
        "runtime/webhooks.json",
        "effects/demo.dme",
        "plugins/hello.py",
        "user_plugins/user_one.py",
    }


def test_unpack_rejects_oversize(isolated_backup_dirs):
    """16 MB cap is sanity-bound on uploads."""
    blob = b"\x1f\x8b" + b"x" * (17 * 1024 * 1024)
    result = backup_svc.unpack(blob, dry_run=True)
    assert result["ok"] is False
    assert any("exceeds" in e for e in result["errors"])


def test_unpack_rejects_garbage(isolated_backup_dirs):
    result = backup_svc.unpack(b"not a tarball", dry_run=True)
    assert result["ok"] is False
    assert any("not a valid" in e for e in result["errors"])


def test_unpack_skips_path_traversal(isolated_backup_dirs):
    """Members like `../etc/passwd` get skipped, not written."""
    buf = io.BytesIO()
    with tarfile.open(fileobj=buf, mode="w:gz") as tar:
        bad = b"compromise attempt"
        info = tarfile.TarInfo(name="../etc/passwd")
        info.size = len(bad)
        tar.addfile(info, io.BytesIO(bad))
        # Sneak in one valid entry so manifest doesn't look empty
        good = b'{"FontSize": [false, 32]}'
        info2 = tarfile.TarInfo(name="runtime/settings.json")
        info2.size = len(good)
        tar.addfile(info2, io.BytesIO(good))
    result = backup_svc.unpack(buf.getvalue(), dry_run=True)
    assert any(s["reason"] == "path traversal rejected" for s in result["skipped"])


def test_unpack_skips_unknown_prefix(isolated_backup_dirs):
    """Tarball members under e.g. `etc/` are skipped — not in our whitelist."""
    buf = io.BytesIO()
    with tarfile.open(fileobj=buf, mode="w:gz") as tar:
        bad = b"x"
        info = tarfile.TarInfo(name="etc/passwd")
        info.size = len(bad)
        tar.addfile(info, io.BytesIO(bad))
    result = backup_svc.unpack(buf.getvalue(), dry_run=True)
    assert any(s["reason"] == "unknown prefix" for s in result["skipped"])


# ── Service-level unpack (apply) ──────────────────────────────────────────


def test_unpack_apply_writes_files(isolated_backup_dirs, tmp_path):
    """Round-trip: pack → wipe source dirs → unpack → verify files exist."""
    raw = backup_svc.pack()

    # Wipe source dirs to verify the apply phase repopulates them
    for d in isolated_backup_dirs.values():
        for f in d.iterdir():
            if f.is_file():
                f.unlink()

    result = backup_svc.unpack(raw, dry_run=False)
    assert result["ok"] is True
    assert result["applied"] == 5

    settings = isolated_backup_dirs["runtime"] / "settings.json"
    assert settings.exists()
    assert json.loads(settings.read_text()) == {"FontSize": [False, 32]}

    effect = isolated_backup_dirs["effects"] / "demo.dme"
    assert effect.exists()


# ── Endpoint auth + behavior ──────────────────────────────────────────────


def test_export_requires_login(client):
    resp = client.get("/admin/backup/export")
    assert resp.status_code in (302, 401, 403)


def test_export_streams_tarball(client, isolated_backup_dirs):
    login(client)
    resp = client.get("/admin/backup/export")
    assert resp.status_code == 200
    assert resp.headers.get("Content-Type") == "application/gzip"
    assert "attachment; filename=" in (resp.headers.get("Content-Disposition") or "")
    assert resp.data[:2] == b"\x1f\x8b"


def test_import_requires_csrf(client, isolated_backup_dirs):
    login(client)
    raw = backup_svc.pack()
    resp = client.post(
        "/admin/backup/import",
        data={"file": (io.BytesIO(raw), "snap.tar.gz")},
        content_type="multipart/form-data",
    )
    assert resp.status_code in (400, 403)


def test_import_dry_run_returns_members(client, isolated_backup_dirs):
    token = csrf_token(client)
    raw = backup_svc.pack()
    resp = client.post(
        "/admin/backup/import?dry_run=true",
        data={"file": (io.BytesIO(raw), "snap.tar.gz")},
        content_type="multipart/form-data",
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 200
    body = resp.get_json()
    assert body["ok"] is True
    assert body["applied"] == 0
    assert len(body["members"]) == 5


def test_import_apply_writes_files(client, isolated_backup_dirs):
    token = csrf_token(client)
    raw = backup_svc.pack()

    # Wipe to prove the apply did the writing
    (isolated_backup_dirs["runtime"] / "settings.json").unlink()

    resp = client.post(
        "/admin/backup/import",
        data={"file": (io.BytesIO(raw), "snap.tar.gz")},
        content_type="multipart/form-data",
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 200
    body = resp.get_json()
    assert body["ok"] is True
    assert body["applied"] >= 1
    assert (isolated_backup_dirs["runtime"] / "settings.json").exists()


def test_import_rejects_missing_file(client):
    token = csrf_token(client)
    resp = client.post(
        "/admin/backup/import",
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 400


def test_manifest_endpoint_lists_state(client, isolated_backup_dirs):
    login(client)
    resp = client.get("/admin/backup/manifest")
    assert resp.status_code == 200
    body = resp.get_json()
    assert body["file_count"] == 5
    assert body["total_bytes"] > 0
    paths = {f["path"] for f in body["files"]}
    assert "runtime/settings.json" in paths


def test_asset_manifest_endpoint_lists_assets(client, isolated_asset_dirs):
    login(client)
    resp = client.get("/admin/backup/assets/manifest")
    assert resp.status_code == 200
    body = resp.get_json()
    assert body["file_count"] == 6
    assert body["total_bytes"] > 0
    assert {f["path"] for f in body["files"]} == {
        "emojis/cat.png",
        "stickers/wave.webp",
        "sounds/ding.mp3",
        "sounds/sound_rules.json",
        "sounds/sound_volumes.json",
        "runtime/stickers/packs.json",
    }


def test_asset_import_dry_run_returns_members(client, isolated_asset_dirs):
    token = csrf_token(client)
    raw = isolated_asset_dirs["svc"].pack()
    resp = client.post(
        "/admin/backup/assets/import?dry_run=true",
        data={"file": (io.BytesIO(raw), "assets.tar.gz")},
        content_type="multipart/form-data",
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 200
    body = resp.get_json()
    assert body["ok"] is True
    assert body["applied"] == 0
    assert {m["path"] for m in body["members"]} == {
        "emojis/cat.png",
        "stickers/wave.webp",
        "sounds/ding.mp3",
        "sounds/sound_rules.json",
        "sounds/sound_volumes.json",
        "runtime/stickers/packs.json",
    }


def test_factory_reset_service_removes_only_runtime_state_files(tmp_path, monkeypatch):
    runtime = tmp_path / "runtime"
    nested = runtime / "stickers"
    nested.mkdir(parents=True)
    for rel in (
        "settings.json",
        "webhooks.json",
        "sessions_archive.jsonl",
        "audit.log",
        "broadcast.json.tmp",
        "stickers/packs.json",
    ):
        path = runtime / rel
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text("{}", encoding="utf-8")
    (runtime / "keep.png").write_bytes(b"png")
    (runtime / ".gitignore").write_text("*\n", encoding="utf-8")

    monkeypatch.setattr(factory_reset_svc, "_RUNTIME_DIR", runtime)

    result = factory_reset_svc.reset_runtime_state(confirm="reset")

    assert result["ok"] is True
    assert set(result["removed"]) == {
        "audit.log",
        "broadcast.json.tmp",
        "sessions_archive.jsonl",
        "settings.json",
        "stickers/packs.json",
        "webhooks.json",
    }
    assert (runtime / "keep.png").exists()
    assert (runtime / ".gitignore").exists()


def test_factory_reset_endpoint_requires_reset_confirmation(client):
    token = csrf_token(client)
    resp = client.post(
        "/admin/backup/factory-reset",
        json={"confirm": "wrong"},
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 400


def test_factory_reset_endpoint_applies_runtime_reset(client, tmp_path, monkeypatch):
    runtime = tmp_path / "runtime"
    runtime.mkdir()
    (runtime / "webhooks.json").write_text("[]", encoding="utf-8")
    (runtime / "keep.png").write_bytes(b"png")
    monkeypatch.setattr(factory_reset_svc, "_RUNTIME_DIR", runtime)
    token = csrf_token(client)

    resp = client.post(
        "/admin/backup/factory-reset",
        json={"confirm": "reset"},
        headers={"X-CSRF-Token": token},
    )

    assert resp.status_code == 200, resp.data
    body = resp.get_json()
    assert body["ok"] is True
    assert "webhooks.json" in body["removed"]
    assert not (runtime / "webhooks.json").exists()
    assert (runtime / "keep.png").exists()
