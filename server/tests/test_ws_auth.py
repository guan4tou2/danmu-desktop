# pyright: reportMissingImports=false

"""Tests for server.services.ws_auth and /admin/ws-auth routes.

The `_isolate_ws_auth` autouse fixture in conftest.py redirects _STATE_FILE
to a per-test tmp path and resets the in-memory cache, so each test starts
clean and nothing leaks to the real runtime/ws_auth.json.
"""

import json

import pytest

from server.config import Config  # ty: ignore[unresolved-import]
from server.services import ws_auth  # ty: ignore[unresolved-import]

# ── 1. Service: seed from env on first load ──────────────────────────────
#
# These tests require the raw seeding path (no pre-populated disabled
# state), so they opt out of the conftest autouse fixture via the
# `ws_auth_raw_seed` marker.


@pytest.mark.ws_auth_raw_seed
def test_get_state_seeds_secure_by_default_when_env_empty(monkeypatch):
    """Fresh install — no env vars set at all → secure-on with generated token."""
    monkeypatch.delenv("WS_REQUIRE_TOKEN", raising=False)
    monkeypatch.delenv("WS_AUTH_TOKEN", raising=False)
    monkeypatch.setattr(Config, "WS_REQUIRE_TOKEN", False)
    monkeypatch.setattr(Config, "WS_AUTH_TOKEN", "")
    state = ws_auth.get_state()
    assert state["require_token"] is True
    assert len(state["token"]) >= 16  # secrets.token_urlsafe(24) yields ~32 chars


@pytest.mark.ws_auth_raw_seed
def test_get_state_respects_explicit_env_disable(monkeypatch):
    """User explicitly set WS_REQUIRE_TOKEN=false in env → honour it.

    v4.7 upgrade case + CI smoke test case: an existing deploy that
    intentionally ran with token auth disabled shouldn't silently flip
    closed, and CI pipelines passing `-e WS_REQUIRE_TOKEN=false` need the
    smoke test to connect without a token.
    """
    monkeypatch.setenv("WS_REQUIRE_TOKEN", "false")
    monkeypatch.delenv("WS_AUTH_TOKEN", raising=False)
    monkeypatch.setattr(Config, "WS_REQUIRE_TOKEN", False)
    monkeypatch.setattr(Config, "WS_AUTH_TOKEN", "")
    state = ws_auth.get_state()
    assert state["require_token"] is False
    assert state["token"] == ""


@pytest.mark.ws_auth_raw_seed
def test_get_state_preserves_env_opt_out_with_token(monkeypatch):
    """Explicit false + token value set → honour the disabled posture."""
    monkeypatch.setenv("WS_REQUIRE_TOKEN", "false")
    monkeypatch.setenv("WS_AUTH_TOKEN", "legacy-token-user-had-set")
    monkeypatch.setattr(Config, "WS_REQUIRE_TOKEN", False)
    monkeypatch.setattr(Config, "WS_AUTH_TOKEN", "legacy-token-user-had-set")
    state = ws_auth.get_state()
    assert state["require_token"] is False
    assert state["token"] == "legacy-token-user-had-set"


@pytest.mark.ws_auth_raw_seed
def test_get_state_generates_token_when_require_but_no_token(monkeypatch, caplog):
    """WS_REQUIRE_TOKEN=true but WS_AUTH_TOKEN empty → generate + warn."""
    monkeypatch.setenv("WS_REQUIRE_TOKEN", "true")
    monkeypatch.delenv("WS_AUTH_TOKEN", raising=False)
    monkeypatch.setattr(Config, "WS_REQUIRE_TOKEN", True)
    monkeypatch.setattr(Config, "WS_AUTH_TOKEN", "")
    import logging

    with caplog.at_level(logging.WARNING):
        state = ws_auth.get_state()
    assert state["require_token"] is True
    assert len(state["token"]) >= 16
    assert any("WS_AUTH_TOKEN empty" in r.message for r in caplog.records)


# ── 2. Service: persistence across calls ─────────────────────────────────


@pytest.mark.ws_auth_raw_seed
def test_get_state_caches_after_first_load(monkeypatch):
    """Calling get_state twice doesn't re-read the file (in-memory cache)."""
    monkeypatch.setenv("WS_REQUIRE_TOKEN", "true")
    monkeypatch.setenv("WS_AUTH_TOKEN", "first-call-token")
    monkeypatch.setattr(Config, "WS_REQUIRE_TOKEN", True)
    monkeypatch.setattr(Config, "WS_AUTH_TOKEN", "first-call-token")

    first = ws_auth.get_state()

    # Now clobber Config to something different — cached state should not
    # be affected because we loaded from file (which was seeded) not env.
    monkeypatch.setattr(Config, "WS_AUTH_TOKEN", "clobbered-after")

    second = ws_auth.get_state()
    assert first == second
    assert second["token"] == "first-call-token"


def test_set_state_persists_to_file():
    ws_auth.set_state(require_token=True, token="abc12345xyz")
    with open(ws_auth._STATE_FILE) as f:
        raw = json.load(f)
    assert raw == {"require_token": True, "token": "abc12345xyz"}


def test_set_state_rejects_require_without_token():
    with pytest.raises(ValueError):
        ws_auth.set_state(require_token=True, token="")


def test_set_state_allows_disable_with_empty_token():
    # When disabling, empty token is fine — there's nothing to authenticate.
    state = ws_auth.set_state(require_token=False, token="")
    assert state == {"require_token": False, "token": ""}


def test_set_state_returns_copy_not_reference():
    returned = ws_auth.set_state(require_token=True, token="mytoken-xyz")
    returned["token"] = "mutated"
    # Cache in service should not be affected by caller mutation
    assert ws_auth.get_state()["token"] == "mytoken-xyz"


def test_rotate_token_preserves_require_flag():
    ws_auth.set_state(require_token=True, token="original-token")
    rotated = ws_auth.rotate_token()
    assert rotated["require_token"] is True
    assert rotated["token"] != "original-token"
    assert len(rotated["token"]) >= 16


def test_rotate_token_even_when_disabled():
    """Rotating while disabled is fine — state just updates the token."""
    ws_auth.set_state(require_token=False, token="")
    rotated = ws_auth.rotate_token()
    assert rotated["require_token"] is False
    # A fresh token is generated even though auth isn't required, so admins
    # can pre-stage it before flipping require_token on.
    assert len(rotated["token"]) >= 16


# ── 3. Service: file corruption recovery ──────────────────────────────────


@pytest.mark.ws_auth_raw_seed
def test_malformed_json_recovers_by_reseeding(monkeypatch):
    """A corrupt runtime file should not crash boot — re-seed instead."""
    monkeypatch.delenv("WS_REQUIRE_TOKEN", raising=False)
    monkeypatch.delenv("WS_AUTH_TOKEN", raising=False)
    monkeypatch.setattr(Config, "WS_REQUIRE_TOKEN", False)
    monkeypatch.setattr(Config, "WS_AUTH_TOKEN", "")
    ws_auth._STATE_FILE.parent.mkdir(parents=True, exist_ok=True)
    ws_auth._STATE_FILE.write_text("{not valid json")

    state = ws_auth.get_state()
    assert state["require_token"] in (True, False)  # secure-default either way
    # File should be rewritten with valid JSON
    assert json.loads(ws_auth._STATE_FILE.read_text())["require_token"] is True


@pytest.mark.ws_auth_raw_seed
def test_missing_keys_recovers_by_reseeding(monkeypatch):
    monkeypatch.delenv("WS_REQUIRE_TOKEN", raising=False)
    monkeypatch.delenv("WS_AUTH_TOKEN", raising=False)
    monkeypatch.setattr(Config, "WS_REQUIRE_TOKEN", False)
    monkeypatch.setattr(Config, "WS_AUTH_TOKEN", "")
    ws_auth._STATE_FILE.parent.mkdir(parents=True, exist_ok=True)
    ws_auth._STATE_FILE.write_text('{"unrelated": "garbage"}')

    state = ws_auth.get_state()
    assert state["require_token"] is True  # re-seeded secure-by-default
    assert state["token"]


# ── 4. Admin HTTP route ──────────────────────────────────────────────────


@pytest.fixture()
def logged_client(client):
    with client.session_transaction() as sess:
        sess["logged_in"] = True
        sess["csrf_token"] = "test-csrf"
    return client


def _csrf_headers():
    return {
        "X-CSRF-Token": "test-csrf",
        "Content-Type": "application/json",
    }


def test_route_requires_login(client):
    res = client.get("/admin/ws-auth")
    # require_login returns 302 redirect to login (HTML session) or 401 (JSON)
    assert res.status_code in (302, 401, 403)


def test_route_get_returns_current_state(logged_client):
    ws_auth.set_state(require_token=True, token="getme-token12345")
    res = logged_client.get("/admin/ws-auth")
    assert res.status_code == 200
    data = res.get_json()
    assert data["require_token"] is True
    assert data["token"] == "getme-token12345"


def test_route_post_updates_state(logged_client):
    res = logged_client.post(
        "/admin/ws-auth",
        data=json.dumps({"require_token": True, "token": "newly-set-token"}),
        headers=_csrf_headers(),
    )
    assert res.status_code == 200
    data = res.get_json()
    assert data["require_token"] is True
    assert data["token"] == "newly-set-token"
    # And it persists
    assert ws_auth.get_state()["token"] == "newly-set-token"


def test_route_post_rejects_require_without_token(logged_client):
    res = logged_client.post(
        "/admin/ws-auth",
        data=json.dumps({"require_token": True, "token": ""}),
        headers=_csrf_headers(),
    )
    assert res.status_code == 400
    data = res.get_json()
    assert "Validation failed" in data["error"]


def test_route_post_rejects_invalid_token_chars(logged_client):
    # Newlines and control chars should be rejected by the schema regex
    res = logged_client.post(
        "/admin/ws-auth",
        data=json.dumps({"require_token": True, "token": "has\nnewline"}),
        headers=_csrf_headers(),
    )
    assert res.status_code == 400


def test_route_post_accepts_disable_with_empty_token(logged_client):
    res = logged_client.post(
        "/admin/ws-auth",
        data=json.dumps({"require_token": False, "token": ""}),
        headers=_csrf_headers(),
    )
    assert res.status_code == 200
    assert ws_auth.get_state()["require_token"] is False


def test_route_rotate_generates_new_token(logged_client):
    ws_auth.set_state(require_token=True, token="before-rotate-xyz")
    res = logged_client.post("/admin/ws-auth/rotate", headers=_csrf_headers())
    assert res.status_code == 200
    data = res.get_json()
    assert data["require_token"] is True
    assert data["token"] != "before-rotate-xyz"
    assert len(data["token"]) >= 16


def test_route_post_requires_csrf(logged_client):
    res = logged_client.post(
        "/admin/ws-auth",
        data=json.dumps({"require_token": False, "token": ""}),
        headers={"Content-Type": "application/json"},  # no CSRF
    )
    assert res.status_code in (400, 403)


# ── 5. WS handler integration — per-connection read ──────────────────────


def test_ws_handler_reads_live_state(monkeypatch):
    """_is_authorized() should see admin flips without server restart.

    We verify the contract by checking that get_state() returns a fresh
    copy after set_state mutations — the ws_handler internals call
    get_state() per connection, so this contract is sufficient.
    """
    ws_auth.set_state(require_token=True, token="phase-one-token")
    assert ws_auth.get_state()["token"] == "phase-one-token"

    # Admin flips the token
    ws_auth.set_state(require_token=True, token="phase-two-token")
    # Next WS connection will see the new value
    assert ws_auth.get_state()["token"] == "phase-two-token"

    # Admin disables entirely
    ws_auth.set_state(require_token=False, token="")
    assert ws_auth.get_state()["require_token"] is False
