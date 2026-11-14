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
import threading

import pytest

from server import config as config_module
from server.services import backup as backup_svc
from server.services import webhook as webhook_mod
from server.services import ws_auth
from server.tests.conftest import point_credential_stores

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
    point_credential_stores(monkeypatch, rt)
    yield rt
    ws_auth._state.reset_for_tests()


def _write(rt, name, obj):
    (rt / name).write_text(json.dumps(obj), encoding="utf-8")


def _read(rt, name):
    return json.loads((rt / name).read_text(encoding="utf-8"))


def _core(hook):
    """The fields a test wrote; the service adds its own defaults on save."""
    return {k: hook[k] for k in HOOK_A}


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
    assert _core(hooks["bbbb2222"]) == HOOK_B


def test_no_matching_ids_never_empties_the_target(runtime):
    _write(runtime, "webhooks.json", [HOOK_B])
    backed_up = [dict(HOOK_A, url="", secret="")]
    result = backup_svc.unpack(
        _tar({"runtime/webhooks.json": json.dumps(backed_up).encode()}, OMITTED), dry_run=False
    )
    assert [s["code"] for s in result["skipped"]] == ["webhook_no_credentials"]
    assert [_core(h) for h in _read(runtime, "webhooks.json")] == [HOOK_B]


def test_backup_with_credentials_stays_authoritative(runtime):
    _write(runtime, "webhooks.json", [HOOK_B])
    included = {"version": "1", "credentials": "included", "files": []}
    blob = _tar({"runtime/webhooks.json": json.dumps([HOOK_A]).encode()}, included)
    assert backup_svc.unpack(blob, dry_run=False)["ok"]
    assert [_core(h) for h in _read(runtime, "webhooks.json")] == [HOOK_A]


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
    assert [_core(h) for h in _read(runtime, "webhooks.json")] == [HOOK_A]

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


# ── round 4: restore runs under each service's write lock ─────────────────

INCLUDED = {"version": "1", "credentials": "included", "files": []}


def _during_apply_merge(monkeypatch, action):
    """Run *action* in another thread while the apply step's merge runs.

    The apply merge runs inside the service's write lock, so the thread must
    still be waiting when the merge returns; it finishes after the restore.
    Returns the thread and a list that records whether it was blocked.
    """
    real = backup_svc._merge_credential
    calls = []
    blocked = []
    worker = threading.Thread(target=action)

    def merge(*args, **kwargs):
        calls.append(1)
        if len(calls) == 2:  # first call is the preview, second the apply
            worker.start()
            worker.join(timeout=0.3)
            blocked.append(worker.is_alive())
        return real(*args, **kwargs)

    monkeypatch.setattr(backup_svc, "_merge_credential", merge)
    return worker, blocked


def test_webhook_restore_is_not_lost_to_a_delivery_status_update(runtime, monkeypatch):
    _write(runtime, "webhooks.json", [HOOK_A])
    svc = webhook_mod.WebhookService()
    worker, blocked = _during_apply_merge(
        monkeypatch, lambda: svc._update_status(HOOK_A["id"], 200, None, ok=True)
    )
    backed_up = [dict(HOOK_A, url="", secret="", retry_count=9, events=["on_poll_end"])]
    result = backup_svc.unpack(
        _tar({"runtime/webhooks.json": json.dumps(backed_up).encode()}, OMITTED), dry_run=False
    )
    worker.join(timeout=5)
    assert result["ok"], result
    assert blocked == [True]
    # The restored settings survive, and the delivery landed on top of them.
    for hook in (svc.get_hook(HOOK_A["id"]), _read(runtime, "webhooks.json")[0]):
        assert hook["retry_count"] == 9 and hook["events"] == ["on_poll_end"]
        assert hook["url"] == HOOK_A["url"] and hook["success_count"] == 1


def test_fire_token_restore_and_a_rotation_do_not_interleave(runtime, monkeypatch):
    from server.services import fire_token

    _write(runtime, "fire_token.json", {"format": 2, "enabled": True, "token": "before"})
    rotated = {}
    worker, blocked = _during_apply_merge(
        monkeypatch, lambda: rotated.update(fire_token.regenerate())
    )
    blob = _tar(
        {"runtime/fire_token.json": b'{"format": 2, "enabled": true, "token": "restored"}'},
        INCLUDED,
    )
    assert backup_svc.unpack(blob, dry_run=False)["ok"]
    worker.join(timeout=5)
    assert blocked == [True]
    # The rotation ran after the restore; file and memory agree.
    assert _read(runtime, "fire_token.json")["token"] == rotated["token"]
    assert fire_token.verify(rotated["token"]) is True


def test_ws_auth_restore_and_a_rotation_do_not_interleave(runtime, monkeypatch):
    _write(runtime, "ws_auth.json", {"require_token": True, "token": "before"})
    worker, blocked = _during_apply_merge(monkeypatch, ws_auth.rotate_token)
    blob = _tar({"runtime/ws_auth.json": b'{"require_token": true, "token": "restored"}'}, INCLUDED)
    assert backup_svc.unpack(blob, dry_run=False)["ok"]
    worker.join(timeout=5)
    assert blocked == [True]
    on_disk = _read(runtime, "ws_auth.json")
    assert on_disk == ws_auth.get_state()
    assert on_disk["token"] not in ("before", "restored")


# ── round 4: what an included backup's webhook list may contain ───────────


def test_included_hook_with_a_secret_but_no_url_takes_the_target_destination(runtime):
    target_a = dict(HOOK_A, url="https://target.example/a", secret="target-a")
    _write(runtime, "webhooks.json", [target_a])
    backed_up = [
        dict(HOOK_B),
        dict(HOOK_A, url="", secret="backup-only-secret"),
        dict(HOOK_A, id="cccc3333", url="", secret="orphan-secret"),
    ]
    result = backup_svc.unpack(
        _tar({"runtime/webhooks.json": json.dumps(backed_up).encode()}, INCLUDED), dry_run=False
    )
    assert result["ok"], result
    assert [(s["path"], s["code"]) for s in result["skipped"]] == [
        ("runtime/webhooks.json (cccc3333)", "webhook_no_credentials")
    ]
    hooks = {h["id"]: h for h in _read(runtime, "webhooks.json")}
    assert set(hooks) == {"aaaa1111", "bbbb2222"}
    assert hooks["aaaa1111"]["url"] == "https://target.example/a"
    assert hooks["aaaa1111"]["secret"] == "target-a"
    assert all(h["url"] for h in webhook_mod.WebhookService().list_hooks())


def test_included_hook_with_a_url_and_no_secret_is_restored_unsigned(runtime):
    _write(runtime, "webhooks.json", [HOOK_A])
    unsigned = dict(HOOK_A, url="https://new.example/h", secret="")
    result = backup_svc.unpack(
        _tar({"runtime/webhooks.json": json.dumps([unsigned]).encode()}, INCLUDED), dry_run=False
    )
    assert result["ok"], result
    restored = _read(runtime, "webhooks.json")[0]
    assert restored["url"] == "https://new.example/h" and restored["secret"] == ""


def test_included_but_empty_webhook_list_keeps_the_target_hooks(runtime):
    _write(runtime, "webhooks.json", [HOOK_A])
    result = backup_svc.unpack(_tar({"runtime/webhooks.json": b"[]"}, INCLUDED), dry_run=False)
    assert result["ok"], result
    assert [h["id"] for h in _read(runtime, "webhooks.json")] == ["aaaa1111"]
    assert [n["code"] for n in result["merged"]] == ["webhook_kept"]


def test_invalid_hook_in_backup_is_skipped_alone(runtime):
    _write(runtime, "webhooks.json", [HOOK_A, HOOK_B])
    svc = webhook_mod.WebhookService()
    backed_up = [dict(HOOK_A, url="", secret="", retry_count="many")]
    result = backup_svc.unpack(
        _tar({"runtime/webhooks.json": json.dumps(backed_up).encode()}, OMITTED), dry_run=False
    )
    assert result["ok"], result
    assert [s["code"] for s in result["skipped"]] == ["webhook_invalid"]
    assert {h["id"] for h in _read(runtime, "webhooks.json")} == {"aaaa1111", "bbbb2222"}
    svc.register({"url": "https://c.example/h", "events": ["on_danmu"]})
    assert {"aaaa1111", "bbbb2222"} <= {h["id"] for h in _read(runtime, "webhooks.json")}


def test_webhook_service_loads_the_good_entries_of_a_partly_bad_file(runtime):
    _write(runtime, "webhooks.json", [HOOK_A, {"id": "bad00000", "retry_count": "x"}, HOOK_B])
    svc = webhook_mod.WebhookService()
    assert [h["id"] for h in svc.list_hooks()] == ["aaaa1111", "bbbb2222"]


def test_webhook_reload_reports_an_unreadable_file(runtime):
    _write(runtime, "webhooks.json", [HOOK_A])
    svc = webhook_mod.WebhookService()
    (runtime / "webhooks.json").write_text("{not json", encoding="utf-8")
    with pytest.raises(ValueError):
        svc.reload()
    assert [h["id"] for h in svc.list_hooks()] == ["aaaa1111"]


def test_partly_unusable_webhook_store_is_kept_aside_before_overwrite(runtime):
    original = [HOOK_A, "not-a-hook"]
    _write(runtime, "webhooks.json", original)
    result = backup_svc.unpack(
        _tar({"runtime/webhooks.json": json.dumps([HOOK_B]).encode()}, INCLUDED), dry_run=False
    )
    assert result["ok"], result
    copies = list(runtime.glob("webhooks.json.corrupt-*"))
    assert len(copies) == 1 and json.loads(copies[0].read_text()) == original


# ── round 4: content is checked by the service's own loader first ─────────


def test_ws_auth_backup_the_loader_would_reject_is_skipped(runtime):
    _write(runtime, "ws_auth.json", {"require_token": True, "token": "live"})
    before = (runtime / "ws_auth.json").read_bytes()
    blob = _tar({"runtime/ws_auth.json": b'{"token": ""}'}, OMITTED)
    preview = backup_svc.unpack(blob, dry_run=True)
    assert [s["code"] for s in preview["skipped"]] == ["credential_invalid"]
    assert preview["members"] == []
    result = backup_svc.unpack(blob, dry_run=False)
    assert [s["code"] for s in result["skipped"]] == ["credential_invalid"]
    assert result["applied"] == 0
    assert (runtime / "ws_auth.json").read_bytes() == before
    assert ws_auth.get_state() == {"require_token": True, "token": "live"}


def test_fire_token_backup_with_an_invalid_field_is_skipped(runtime):
    from server.services import fire_token

    live = {"format": 2, "enabled": True, "token": "live", "rotated_at": 1.0, "created_at": 1.0}
    _write(runtime, "fire_token.json", live)
    blob = _tar(
        {"runtime/fire_token.json": b'{"format": 2, "token": "x", "rotated_at": "soon"}'},
        INCLUDED,
    )
    result = backup_svc.unpack(blob, dry_run=False)
    assert [s["code"] for s in result["skipped"]] == ["credential_invalid"]
    assert _read(runtime, "fire_token.json") == live
    assert fire_token.verify("live") is True


def test_store_is_untouched_when_its_unreadable_copy_cannot_be_made(runtime, monkeypatch):
    from server.services import atomic_file

    (runtime / "ws_auth.json").write_text("x{", encoding="utf-8")
    real = atomic_file.write_atomic

    def no_room_for_copies(path, data, mode=0o600):
        if ".corrupt-" in str(path):
            raise OSError(28, "No space left on device")
        return real(path, data, mode)

    monkeypatch.setattr(atomic_file, "write_atomic", no_room_for_copies)
    blob = _tar({"runtime/ws_auth.json": b'{"require_token": true, "token": "BK"}'}, INCLUDED)
    result = backup_svc.unpack(blob, dry_run=False)
    assert result["errors"] == ["write runtime/ws_auth.json: unreadable file could not be kept"]
    assert result["restart_required"] is False
    assert (runtime / "ws_auth.json").read_text() == "x{"


def test_unreadable_copies_in_the_same_second_do_not_overwrite_each_other(runtime, monkeypatch):
    from datetime import datetime as real_datetime

    class FrozenDatetime(real_datetime):
        @classmethod
        def now(cls, tz=None):
            return real_datetime(2026, 11, 14, 12, 0, 0, tzinfo=tz)

    monkeypatch.setattr(backup_svc, "datetime", FrozenDatetime)
    target = runtime / "ws_auth.json"
    target.write_text("first{", encoding="utf-8")
    first = backup_svc._preserve_unreadable(target)
    target.write_text("second{", encoding="utf-8")
    second = backup_svc._preserve_unreadable(target)
    assert first != second
    assert first.read_text() == "first{" and second.read_text() == "second{"
    # Identical content reuses its earlier copy.
    target.write_text("first{", encoding="utf-8")
    assert backup_svc._preserve_unreadable(target) == first


# ── round 4: a file that was written but not picked up is reported ────────


def test_reload_failure_is_reported_separately_from_write_failure(runtime, monkeypatch):
    def broken():
        raise RuntimeError("cache refresh failed")

    monkeypatch.setitem(backup_svc._RELOAD_AFTER_RESTORE, "runtime/settings.json", broken)
    blob = _tar({"runtime/settings.json": b'{"a": 1}'}, OMITTED)
    result = backup_svc.unpack(blob, dry_run=False)
    assert result["ok"] is False
    assert result["applied"] == 1
    assert _read(runtime, "settings.json") == {"a": 1}
    assert result["reload_failed"] == ["runtime/settings.json"]
    assert result["restart_required"] is True
    assert result["errors"] == ["reload runtime/settings.json: cache refresh failed"]


def test_import_route_audits_a_restore_that_needs_a_restart(client, runtime, monkeypatch):
    from server.services import audit_log

    def broken():
        raise RuntimeError("cache refresh failed")

    monkeypatch.setitem(backup_svc._RELOAD_AFTER_RESTORE, "runtime/settings.json", broken)
    client.post("/login", data={"password": "test"}, follow_redirects=True)
    with client.session_transaction() as sess:
        csrf = sess["csrf_token"]
    blob = _tar({"runtime/settings.json": b'{"a": 1}'}, OMITTED)
    resp = client.post(
        "/admin/backup/import",
        data={"file": (io.BytesIO(blob), "b.tar.gz")},
        headers={"X-CSRF-Token": csrf},
        content_type="multipart/form-data",
    )
    body = resp.get_json()
    assert body["restart_required"] is True
    events = [e for e in audit_log.recent(limit=20) if e.get("kind") == "import"]
    assert events and events[0]["meta"]["restart_required"] is True
