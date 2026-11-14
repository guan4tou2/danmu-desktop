"""Combination table: credential restore holds its invariants across the grid.

Backup axis (how the archive presents the credential):
    included / omitted / no-manifest / partly-empty-fields / wrong-field-types /
    legacy-token / non-standard-webhook-name / case-only-name-variant
Target axis (the state of the server being restored onto):
    fresh / has-credentials / corrupt-file-with-env-auth-on /
    memory-vs-disk-mismatch / token-invalid / token-disabled / custom-webhook-path

Each cell below is one parametrized case. After a real (dry_run=False) restore it
asserts that none of these five things happened, except where a cell marks an
intentional exception (``exceptions=...`` with the invariant number and why):

    1. a target's still-valid credential was cleared
    2. an invalid credential became valid again
    3. connection auth was turned off without being listed
    4. a webhook without a URL was created
    5. a credential was left in a file a later default export carries out raw

Every cell asserts unpack raised nothing (``errors`` empty): the route turns an
exception into a 500, so "no errors" is itself part of the contract.

These assertions do not depend on filesystem case sensitivity.
"""

import io
import json
import tarfile

import pytest

from server import config as config_module
from server.services import backup as backup_svc
from server.services import fire_token, webhook, ws_auth
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


def _tar(members):
    buf = io.BytesIO()
    with tarfile.open(fileobj=buf, mode="w:gz") as tar:
        for name, data in members.items():
            info = tarfile.TarInfo(name)
            info.size = len(data)
            tar.addfile(info, io.BytesIO(data))
    return buf.getvalue()


def _members(raw):
    with tarfile.open(fileobj=io.BytesIO(raw), mode="r:gz") as tar:
        return {m.name: tar.extractfile(m).read() for m in tar.getmembers()}


@pytest.fixture()
def site(tmp_path, monkeypatch):
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
    yield rt, monkeypatch
    ws_auth._state.reset_for_tests()


def _write(rt, name, obj):
    (rt / name).write_text(json.dumps(obj), encoding="utf-8")


# ── per-kind effective-state probes ──────────────────────────────────────


def _effective(kind):
    if kind == "webhooks":
        svc = webhook.WebhookService()
        return {"hooks": {h["id"]: svc.get_hook(h["id"]) for h in svc.list_hooks()}}
    if kind == "ws_auth":
        st = ws_auth._state.current()
        return {"token": st.get("token", ""), "auth_on": bool(st.get("require_token"))}
    st = dict(fire_token._state) if fire_token._state is not None else fire_token.get_state()
    return {"token": st.get("token", ""), "auth_on": bool(st.get("enabled"))}


def _file_unusable(kind, rt, webhooks_name="webhooks.json"):
    name = {"webhooks": webhooks_name, "ws_auth": "ws_auth.json", "fire_token": "fire_token.json"}[
        kind
    ]
    _, unusable = backup_svc._target_state(kind, rt / name)
    return unusable


def _assert_no_raw_credentials_in_default_export(rt):
    """Invariant 5: a credential-free export carries no url / secret / token raw."""
    members = _members(backup_svc.pack(include_credentials=False))

    def scan(name, obj):
        if isinstance(obj, dict):
            for k, v in obj.items():
                if k in ("url", "secret", "token") and isinstance(v, str) and v:
                    raise AssertionError(f"inv5: raw {k} left in exported {name}")
                scan(name, v)
        elif isinstance(obj, list):
            for x in obj:
                scan(name, x)

    for name, data in members.items():
        if not name.startswith("runtime/"):
            continue
        try:
            scan(name, json.loads(data.decode("utf-8")))
        except (ValueError, UnicodeDecodeError):
            continue


# ── the grid ──────────────────────────────────────────────────────────────

INCLUDED = {"version": "1", "credentials": "included"}
OMITTED = {"version": "1", "credentials": "omitted"}


def _env_auth_on(monkeypatch):
    monkeypatch.setattr(config_module.Config, "WS_REQUIRE_TOKEN", True)
    monkeypatch.setattr(config_module.Config, "WS_AUTH_TOKEN", "env-token")
    monkeypatch.setenv("WS_REQUIRE_TOKEN", "true")
    monkeypatch.setenv("WS_AUTH_TOKEN", "env-token")


CELLS = [
    dict(
        id="included+fresh",
        kind="webhooks",
        setup=lambda rt, mp: _write(rt, "webhooks.json", []),
        archive={"runtime/webhooks.json": json.dumps([HOOK_A]).encode()},
        manifest=INCLUDED,
    ),
    dict(
        id="included+has-credentials",
        kind="webhooks",
        setup=lambda rt, mp: _write(rt, "webhooks.json", [HOOK_B]),
        archive={"runtime/webhooks.json": json.dumps([HOOK_A]).encode()},
        manifest=INCLUDED,
        # An included backup is authoritative: HOOK_B is intentionally dropped.
        exceptions={1: "included backup is authoritative for the whole list"},
    ),
    dict(
        id="omitted+has-credentials",
        kind="webhooks",
        setup=lambda rt, mp: _write(rt, "webhooks.json", [HOOK_A, HOOK_B]),
        archive={
            "runtime/webhooks.json": json.dumps(
                [dict(HOOK_A, url="", secret="", events=["on_poll_end"])]
            ).encode()
        },
        manifest=OMITTED,
    ),
    dict(
        id="no-manifest+has-credentials",
        kind="webhooks",
        setup=lambda rt, mp: _write(rt, "webhooks.json", [HOOK_A]),
        archive={"runtime/webhooks.json": json.dumps([dict(HOOK_A, url="", secret="")]).encode()},
        manifest=None,
    ),
    dict(
        id="partly-empty-fields+has-credentials",
        kind="webhooks",
        setup=lambda rt, mp: _write(rt, "webhooks.json", [HOOK_A]),
        archive={
            "runtime/webhooks.json": json.dumps(
                [HOOK_B, dict(HOOK_A, url="", secret="backup-only")]
            ).encode()
        },
        manifest=INCLUDED,
    ),
    dict(
        id="wrong-field-types+has-credentials",
        kind="webhooks",
        setup=lambda rt, mp: _write(rt, "webhooks.json", [HOOK_A]),
        archive={
            "runtime/webhooks.json": (
                b'[{"id":"aaaa1111","url":"","secret":"","events":["on_danmu"],'
                b'"success_count":1e999}]'
            )
        },
        manifest=OMITTED,
    ),
    dict(
        id="legacy-token+has-credentials",
        kind="fire_token",
        setup=lambda rt, mp: _write(
            rt, "fire_token.json", {"format": 2, "enabled": True, "token": "live-fire"}
        ),
        archive={"runtime/fire_token.json": b'{"format": 1, "enabled": true, "token": "old"}'},
        manifest=INCLUDED,
    ),
    dict(
        id="non-standard-webhook-name+fresh",
        kind="webhooks",
        setup=lambda rt, mp: _write(rt, "webhooks.json", []),
        archive={"runtime/old_hooks.json": json.dumps([HOOK_A]).encode()},
        manifest=INCLUDED,
    ),
    dict(
        id="case-only-name-variant+has-credentials",
        kind="ws_auth",
        setup=lambda rt, mp: _write(rt, "ws_auth.json", {"require_token": True, "token": "live"}),
        archive={"runtime/WS_AUTH.json": b'{"require_token": false, "token": ""}'},
        manifest=INCLUDED,
        # The variant is refused outright, so the store is left exactly as-is.
    ),
    dict(
        id="omitted+corrupt-file-with-env-auth-on",
        kind="ws_auth",
        setup=lambda rt, mp: (_env_auth_on(mp), (rt / "ws_auth.json").write_text("{bad")),
        archive={"runtime/ws_auth.json": b'{"require_token": false, "token": ""}'},
        manifest=OMITTED,
        expect_off_listed=True,
    ),
    dict(
        id="omitted+memory-vs-disk-mismatch",
        kind="ws_auth",
        setup=lambda rt, mp: _mem_disk_mismatch(rt),
        archive={"runtime/ws_auth.json": b'{"require_token": true, "token": ""}'},
        manifest=OMITTED,
    ),
    dict(
        id="included+token-invalid",
        kind="ws_auth",
        # require_token=True with an empty token is a state the loader rejects.
        setup=lambda rt, mp: (rt / "ws_auth.json").write_text(
            '{"require_token": true, "token": ""}'
        ),
        archive={"runtime/ws_auth.json": b'{"require_token": true, "token": "restored"}'},
        manifest=INCLUDED,
    ),
    dict(
        id="omitted+token-disabled",
        kind="fire_token",
        setup=lambda rt, mp: _write(
            rt, "fire_token.json", {"format": 2, "enabled": False, "token": "kept-fire"}
        ),
        archive={"runtime/fire_token.json": b'{"format": 2, "enabled": false, "token": ""}'},
        manifest=OMITTED,
    ),
    dict(
        id="included+custom-webhook-path",
        kind="webhooks",
        webhooks_name="custom_hooks.json",
        setup=lambda rt, mp: _write(rt, "custom_hooks.json", []),
        archive={"runtime/webhooks.json": json.dumps([HOOK_A]).encode()},
        manifest=INCLUDED,
    ),
]


def _mem_disk_mismatch(rt):
    _write(rt, "ws_auth.json", {"require_token": True, "token": "mem-token"})
    ws_auth.get_state()  # load into memory
    (rt / "ws_auth.json").write_text(
        json.dumps({"require_token": False, "token": ""}), encoding="utf-8"
    )


@pytest.mark.parametrize("cell", CELLS, ids=[c["id"] for c in CELLS])
def test_restore_keeps_every_invariant(cell, site):
    rt, monkeypatch = site
    kind = cell["kind"]
    webhooks_name = cell.get("webhooks_name", "webhooks.json")
    point_credential_stores(monkeypatch, rt, webhooks_name)

    cell["setup"](rt, monkeypatch)

    before = _effective(kind)
    unusable_before = _file_unusable(kind, rt, webhooks_name)

    members = dict(cell["archive"])
    if cell["manifest"] is not None:
        members["manifest.json"] = json.dumps(cell["manifest"]).encode()
    result = backup_svc.unpack(_tar(members), dry_run=False)

    assert not result["errors"], result  # no exception escaped to a 500
    after = _effective(kind)
    notes = {n["code"] for n in result["merged"]}
    exc = cell.get("exceptions", {})

    # Inv 4: no webhook without a URL is ever created.
    if kind == "webhooks":
        for hid, hook in after["hooks"].items():
            assert hook and hook.get("url"), f"inv4: url-less hook {hid}"

    # Inv 5: a later default export carries no credential out raw.
    _assert_no_raw_credentials_in_default_export(rt)

    # Inv 1: a still-valid credential is not cleared (unless a cell says the
    # backup is authoritative and so may replace it).
    if 1 not in exc:
        if kind == "webhooks":
            for hid, hook in before["hooks"].items():
                if hook and hook.get("url"):
                    assert (
                        after["hooks"].get(hid, {}).get("url")
                    ), f"inv1: dropped still-valid hook {hid}"
        else:
            if before["token"]:
                assert after["token"], "inv1: a live token was cleared"

    # Inv 2: an unusable on-disk credential never becomes active again — the
    # bytes are copied aside before the store is overwritten.
    if unusable_before and result["applied"]:
        assert list(rt.glob("*.corrupt-*")), "inv2: unusable file was not kept aside"

    # Inv 3: turning connection auth off is always listed.
    if cell.get("expect_off_listed"):
        assert before["auth_on"] and not after["auth_on"]
        off_note = "ws_auth_turned_off" if kind == "ws_auth" else "fire_token_off"
        assert off_note in notes, f"inv3: auth turned off without a note ({notes})"
    elif kind == "ws_auth" and 3 not in exc and before["auth_on"] and not after["auth_on"]:
        assert "ws_auth_turned_off" in notes, f"inv3: auth turned off without a note ({notes})"
