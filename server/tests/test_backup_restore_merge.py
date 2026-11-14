"""Restoring credential files: what the target keeps, what gets reloaded.

- A credential-free restore keeps every webhook the target has.
- Empty credential fields are merged whatever the manifest says, so a
  restore never writes "auth required but no token".
- An unreadable credential file is copied aside before it is overwritten.
- Services that cache these files see the restored content at once, and a
  later write does not put the old content back.
"""

import io
import json
import tarfile

import pytest

from server import config as config_module
from server.services import backup as backup_svc
from server.services import webhook as webhook_mod
from server.services import ws_auth

HOOK_A = {
    "id": "aaaa1111",
    "url": "https://a.example/h",
    "events": ["on_danmu"],
    "format": "json",
    "secret": "secret-a",
    "enabled": True,
    "retry_count": 3,
}
HOOK_B = dict(HOOK_A, id="bbbb2222", url="https://b.example/h", secret="secret-b")


def _tar(members, manifest=None):
    if manifest is not None:
        members = dict(members, **{"manifest.json": json.dumps(manifest).encode()})
    buf = io.BytesIO()
    with tarfile.open(fileobj=buf, mode="w:gz") as tar:
        for name, data in members.items():
            info = tarfile.TarInfo(name)
            info.size = len(data)
            tar.addfile(info, io.BytesIO(data))
    return buf.getvalue()


@pytest.fixture()
def runtime(tmp_path, monkeypatch):
    root = tmp_path / "server"
    for name in ("runtime", "effects", "plugins", "user_plugins"):
        (root / name).mkdir(parents=True)
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
    monkeypatch.setattr(config_module, "_HASH_FILE", tmp_path / "admin_password.hash")
    rt = root / "runtime"
    # Point the live services at this runtime so reloads can be observed.
    monkeypatch.setattr(webhook_mod, "_WEBHOOKS_FILE", rt / "webhooks.json")
    ws_auth._state.reset_for_tests(rt / "ws_auth.json")
    yield rt
    ws_auth._state.reset_for_tests()


def _write(rt, name, obj):
    (rt / name).write_text(json.dumps(obj), encoding="utf-8")


def _read(rt, name):
    return json.loads((rt / name).read_text(encoding="utf-8"))


OMITTED = {"version": "1", "credentials": "omitted", "files": []}


# ── A: credential-free restore keeps the target's webhooks ────────────────


def test_credential_free_restore_keeps_target_only_webhooks(runtime):
    _write(runtime, "webhooks.json", [HOOK_A, HOOK_B])
    backed_up = [dict(HOOK_A, url="", secret="", events=["on_poll_end"])]
    blob = _tar({"runtime/webhooks.json": json.dumps(backed_up).encode()}, OMITTED)

    preview = backup_svc.unpack(blob, dry_run=True)
    assert {n["path"]: n["code"] for n in preview["merged"]} == {
        "runtime/webhooks.json (aaaa1111)": "webhook_updated",
        "runtime/webhooks.json (bbbb2222)": "webhook_kept",
    }

    result = backup_svc.unpack(blob, dry_run=False)
    assert result["ok"], result
    hooks = {h["id"]: h for h in _read(runtime, "webhooks.json")}
    assert set(hooks) == {"aaaa1111", "bbbb2222"}
    assert hooks["aaaa1111"]["events"] == ["on_poll_end"]  # backup's setting
    assert hooks["aaaa1111"]["url"] == HOOK_A["url"]
    assert hooks["aaaa1111"]["secret"] == "secret-a"
    assert hooks["bbbb2222"] == HOOK_B


def test_no_matching_ids_never_empties_the_target(runtime):
    _write(runtime, "webhooks.json", [HOOK_B])
    backed_up = [dict(HOOK_A, url="", secret="")]
    result = backup_svc.unpack(
        _tar({"runtime/webhooks.json": json.dumps(backed_up).encode()}, OMITTED), dry_run=False
    )
    assert [s["code"] for s in result["skipped"]] == ["webhook_no_credentials"]
    assert _read(runtime, "webhooks.json") == [HOOK_B]


def test_backup_with_credentials_stays_authoritative(runtime):
    _write(runtime, "webhooks.json", [HOOK_B])
    included = {"version": "1", "credentials": "included", "files": []}
    blob = _tar({"runtime/webhooks.json": json.dumps([HOOK_A]).encode()}, included)
    assert backup_svc.unpack(blob, dry_run=False)["ok"]
    assert _read(runtime, "webhooks.json") == [HOOK_A]


# ── E: empty credential fields are merged even without a manifest ─────────


def test_missing_manifest_does_not_switch_ws_auth_off(runtime):
    _write(runtime, "ws_auth.json", {"require_token": True, "token": "live-token"})
    blob = _tar({"runtime/ws_auth.json": b'{"require_token": true, "token": ""}'})
    result = backup_svc.unpack(blob, dry_run=False)
    assert result["ok"] and result["credentials"] == "included"
    assert _read(runtime, "ws_auth.json") == {"require_token": True, "token": "live-token"}
    assert ws_auth.get_state() == {"require_token": True, "token": "live-token"}


def test_missing_manifest_with_no_target_token_generates_one(runtime):
    blob = _tar({"runtime/ws_auth.json": b'{"require_token": true, "token": ""}'})
    assert backup_svc.unpack(blob, dry_run=False)["ok"]
    state = _read(runtime, "ws_auth.json")
    assert state["require_token"] is True and state["token"]


def test_missing_manifest_keeps_target_fire_token(runtime, monkeypatch):
    from server.services import fire_token

    live = {"format": 2, "enabled": True, "token": "live-fire", "rotated_at": 3.0}
    _write(runtime, "fire_token.json", live)
    monkeypatch.setattr(fire_token, "_STATE_FILE", runtime / "fire_token.json")
    fire_token.reset_for_tests()
    blob = _tar({"runtime/fire_token.json": b'{"format": 2, "enabled": true, "token": ""}'})
    assert backup_svc.unpack(blob, dry_run=False)["ok"]
    assert fire_token.verify("live-fire") is True


# ── F: unreadable credential file is kept aside ───────────────────────────


def test_unreadable_credential_file_is_copied_before_overwrite(runtime):
    (runtime / "webhooks.json").write_text("[{not json", encoding="utf-8")
    included = {"version": "1", "credentials": "included", "files": []}
    blob = _tar({"runtime/webhooks.json": json.dumps([HOOK_A]).encode()}, included)

    preview = backup_svc.unpack(blob, dry_run=True)
    assert [n["code"] for n in preview["merged"]] == ["unreadable_file_kept"]
    assert not list(runtime.glob("webhooks.json.corrupt-*"))  # preview writes nothing
    result = backup_svc.unpack(blob, dry_run=False)
    assert result["ok"], result
    copies = list(runtime.glob("webhooks.json.corrupt-*"))
    assert len(copies) == 1
    assert copies[0].read_text(encoding="utf-8") == "[{not json"
    assert [n["code"] for n in result["merged"]] == ["unreadable_file_kept"]
    assert _read(runtime, "webhooks.json") == [HOOK_A]

    # Restoring again over a readable file makes no further copies.
    backup_svc.unpack(blob, dry_run=False)
    assert len(list(runtime.glob("webhooks.json.corrupt-*"))) == 1


# ── G: services see the restored content without a restart ────────────────


def test_webhook_service_reloads_and_does_not_write_old_list_back(runtime):
    _write(runtime, "webhooks.json", [HOOK_B])
    svc = webhook_mod.WebhookService()
    assert [h["id"] for h in svc.list_hooks()] == ["bbbb2222"]

    included = {"version": "1", "credentials": "included", "files": []}
    blob = _tar({"runtime/webhooks.json": json.dumps([HOOK_A]).encode()}, included)
    assert backup_svc.unpack(blob, dry_run=False)["ok"]
    assert [h["id"] for h in svc.list_hooks()] == ["aaaa1111"]

    # A delivery status update rewrites the file from memory.
    svc._update_status("aaaa1111", 200, None, ok=True)
    assert [h["id"] for h in _read(runtime, "webhooks.json")] == ["aaaa1111"]


def test_ws_auth_reloads_after_restore(runtime):
    _write(runtime, "ws_auth.json", {"require_token": True, "token": "before"})
    assert ws_auth.get_state()["token"] == "before"
    included = {"version": "1", "credentials": "included", "files": []}
    blob = _tar({"runtime/ws_auth.json": b'{"require_token": true, "token": "after"}'}, included)
    assert backup_svc.unpack(blob, dry_run=False)["ok"]
    assert ws_auth.get_state()["token"] == "after"
    ws_auth.rotate_token()
    assert _read(runtime, "ws_auth.json")["token"] not in ("before", "after")
