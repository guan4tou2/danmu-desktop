"""Backup export leaves connection credentials out unless asked to include them.

Credentials: the /fire integration token, the display WebSocket token, and
each outbound webhook's secret and URL. Restoring a credential-free backup
keeps the target server's own credentials. Which file is a credential file is
decided by this server's own store paths, never by the archive.
"""

import io
import json
import os
import stat
import tarfile

import pytest

from server import config as config_module
from server.services import backup as backup_svc
from server.tests.conftest import point_credential_stores

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


def _site(root, *, fire=None, ws=None, hooks=None, settings=None, webhooks_name="webhooks.json"):
    runtime = root / "runtime"
    runtime.mkdir(parents=True)
    for name, obj in (
        ("fire_token.json", fire),
        ("ws_auth.json", ws),
        (webhooks_name, hooks),
        ("settings.json", settings),
    ):
        if obj is not None:
            (runtime / name).write_text(json.dumps(obj), encoding="utf-8")
    return runtime


def _point_at(monkeypatch, root, webhooks_name="webhooks.json"):
    """Make *root* the live site: backup areas and credential stores."""
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
    point_credential_stores(monkeypatch, root / "runtime", webhooks_name)


@pytest.fixture(autouse=True)
def _hash_elsewhere(tmp_path, monkeypatch):
    monkeypatch.setattr(config_module, "_HASH_FILE", tmp_path / "admin_password.hash")


def _members(raw):
    with tarfile.open(fileobj=io.BytesIO(raw), mode="r:gz") as tar:
        return {m.name: tar.extractfile(m).read() for m in tar.getmembers()}


def _tar(members):
    buf = io.BytesIO()
    with tarfile.open(fileobj=buf, mode="w:gz") as tar:
        for name, data in members.items():
            info = tarfile.TarInfo(name)
            info.size = len(data)
            tar.addfile(info, io.BytesIO(data))
    return buf.getvalue()


def _read(runtime, name):
    return json.loads((runtime / name).read_text(encoding="utf-8"))


def _hook_core(hook):
    return {k: hook[k] for k in ("id", "url", "secret", "events", "format", "enabled")}


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
    assert "credential_files" not in manifest
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


def test_custom_webhook_store_is_exported_once_under_the_standard_name(tmp_path, monkeypatch):
    runtime = _site(tmp_path / "a", hooks=HOOKS, webhooks_name="custom_hooks.json")
    # A stale file with the standard name is not the store and is not exported.
    (runtime / "webhooks.json").write_text(json.dumps([dict(HOOKS[0], id="stale000")]))
    _point_at(monkeypatch, tmp_path / "a", webhooks_name="custom_hooks.json")

    for include in (False, True):
        members = _members(backup_svc.pack(include_credentials=include))
        hook_files = [n for n in members if "hook" in n]
        assert hook_files == ["runtime/webhooks.json"]
        hooks = json.loads(members["runtime/webhooks.json"])
        assert [h["id"] for h in hooks] == ["abcd1234"]
        assert (b"hook-secret" in members["runtime/webhooks.json"]) is include
    inventory = [f["path"] for f in backup_svc.inventory()]
    assert inventory.count("runtime/webhooks.json") == 1
    assert "runtime/custom_hooks.json" not in inventory


# ── restore ───────────────────────────────────────────────────────────────


def test_full_backup_moves_a_site_with_working_credentials(tmp_path, monkeypatch):
    from server.services import fire_token, ws_auth

    _site(tmp_path / "old", fire=FIRE, ws=WS, hooks=HOOKS)
    _point_at(monkeypatch, tmp_path / "old")
    blob = backup_svc.pack(include_credentials=True)

    new_runtime = _site(tmp_path / "new")
    _point_at(monkeypatch, tmp_path / "new")
    result = backup_svc.unpack(blob, dry_run=False)
    assert result["ok"] and result["credentials"] == "included", result

    assert fire_token.verify("fire-secret") is True
    assert ws_auth.get_state() == WS
    assert [_hook_core(h) for h in _read(new_runtime, "webhooks.json")] == [
        _hook_core(h) for h in HOOKS
    ]
    for name in ("fire_token.json", "ws_auth.json", "webhooks.json"):
        assert stat.S_IMODE(os.stat(new_runtime / name).st_mode) == 0o600


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
    # The token stays this server's, and so does its on/off switch.
    assert fire["enabled"] is False
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


def test_pre_format_fire_token_on_target_stays_invalid(tmp_path, monkeypatch):
    """A token the loader ignores since the upgrade is not carried into the
    current-format file by a credential-free restore."""
    from server.services import fire_token

    _site(tmp_path / "old", fire=FIRE)
    _point_at(monkeypatch, tmp_path / "old")
    blob = backup_svc.pack()

    legacy = {"enabled": True, "token": "pre-upgrade-token", "rotated_at": 1.0}
    new_runtime = _site(tmp_path / "new", fire=legacy)
    _point_at(monkeypatch, tmp_path / "new")
    assert fire_token.verify("pre-upgrade-token") is False

    result = backup_svc.unpack(blob, dry_run=False)
    assert result["ok"], result
    restored = _read(new_runtime, "fire_token.json")
    assert restored["token"] == "" and restored["enabled"] is False
    assert fire_token.verify("pre-upgrade-token") is False
    assert fire_token.get_public_state()["has_token"] is False
    # The file the service did not recognise is kept aside, not lost.
    kept = [p for p in new_runtime.iterdir() if p.name.startswith("fire_token.json.corrupt-")]
    assert len(kept) == 1 and json.loads(kept[0].read_text()) == legacy


def test_pre_format_fire_token_in_backup_does_not_replace_target_token(tmp_path, monkeypatch):
    from server.services import fire_token

    target = dict(FIRE, token="target-fire")
    new_runtime = _site(tmp_path / "new", fire=target)
    _point_at(monkeypatch, tmp_path / "new")
    legacy = {"enabled": True, "token": "pre-upgrade-token"}
    blob = _tar(
        {
            "runtime/fire_token.json": json.dumps(legacy).encode(),
            "manifest.json": json.dumps({"version": "1", "credentials": "included"}).encode(),
        }
    )
    preview = backup_svc.unpack(blob, dry_run=True)
    assert [n["code"] for n in preview["merged"]] == ["fire_token_legacy_ignored"]

    result = backup_svc.unpack(blob, dry_run=False)
    assert result["ok"], result
    assert [n["code"] for n in result["merged"]] == ["fire_token_legacy_ignored"]
    assert _read(new_runtime, "fire_token.json")["token"] == "target-fire"
    assert fire_token.verify("target-fire") is True
    assert fire_token.verify("pre-upgrade-token") is False


def test_rejected_ws_auth_file_on_target_is_not_honoured(tmp_path, monkeypatch):
    """A ws_auth.json the loader would reject does not supply the token."""
    _site(tmp_path / "old", ws=WS)
    _point_at(monkeypatch, tmp_path / "old")
    blob = backup_svc.pack()

    new_runtime = _site(tmp_path / "new", ws={"token": "orphan-token"})
    _point_at(monkeypatch, tmp_path / "new")
    assert backup_svc.unpack(blob, dry_run=False)["ok"]
    ws = _read(new_runtime, "ws_auth.json")
    assert ws["require_token"] is True
    assert ws["token"] and ws["token"] != "orphan-token"


def test_credential_free_restore_that_turns_display_auth_off_is_listed(tmp_path, monkeypatch):
    from server.services import ws_auth

    _site(tmp_path / "old", ws={"require_token": False, "token": ""})
    _point_at(monkeypatch, tmp_path / "old")
    blob = backup_svc.pack()

    _site(tmp_path / "new", ws={"require_token": True, "token": "target-ws"})
    _point_at(monkeypatch, tmp_path / "new")
    preview = backup_svc.unpack(blob, dry_run=True)
    assert [(n["path"], n["code"]) for n in preview["merged"]] == [
        ("runtime/ws_auth.json", "ws_auth_turned_off")
    ]
    result = backup_svc.unpack(blob, dry_run=False)
    assert [n["code"] for n in result["merged"]] == ["ws_auth_turned_off"]
    assert ws_auth.get_state()["require_token"] is False


@pytest.mark.parametrize("include", [True, False], ids=["with-credentials", "credential-free"])
@pytest.mark.parametrize(
    "source_name,target_name",
    [("custom_hooks.json", "webhooks.json"), ("webhooks.json", "custom_hooks.json")],
    ids=["custom-to-default", "default-to-custom"],
)
def test_webhook_store_name_differs_between_sites(
    tmp_path, monkeypatch, include, source_name, target_name
):
    from server.services import webhook as webhook_mod

    _site(tmp_path / "old", hooks=HOOKS, webhooks_name=source_name)
    _point_at(monkeypatch, tmp_path / "old", webhooks_name=source_name)
    blob = backup_svc.pack(include_credentials=include)

    target_hooks = [dict(HOOKS[0], url="https://target.example/h", secret="target-hook")]
    new_runtime = _site(tmp_path / "new", hooks=target_hooks, webhooks_name=target_name)
    _point_at(monkeypatch, tmp_path / "new", webhooks_name=target_name)
    result = backup_svc.unpack(blob, dry_run=False)
    assert result["ok"], result

    # Written to the store the target is configured to use, and only there.
    assert not (new_runtime / source_name).exists() or source_name == target_name
    restored = _read(new_runtime, target_name)
    assert len(restored) == 1
    if include:
        assert restored[0]["url"] == HOOKS[0]["url"]
        assert restored[0]["secret"] == "hook-secret"
    else:
        assert restored[0]["url"] == "https://target.example/h"
        assert restored[0]["secret"] == "target-hook"
    assert stat.S_IMODE(os.stat(new_runtime / target_name).st_mode) == 0o600
    live = webhook_mod.WebhookService().get_hook(HOOKS[0]["id"])
    assert live["url"] == restored[0]["url"]

    # A later default export of the target carries no URL or secret.
    exported = _members(backup_svc.pack())
    blob_text = b"".join(exported.values())
    for secret in (b"hook-secret", b"target-hook", b"discord.example", b"target.example"):
        assert secret not in blob_text
    assert [n for n in exported if "hook" in n] == ["runtime/webhooks.json"]


def test_manifest_cannot_declare_other_files_as_credentials(tmp_path, monkeypatch):
    """Declarations in an uploaded manifest are ignored: a store is recognised
    by this server's own paths, and other files stay ordinary runtime JSON."""
    from server.services import ws_auth

    new_runtime = _site(
        tmp_path / "new", ws={"require_token": True, "token": "target-ws"}, settings={"a": 1}
    )
    _point_at(monkeypatch, tmp_path / "new")
    manifest = {
        "version": "1",
        "credentials": "included",
        "credential_files": {
            "runtime/ws_auth.json": "fire_token",
            "runtime/settings.json": "webhooks",
        },
    }
    blob = _tar(
        {
            "runtime/ws_auth.json": json.dumps({"require_token": True, "token": ""}).encode(),
            "runtime/settings.json": json.dumps({"b": 2}).encode(),
            "manifest.json": json.dumps(manifest).encode(),
        }
    )
    result = backup_svc.unpack(blob, dry_run=False)
    assert result["ok"], result
    assert ws_auth.get_state() == {"require_token": True, "token": "target-ws"}
    assert _read(new_runtime, "settings.json") == {"b": 2}
    assert stat.S_IMODE(os.stat(new_runtime / "settings.json").st_mode) == 0o644
    assert not [p for p in new_runtime.iterdir() if ".corrupt-" in p.name]


def test_old_backup_with_a_nonstandard_webhook_name(tmp_path, monkeypatch):
    """Backups made before the standard archive name carried a renamed store
    under its own name. On a server that uses that name it is the store; on
    any other server it is an ordinary runtime file, as before."""
    blob = _tar(
        {
            "runtime/custom_hooks.json": json.dumps(HOOKS).encode(),
            "manifest.json": json.dumps({"version": "1", "files": []}).encode(),
        }
    )

    same = _site(tmp_path / "same", hooks=[], webhooks_name="custom_hooks.json")
    _point_at(monkeypatch, tmp_path / "same", webhooks_name="custom_hooks.json")
    assert backup_svc.unpack(blob, dry_run=False)["ok"]
    assert _read(same, "custom_hooks.json")[0]["secret"] == "hook-secret"
    assert stat.S_IMODE(os.stat(same / "custom_hooks.json").st_mode) == 0o600

    other = _site(tmp_path / "other", hooks=[])
    _point_at(monkeypatch, tmp_path / "other")
    assert backup_svc.unpack(blob, dry_run=False)["ok"]
    assert _read(other, "webhooks.json") == []
    assert _read(other, "custom_hooks.json") == HOOKS


def test_renamed_store_and_standard_name_in_one_archive(tmp_path, monkeypatch):
    """Only the standard name restores the store; the same store under its
    local name is not written a second time."""
    runtime = _site(tmp_path / "new", hooks=[], webhooks_name="custom_hooks.json")
    _point_at(monkeypatch, tmp_path / "new", webhooks_name="custom_hooks.json")
    blob = _tar(
        {
            "runtime/webhooks.json": json.dumps(HOOKS).encode(),
            "runtime/custom_hooks.json": json.dumps([dict(HOOKS[0], id="other000")]).encode(),
            "manifest.json": json.dumps({"version": "1", "credentials": "included"}).encode(),
        }
    )
    result = backup_svc.unpack(blob, dry_run=False)
    assert [s["path"] for s in result["skipped"]] == ["runtime/custom_hooks.json"]
    assert [h["id"] for h in _read(runtime, "custom_hooks.json")] == ["abcd1234"]


def test_old_backup_without_credentials_key_restores_as_is(tmp_path, monkeypatch):
    new_runtime = _site(tmp_path / "new", fire=dict(FIRE, token="target-fire"))
    _point_at(monkeypatch, tmp_path / "new")
    blob = _tar(
        {
            "runtime/fire_token.json": json.dumps(FIRE).encode(),
            "manifest.json": json.dumps({"version": "1", "files": []}).encode(),
        }
    )
    result = backup_svc.unpack(blob, dry_run=False)
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
