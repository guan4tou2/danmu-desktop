"""Backup export leaves connection credentials out unless asked to include them.

Credentials: the /fire integration token, the display WebSocket token, and
each outbound webhook's secret and URL. Restoring a credential-free backup
keeps the target server's own credentials.
"""

import io
import json
import tarfile

import pytest

from server import config as config_module
from server.services import backup as backup_svc

FIRE = {"format": 2, "enabled": True, "token": "fire-secret", "rotated_at": 5.0, "created_at": 1.0}
WS = {"require_token": True, "token": "ws-secret"}
HOOKS = [
    {
        "id": "abcd1234",
        "url": "https://discord.example/api/webhooks/1/zzz",
        "events": ["on_danmu"],
        "format": "discord",
        "secret": "hook-secret",
        "enabled": True,
        "retry_count": 3,
    }
]


def _site(root, *, fire=None, ws=None, hooks=None, settings=None):
    runtime = root / "runtime"
    runtime.mkdir(parents=True)
    for name, obj in (
        ("fire_token.json", fire),
        ("ws_auth.json", ws),
        ("webhooks.json", hooks),
        ("settings.json", settings),
    ):
        if obj is not None:
            (runtime / name).write_text(json.dumps(obj), encoding="utf-8")
    return runtime


def _point_at(monkeypatch, root):
    for name in ("effects", "plugins", "user_plugins"):
        (root / name).mkdir(exist_ok=True)
    monkeypatch.setattr(
        backup_svc,
        "_INCLUDE_DIRS",
        backup_svc._build_areas(
            runtime=root / "runtime",
            effects=root / "effects",
            plugins=root / "plugins",
            user_plugins=root / "user_plugins",
        ),
    )


@pytest.fixture(autouse=True)
def _hash_elsewhere(tmp_path, monkeypatch):
    monkeypatch.setattr(config_module, "_HASH_FILE", tmp_path / "admin_password.hash")


def _members(raw):
    with tarfile.open(fileobj=io.BytesIO(raw), mode="r:gz") as tar:
        return {m.name: tar.extractfile(m).read() for m in tar.getmembers()}


def _read(runtime, name):
    return json.loads((runtime / name).read_text(encoding="utf-8"))


# ── export ────────────────────────────────────────────────────────────────


def test_default_export_has_no_credentials(tmp_path, monkeypatch):
    _site(tmp_path / "a", fire=FIRE, ws=WS, hooks=HOOKS, settings={"FontSize": [False, 32]})
    _point_at(monkeypatch, tmp_path / "a")
    members = _members(backup_svc.pack())
    blob = b"".join(members.values())
    for secret in (b"fire-secret", b"ws-secret", b"hook-secret", b"discord.example"):
        assert secret not in blob

    manifest = json.loads(members["manifest.json"])
    assert manifest["credentials"] == "omitted"
    # The rest of each file is kept.
    fire = json.loads(members["runtime/fire_token.json"])
    assert fire["enabled"] is True and fire["token"] == ""
    ws = json.loads(members["runtime/ws_auth.json"])
    assert ws == {"require_token": True, "token": ""}
    hook = json.loads(members["runtime/webhooks.json"])[0]
    assert hook["events"] == ["on_danmu"] and hook["format"] == "discord"
    assert hook["url"] == "" and hook["secret"] == ""
    assert json.loads(members["runtime/settings.json"]) == {"FontSize": [False, 32]}


def test_export_with_credentials_keeps_them(tmp_path, monkeypatch):
    _site(tmp_path / "a", fire=FIRE, ws=WS, hooks=HOOKS)
    _point_at(monkeypatch, tmp_path / "a")
    members = _members(backup_svc.pack(include_credentials=True))
    assert json.loads(members["manifest.json"])["credentials"] == "included"
    assert json.loads(members["runtime/fire_token.json"]) == FIRE
    assert json.loads(members["runtime/ws_auth.json"]) == WS
    assert json.loads(members["runtime/webhooks.json"]) == HOOKS


def test_damaged_credential_file_is_left_out_of_a_default_export(tmp_path, monkeypatch):
    runtime = _site(tmp_path / "a")
    (runtime / "webhooks.json").write_text('[{"url": "https://x.example/s", ', encoding="utf-8")
    _point_at(monkeypatch, tmp_path / "a")
    assert "runtime/webhooks.json" not in _members(backup_svc.pack())


# ── restore ───────────────────────────────────────────────────────────────


def test_full_backup_moves_a_site_with_working_credentials(tmp_path, monkeypatch):
    from server.services import fire_token, ws_auth

    _site(tmp_path / "old", fire=FIRE, ws=WS, hooks=HOOKS)
    _point_at(monkeypatch, tmp_path / "old")
    blob = backup_svc.pack(include_credentials=True)

    new_runtime = _site(tmp_path / "new")
    _point_at(monkeypatch, tmp_path / "new")
    monkeypatch.setattr(fire_token, "_STATE_FILE", new_runtime / "fire_token.json")
    fire_token.reset_for_tests()
    result = backup_svc.unpack(blob, dry_run=False)
    assert result["ok"] and result["credentials"] == "included", result

    assert fire_token.verify("fire-secret") is True
    ws_auth._state.reset_for_tests(new_runtime / "ws_auth.json")
    assert ws_auth.get_state() == WS
    assert _read(new_runtime, "webhooks.json") == HOOKS


def test_credential_free_restore_keeps_target_credentials(tmp_path, monkeypatch):
    _site(tmp_path / "old", fire=FIRE, ws=WS, hooks=HOOKS)
    _point_at(monkeypatch, tmp_path / "old")
    blob = backup_svc.pack()

    target_fire = dict(FIRE, token="target-fire", rotated_at=9.0, enabled=False)
    target_hooks = [dict(HOOKS[0], url="https://target.example/h", secret="target-hook")]
    new_runtime = _site(
        tmp_path / "new",
        fire=target_fire,
        ws={"require_token": False, "token": "target-ws"},
        hooks=target_hooks,
    )
    _point_at(monkeypatch, tmp_path / "new")
    result = backup_svc.unpack(blob, dry_run=False)
    assert result["ok"] and result["credentials"] == "omitted", result

    fire = _read(new_runtime, "fire_token.json")
    assert fire["token"] == "target-fire" and fire["rotated_at"] == 9.0
    assert fire["enabled"] is True  # setting from the backup
    assert _read(new_runtime, "ws_auth.json") == {"require_token": True, "token": "target-ws"}
    hook = _read(new_runtime, "webhooks.json")[0]
    assert hook["url"] == "https://target.example/h" and hook["secret"] == "target-hook"
    assert hook["format"] == "discord"


def test_credential_free_restore_on_a_fresh_site(tmp_path, monkeypatch):
    """Nothing to keep: no token is invented for /fire, WS auth stays on with
    a new token, and webhooks without a URL are not restored."""
    _site(tmp_path / "old", fire=FIRE, ws=WS, hooks=HOOKS)
    _point_at(monkeypatch, tmp_path / "old")
    blob = backup_svc.pack()

    new_runtime = _site(tmp_path / "new")
    _point_at(monkeypatch, tmp_path / "new")
    preview = backup_svc.unpack(blob, dry_run=True)
    codes = [s["code"] for s in preview["skipped"]]
    assert codes == ["webhook_no_credentials"]

    result = backup_svc.unpack(blob, dry_run=False)
    assert result["ok"], result
    fire = _read(new_runtime, "fire_token.json")
    assert fire["token"] == "" and fire["enabled"] is False
    ws = _read(new_runtime, "ws_auth.json")
    assert ws["require_token"] is True and ws["token"] and ws["token"] != "ws-secret"
    assert _read(new_runtime, "webhooks.json") == []


def test_old_backup_without_credentials_key_restores_as_is(tmp_path, monkeypatch):
    new_runtime = _site(tmp_path / "new", fire=dict(FIRE, token="target-fire"))
    _point_at(monkeypatch, tmp_path / "new")
    buf = io.BytesIO()
    with tarfile.open(fileobj=buf, mode="w:gz") as tar:
        for name, data in {
            "runtime/fire_token.json": json.dumps(FIRE).encode(),
            "manifest.json": json.dumps({"version": "1", "files": []}).encode(),
        }.items():
            info = tarfile.TarInfo(name)
            info.size = len(data)
            tar.addfile(info, io.BytesIO(data))
    result = backup_svc.unpack(buf.getvalue(), dry_run=False)
    assert result["ok"] and result["credentials"] == "included"
    assert _read(new_runtime, "fire_token.json") == FIRE


# ── route ─────────────────────────────────────────────────────────────────


def test_export_route_option(client, tmp_path, monkeypatch):
    _site(tmp_path / "a", fire=FIRE, ws=WS, hooks=HOOKS)
    _point_at(monkeypatch, tmp_path / "a")
    client.post("/login", data={"password": "test"}, follow_redirects=True)

    default = _members(client.get("/admin/backup/export").data)
    assert json.loads(default["manifest.json"])["credentials"] == "omitted"
    assert b"fire-secret" not in default["runtime/fire_token.json"]

    full = _members(client.get("/admin/backup/export?include_credentials=1").data)
    assert json.loads(full["manifest.json"])["credentials"] == "included"
    assert json.loads(full["runtime/fire_token.json"])["token"] == "fire-secret"
