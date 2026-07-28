"""Tests for the ratelimit IP allow/deny feature.

Covers three layers:

1. Service (server/services/ratelimit_ip.py) — normalisation, persistence,
   check_ip() precedence.
2. Admin routes (GET/PUT /admin/ratelimit/ip-rules) — auth, CSRF, validation.
3. rate_limit() decorator short-circuit — deny→429, allow→bypass counting.
"""

from __future__ import annotations

import json

import pytest
from flask import Flask, jsonify

from server.services import ratelimit_ip
from server.services.security import rate_limiter


# ---------------------------------------------------------------------------
# Helpers (mirror test_admin_routes.py)
# ---------------------------------------------------------------------------


def login(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)


def csrf_token(client):
    login(client)
    with client.session_transaction() as sess:
        return sess["csrf_token"]


# ---------------------------------------------------------------------------
# Service layer
# ---------------------------------------------------------------------------


def test_default_state_is_empty_lists():
    state = ratelimit_ip.get_state()
    assert state == {"allowlist": [], "denylist": []}


def test_set_state_normalises_bare_ip_to_cidr():
    new = ratelimit_ip.set_state({"allowlist": ["1.2.3.4"], "denylist": ["10.0.0.0/8"]})
    assert new["allowlist"] == ["1.2.3.4/32"]
    assert new["denylist"] == ["10.0.0.0/8"]


def test_set_state_deduplicates_and_strips_blank_entries():
    new = ratelimit_ip.set_state({"allowlist": ["1.2.3.4", "1.2.3.4/32", "", " "]})
    assert new["allowlist"] == ["1.2.3.4/32"]


def test_set_state_rejects_invalid_cidr():
    with pytest.raises(ValueError, match="Invalid allowlist entry: notanip"):
        ratelimit_ip.set_state({"allowlist": ["notanip"]})


def test_set_state_rejects_non_list_entries():
    with pytest.raises(ValueError, match="allowlist must be a list"):
        ratelimit_ip.set_state({"allowlist": "1.2.3.4"})


def test_set_state_partial_patch_leaves_untouched_list_alone():
    ratelimit_ip.set_state({"allowlist": ["1.2.3.4"], "denylist": ["9.9.9.9"]})
    ratelimit_ip.set_state({"allowlist": ["5.6.7.8"]})
    state = ratelimit_ip.get_state()
    assert state["allowlist"] == ["5.6.7.8/32"]
    assert state["denylist"] == ["9.9.9.9/32"]


def test_set_state_enforces_max_entries():
    entries = [f"10.0.0.{i}" for i in range(0, 256)] + ["10.0.1.0"]
    with pytest.raises(ValueError, match="exceeds 256 entries"):
        ratelimit_ip.set_state({"allowlist": entries})


def test_set_state_persists_to_disk():
    ratelimit_ip.set_state({"allowlist": ["1.2.3.4"]})
    on_disk = json.loads(ratelimit_ip._STATE_FILE.read_text(encoding="utf-8"))
    assert on_disk["allowlist"] == ["1.2.3.4/32"]


def test_check_ip_returns_none_when_no_rules():
    assert ratelimit_ip.check_ip("1.2.3.4") is None


def test_check_ip_returns_allow_for_allowlisted_ip():
    ratelimit_ip.set_state({"allowlist": ["10.0.0.0/8"]})
    assert ratelimit_ip.check_ip("10.5.5.5") == "allow"


def test_check_ip_returns_deny_for_denylisted_ip():
    ratelimit_ip.set_state({"denylist": ["1.2.3.4"]})
    assert ratelimit_ip.check_ip("1.2.3.4") == "deny"


def test_check_ip_allow_wins_over_deny():
    ratelimit_ip.set_state({
        "allowlist": ["10.0.0.1"],
        "denylist": ["10.0.0.0/24"],
    })
    assert ratelimit_ip.check_ip("10.0.0.1") == "allow"
    assert ratelimit_ip.check_ip("10.0.0.2") == "deny"


def test_check_ip_handles_unknown_or_malformed():
    ratelimit_ip.set_state({"denylist": ["1.2.3.4"]})
    assert ratelimit_ip.check_ip("") is None
    assert ratelimit_ip.check_ip("unknown") is None
    assert ratelimit_ip.check_ip("not-an-ip") is None


def test_check_ip_ipv6_cidr():
    ratelimit_ip.set_state({"denylist": ["2001:db8::/32"]})
    assert ratelimit_ip.check_ip("2001:db8:1::1") == "deny"
    assert ratelimit_ip.check_ip("2001:dead::1") is None


# ---------------------------------------------------------------------------
# Admin routes
# ---------------------------------------------------------------------------


def test_get_ip_rules_requires_login(client):
    resp = client.get("/admin/ratelimit/ip-rules")
    assert resp.status_code in (302, 401, 403)


def test_get_ip_rules_returns_current_state(client):
    ratelimit_ip.set_state({"allowlist": ["1.2.3.4"], "denylist": ["5.6.7.8/24"]})
    login(client)
    resp = client.get("/admin/ratelimit/ip-rules")
    assert resp.status_code == 200
    body = resp.get_json()
    assert body["allowlist"] == ["1.2.3.4/32"]
    assert body["denylist"] == ["5.6.7.0/24"]


def test_put_ip_rules_requires_login(client):
    resp = client.put("/admin/ratelimit/ip-rules", json={"allowlist": ["1.2.3.4"]})
    assert resp.status_code in (302, 401, 403)


def test_put_ip_rules_requires_csrf(client):
    login(client)
    resp = client.put("/admin/ratelimit/ip-rules", json={"allowlist": ["1.2.3.4"]})
    assert resp.status_code == 403


def test_put_ip_rules_updates_state(client):
    token = csrf_token(client)
    resp = client.put(
        "/admin/ratelimit/ip-rules",
        json={"allowlist": ["1.2.3.4"], "denylist": ["10.0.0.0/8"]},
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 200
    body = resp.get_json()
    assert body["allowlist"] == ["1.2.3.4/32"]
    assert body["denylist"] == ["10.0.0.0/8"]
    # And the service reflects it.
    assert ratelimit_ip.get_state() == body


def test_put_ip_rules_rejects_empty_payload(client):
    token = csrf_token(client)
    resp = client.put(
        "/admin/ratelimit/ip-rules",
        json={},
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 400


def test_put_ip_rules_rejects_non_object_body(client):
    token = csrf_token(client)
    resp = client.put(
        "/admin/ratelimit/ip-rules",
        json=["1.2.3.4"],
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 400


def test_put_ip_rules_rejects_invalid_cidr(client):
    token = csrf_token(client)
    resp = client.put(
        "/admin/ratelimit/ip-rules",
        json={"allowlist": ["not-an-ip"]},
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 400
    assert "error" in resp.get_json()


def test_put_ip_rules_partial_patch(client):
    ratelimit_ip.set_state({"allowlist": ["1.1.1.1"], "denylist": ["2.2.2.2"]})
    token = csrf_token(client)
    resp = client.put(
        "/admin/ratelimit/ip-rules",
        json={"allowlist": []},
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 200
    body = resp.get_json()
    assert body["allowlist"] == []
    assert body["denylist"] == ["2.2.2.2/32"]  # untouched


# ---------------------------------------------------------------------------
# rate_limit() decorator short-circuit
# ---------------------------------------------------------------------------


@pytest.fixture
def rl_app():
    """Minimal Flask app with a single rate-limited endpoint."""
    from server.services.security import rate_limit as rl_decorator

    app = Flask(__name__)
    app.config["TEST_RATE_LIMIT"] = 1
    app.config["TEST_RATE_WINDOW"] = 60

    @app.route("/probe")
    @rl_decorator("probe_test", "TEST_RATE_LIMIT", "TEST_RATE_WINDOW")
    def probe():
        return jsonify({"ok": True})

    rate_limiter.reset()
    return app


def test_rate_limit_denylist_returns_429_immediately(rl_app):
    ratelimit_ip.set_state({"denylist": ["1.2.3.4"]})
    with rl_app.test_client() as c:
        r = c.get("/probe", environ_base={"REMOTE_ADDR": "1.2.3.4"})
        assert r.status_code == 429
        # And a second request still 429s without consuming budget — even a
        # fresh IP inside the same /24 should succeed once (limit=1).
        r2 = c.get("/probe", environ_base={"REMOTE_ADDR": "9.9.9.9"})
        assert r2.status_code == 200


def test_rate_limit_allowlist_bypasses_count(rl_app):
    ratelimit_ip.set_state({"allowlist": ["10.0.0.0/8"]})
    with rl_app.test_client() as c:
        # limit=1, but allowlisted IP can hit 5 times in a row.
        for _ in range(5):
            r = c.get("/probe", environ_base={"REMOTE_ADDR": "10.1.2.3"})
            assert r.status_code == 200


def test_rate_limit_no_rule_uses_normal_limiter(rl_app):
    with rl_app.test_client() as c:
        r1 = c.get("/probe", environ_base={"REMOTE_ADDR": "8.8.8.8"})
        assert r1.status_code == 200
        r2 = c.get("/probe", environ_base={"REMOTE_ADDR": "8.8.8.8"})
        assert r2.status_code == 429


def test_rate_limit_allow_wins_over_deny(rl_app):
    ratelimit_ip.set_state({
        "allowlist": ["10.0.0.1"],
        "denylist": ["10.0.0.0/24"],
    })
    with rl_app.test_client() as c:
        r_allow = c.get("/probe", environ_base={"REMOTE_ADDR": "10.0.0.1"})
        assert r_allow.status_code == 200
        r_deny = c.get("/probe", environ_base={"REMOTE_ADDR": "10.0.0.2"})
        assert r_deny.status_code == 429
