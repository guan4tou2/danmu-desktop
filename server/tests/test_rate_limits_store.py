"""Request rate limits saved from the admin panel (services/rate_limits.py).

Covers what the "send limits" batch changed: saved limits survive a
restart, all seven scopes are settable, Reset returns to the startup
values, the admin cannot lock themselves out, a 429 says when to retry,
and real /fire traffic shows up in the counters.
"""

import json

import pytest

from server.app import create_app
from server.services import rate_limits
from server.services.security import get_rate_limit_stats, rate_limiter, recent_violations
from server.services.ws_state import update_ws_client_count
from server.tests.conftest import TestConfig

PAYLOAD = {"text": "hello", "fontInfo": {"name": "NotoSansTC"}, "isImage": False}
ALL_SCOPES = {"fire", "fire_fingerprint", "fire_global", "fire_admin", "api", "admin", "login"}


@pytest.fixture()
def overlay_connected():
    update_ws_client_count(1)
    yield
    update_ws_client_count(0)


def login_helper(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)


def _csrf(client):
    login_helper(client)
    with client.session_transaction() as sess:
        return sess["csrf_token"]


def _post(client, url, payload):
    return client.post(url, json=payload, headers={"X-CSRF-Token": _csrf(client)})


def _fire(client, payload=None, headers=None, ip="1.1.1.1"):
    return client.post(
        "/fire",
        json=payload if payload is not None else PAYLOAD,
        headers=headers or {},
        environ_base={"REMOTE_ADDR": ip},
    )


# ── saving and restarting ────────────────────────────────────────────────────


def test_saved_limit_survives_a_restart(client, app):
    startup = app.config["FIRE_RATE_LIMIT"]
    assert (
        _post(
            client, "/admin/ratelimit/apply", {"scope": "fire", "limit": 7, "window": 30}
        ).status_code
        == 200
    )
    assert app.config["FIRE_RATE_LIMIT"] == 7

    # Drop the in-memory copy: the new app must get the limit from the file,
    # as a real restart would, not from this process's cache.
    rate_limits._state.reset_for_tests()
    restarted = create_app(TestConfig)  # same runtime/rate_limits.json

    assert restarted.config["FIRE_RATE_LIMIT"] == 7
    assert restarted.config["FIRE_RATE_WINDOW"] == 30
    # What Reset goes back to is still the environment value, not the save.
    assert restarted.config[rate_limits.BOOT_VALUES_KEY]["fire"]["limit"] == startup
    # Scopes nobody saved keep their startup values.
    assert restarted.config["API_RATE_LIMIT"] == app.config["API_RATE_LIMIT"]


def test_upgrade_without_a_file_changes_nothing(app):
    assert not rate_limits._state.path.exists()
    boot = app.config[rate_limits.BOOT_VALUES_KEY]
    assert set(boot) == ALL_SCOPES
    for scope, (limit_key, window_key) in rate_limits.SCOPES.items():
        assert app.config[limit_key] == boot[scope]["limit"]
        assert app.config[window_key] == boot[scope]["window"]


@pytest.mark.parametrize(
    "content",
    [
        "not json",
        json.dumps(["a", "list"]),
        json.dumps({"fire": {"limit": 0, "window": 60}}),  # below the minimum
        json.dumps({"fire": {"limit": 5, "window": 0}}),  # no such window
        json.dumps({"admin": {"limit": 1, "window": 60}}),  # would lock the panel
    ],
)
def test_unusable_file_or_entry_falls_back_to_startup_values(content):
    rate_limits._state.path.write_text(content, encoding="utf-8")
    rate_limits._state.reset_for_tests()

    app = create_app(TestConfig)

    boot = app.config[rate_limits.BOOT_VALUES_KEY]
    assert app.config["FIRE_RATE_LIMIT"] == boot["fire"]["limit"]
    assert app.config["ADMIN_RATE_LIMIT"] == boot["admin"]["limit"]


def test_one_bad_entry_does_not_take_the_others_down():
    """A single out-of-range scope must not void the file — nor be the reason
    the next save wipes the scopes that were fine."""
    rate_limits._state.path.write_text(
        json.dumps({"api": {"limit": 77, "window": 60}, "fire": {"limit": 5000, "window": 60}}),
        encoding="utf-8",
    )
    rate_limits._state.reset_for_tests()

    app = create_app(TestConfig)

    assert app.config["API_RATE_LIMIT"] == 77
    assert app.config["FIRE_RATE_LIMIT"] == app.config[rate_limits.BOOT_VALUES_KEY]["fire"]["limit"]

    rate_limits.set_scope(app.config, "login", 9, 300)

    on_disk = json.loads(rate_limits._state.path.read_text(encoding="utf-8"))
    assert on_disk == {"api": {"limit": 77, "window": 60}, "login": {"limit": 9, "window": 300}}


def test_file_that_is_not_json_is_kept_aside_not_overwritten():
    rate_limits._state.path.write_text("{ half a file", encoding="utf-8")
    rate_limits._state.reset_for_tests()
    app = create_app(TestConfig)

    rate_limits.set_scope(app.config, "login", 9, 300)

    kept = list(rate_limits._state.path.parent.glob("rate_limits.json.corrupt-*"))
    assert len(kept) == 1 and kept[0].read_text(encoding="utf-8") == "{ half a file"


def test_unknown_scope_in_file_does_not_discard_the_rest():
    rate_limits._state.path.write_text(
        json.dumps(
            {"from_a_newer_version": {"limit": 1, "window": 60}, "api": {"limit": 77, "window": 60}}
        ),
        encoding="utf-8",
    )
    rate_limits._state.reset_for_tests()

    assert create_app(TestConfig).config["API_RATE_LIMIT"] == 77


# ── the seven scopes ─────────────────────────────────────────────────────────


@pytest.mark.parametrize(
    "scope,limit_key",
    [
        ("fire_fingerprint", "FIRE_FINGERPRINT_RATE_LIMIT"),
        ("fire_global", "GLOBAL_FIRE_RATE_LIMIT"),
        ("fire_admin", "FIRE_ADMIN_RATE_LIMIT"),
    ],
)
def test_scopes_that_used_to_need_env_vars_are_settable(client, app, scope, limit_key):
    resp = _post(client, "/admin/ratelimit/apply", {"scope": scope, "limit": 9, "window": 10})
    assert resp.status_code == 200, resp.data
    assert resp.get_json() == {"scope": scope, "limit": 9, "window": 10, "persisted": True}
    assert app.config[limit_key] == 9


def test_a_window_from_the_environment_stays_saveable(client, app):
    """FIRE_RATE_WINDOW=45 is not one of the five offered windows. Changing
    only the count must still save — and the saved 45 must load after a restart."""
    app.config["FIRE_RATE_WINDOW"] = 45

    kept = _post(client, "/admin/ratelimit/apply", {"scope": "fire", "limit": 9, "window": 45})
    other = _post(client, "/admin/ratelimit/apply", {"scope": "fire", "limit": 9, "window": 50})

    assert kept.status_code == 200, kept.data
    assert other.status_code == 400  # neither offered nor in effect
    rate_limits._state.reset_for_tests()
    restarted = create_app(TestConfig)
    assert (restarted.config["FIRE_RATE_LIMIT"], restarted.config["FIRE_RATE_WINDOW"]) == (9, 45)


def test_only_the_room_wide_cap_can_be_switched_off(client, app):
    assert (
        _post(
            client, "/admin/ratelimit/apply", {"scope": "fire_global", "limit": 0, "window": 60}
        ).status_code
        == 200
    )
    assert app.config["GLOBAL_FIRE_RATE_LIMIT"] == 0
    for scope in ALL_SCOPES - {"fire_global"}:
        resp = _post(client, "/admin/ratelimit/apply", {"scope": scope, "limit": 0, "window": 60})
        assert resp.status_code == 400, scope


@pytest.mark.parametrize("scope", [["fire"], {"fire": 1}, 7, None, ""])
def test_scope_of_the_wrong_type_is_a_400_not_a_500(client, scope):
    resp = _post(client, "/admin/ratelimit/apply", {"scope": scope, "limit": 5, "window": 60})
    assert resp.status_code == 400
    if scope:  # None / "" mean "all scopes" for reset
        assert _post(client, "/admin/ratelimit/reset", {"scope": scope}).status_code == 400


def test_config_endpoint_reports_every_scope(client, app):
    _post(client, "/admin/ratelimit/apply", {"scope": "login", "limit": 9, "window": 300})

    scopes = client.get("/admin/ratelimit/config").get_json()["scopes"]

    assert set(scopes) == ALL_SCOPES
    assert scopes["login"]["limit"] == 9
    assert scopes["login"]["saved"] is True
    assert (
        scopes["login"]["default_limit"]
        == app.config[rate_limits.BOOT_VALUES_KEY]["login"]["limit"]
    )
    assert scopes["fire"]["saved"] is False
    assert scopes["fire_global"]["min"] == 0
    assert scopes["admin"]["min"] == 60
    # /admin/metrics shows the same numbers.
    metrics = client.get("/admin/metrics").get_json()["rate_limit_config"]
    assert set(metrics) == ALL_SCOPES
    assert metrics["login"] == {"limit": 9, "window": 300}


def test_config_endpoint_requires_login(client):
    assert client.get("/admin/ratelimit/config").status_code in (302, 401, 403)


# ── telling the admin when a save did not reach the disk ─────────────────────


def test_save_reports_that_it_was_written(client):
    resp = _post(client, "/admin/ratelimit/apply", {"scope": "fire", "limit": 7, "window": 30})
    assert resp.get_json()["persisted"] is True
    assert _post(client, "/admin/ratelimit/reset", {}).get_json()["persisted"] is True


def test_save_on_an_unwritable_disk_says_so(client, app, monkeypatch):
    """The limit still takes effect, but the response must not claim it is saved."""

    def refuse(_state):
        raise OSError("read-only file system")

    monkeypatch.setattr(rate_limits._state, "_atomic_write", refuse)

    resp = _post(client, "/admin/ratelimit/apply", {"scope": "fire", "limit": 7, "window": 30})

    assert resp.status_code == 200
    assert resp.get_json()["persisted"] is False
    assert app.config["FIRE_RATE_LIMIT"] == 7
    assert _post(client, "/admin/ratelimit/reset", {}).get_json()["persisted"] is True


# ── reset ────────────────────────────────────────────────────────────────────


def test_reset_returns_every_scope_to_its_startup_value(client, app):
    boot = app.config[rate_limits.BOOT_VALUES_KEY]
    for scope in ("fire", "login", "fire_global"):
        assert (
            _post(
                client, "/admin/ratelimit/apply", {"scope": scope, "limit": 99, "window": 3600}
            ).status_code
            == 200
        )

    resp = _post(client, "/admin/ratelimit/reset", {})

    assert resp.status_code == 200
    scopes = resp.get_json()["scopes"]
    for scope, (limit_key, window_key) in rate_limits.SCOPES.items():
        assert app.config[limit_key] == boot[scope]["limit"]
        assert app.config[window_key] == boot[scope]["window"]
        assert scopes[scope]["saved"] is False
    # …and stays reset after a restart (read back from the file, not the cache).
    rate_limits._state.reset_for_tests()
    assert create_app(TestConfig).config["FIRE_RATE_LIMIT"] == boot["fire"]["limit"]


def test_reset_can_target_one_scope(client, app):
    boot = app.config[rate_limits.BOOT_VALUES_KEY]
    _post(client, "/admin/ratelimit/apply", {"scope": "fire", "limit": 99, "window": 60})
    _post(client, "/admin/ratelimit/apply", {"scope": "api", "limit": 98, "window": 60})

    assert _post(client, "/admin/ratelimit/reset", {"scope": "fire"}).status_code == 200

    assert app.config["FIRE_RATE_LIMIT"] == boot["fire"]["limit"]
    assert app.config["API_RATE_LIMIT"] == 98
    assert _post(client, "/admin/ratelimit/reset", {"scope": "nope"}).status_code == 400


# ── not locking yourself out ─────────────────────────────────────────────────


def test_admin_limit_has_a_floor(client, app):
    before = app.config["ADMIN_RATE_LIMIT"]
    resp = _post(client, "/admin/ratelimit/apply", {"scope": "admin", "limit": 1, "window": 60})
    assert resp.status_code == 400
    assert app.config["ADMIN_RATE_LIMIT"] == before
    assert (
        _post(
            client, "/admin/ratelimit/apply", {"scope": "admin", "limit": 60, "window": 60}
        ).status_code
        == 200
    )


def test_limits_stay_editable_when_the_admin_bucket_is_empty(client, app):
    """Set too low through the environment, the admin limit must still be fixable."""
    token = _csrf(client)
    app.config["ADMIN_RATE_LIMIT"] = 1
    app.config["ADMIN_RATE_WINDOW"] = 3600
    assert client.get("/admin/metrics").status_code == 200  # spends the only slot
    assert client.get("/admin/metrics").status_code == 429

    assert client.get("/admin/ratelimit/config").status_code == 200
    raised = client.post(
        "/admin/ratelimit/apply",
        json={"scope": "admin", "limit": 300, "window": 60},
        headers={"X-CSRF-Token": token},
    )
    assert raised.status_code == 200
    assert (
        client.post(
            "/admin/ratelimit/reset", json={"scope": "api"}, headers={"X-CSRF-Token": token}
        ).status_code
        == 200
    )


# ── Retry-After ──────────────────────────────────────────────────────────────


def test_fire_429_says_when_to_retry(app, client, overlay_connected):
    app.config["FIRE_RATE_LIMIT"] = 1
    app.config["FIRE_RATE_WINDOW"] = 30
    assert _fire(client).status_code == 200

    blocked = _fire(client)

    assert blocked.status_code == 429
    assert 1 <= int(blocked.headers["Retry-After"]) <= 30


def test_decorated_endpoint_429_says_when_to_retry(client, app):
    login_helper(client)
    app.config["ADMIN_RATE_LIMIT"] = 1
    app.config["ADMIN_RATE_WINDOW"] = 10
    assert client.get("/admin/metrics").status_code == 200

    blocked = client.get("/admin/metrics")

    assert blocked.status_code == 429
    assert 1 <= int(blocked.headers["Retry-After"]) <= 10


def test_deny_listed_ip_gets_no_retry_after(app, client, overlay_connected):
    from server.services import ratelimit_ip

    ratelimit_ip.set_state({"denylist": ["9.9.9.9"]})

    blocked = _fire(client, ip="9.9.9.9")

    assert blocked.status_code == 429
    assert "Retry-After" not in blocked.headers


def test_retry_after_counts_down_to_the_slot_that_frees_first():
    rate_limiter.reset()
    assert rate_limiter.allow("t:a", 2, 100)
    assert rate_limiter.allow("t:a", 2, 100)
    assert not rate_limiter.allow("t:a", 2, 100)
    assert 99 <= rate_limiter.retry_after("t:a", 2, 100) <= 100
    # A bucket with room left never asks anyone to wait a whole window.
    assert rate_limiter.retry_after("t:empty", 2, 100) == 1


def test_retry_after_when_the_limit_was_just_lowered(monkeypatch):
    """Five requests already in the bucket, limit cut to 2: a slot opens only
    once four of them have left, i.e. when the fourth-oldest expires."""
    import server.services.security as security

    rate_limiter.reset()
    clock = [1000.0]
    monkeypatch.setattr(security.time, "time", lambda: clock[0])
    for _ in range(5):  # at t = 1000, 1010, 1020, 1030, 1040
        assert rate_limiter.allow("t:lowered", 5, 100)
        clock[0] += 10
    clock[0] = 1045.0

    assert not rate_limiter.allow("t:lowered", 2, 100)
    assert rate_limiter.retry_after("t:lowered", 2, 100) == 85  # 1030 + 100 - 1045


# ── /fire traffic in the counters ────────────────────────────────────────────


def test_fire_requests_are_counted(app, client, overlay_connected):
    app.config["FIRE_RATE_LIMIT"] = 2
    before = get_rate_limit_stats()["fire"]

    assert _fire(client).status_code == 200
    assert _fire(client).status_code == 200
    assert _fire(client).status_code == 429

    after = get_rate_limit_stats()
    assert after["fire"]["hits"] == before["hits"] + 2
    assert after["fire"]["violations"] == before["violations"] + 1
    latest = recent_violations(5)[0]
    assert latest["scope"] == "fire" and latest["ip"] == "1.1.1.1"


def test_blocked_requests_name_the_limit_that_stopped_them(app, client, overlay_connected):
    app.config["FIRE_RATE_LIMIT"] = 100
    app.config["FIRE_FINGERPRINT_RATE_LIMIT"] = 1
    payload = {**PAYLOAD, "fingerprint": "fp-same-device"}
    assert _fire(client, payload, ip="1.1.1.1").status_code == 200

    assert _fire(client, payload, ip="2.2.2.2").status_code == 429  # same device, new IP

    stats = get_rate_limit_stats()
    assert stats["fire_fingerprint"]["violations"] == 1
    assert stats["fire"]["violations"] == 0
    assert recent_violations(5)[0]["scope"] == "fire_fingerprint"


def test_room_wide_cap_is_counted_under_its_own_scope(app, client, overlay_connected):
    app.config["FIRE_RATE_LIMIT"] = 100
    app.config["GLOBAL_FIRE_RATE_LIMIT"] = 1
    assert _fire(client, ip="1.1.1.1").status_code == 200

    blocked = _fire(client, ip="2.2.2.2")

    assert blocked.status_code == 429
    assert "Retry-After" in blocked.headers  # refused before the body is read
    assert get_rate_limit_stats()["fire_global"]["violations"] == 1


def test_one_request_is_one_hit_in_the_totals(app, client, overlay_connected):
    app.config["FIRE_RATE_LIMIT"] = 100
    app.config["FIRE_FINGERPRINT_RATE_LIMIT"] = 100
    app.config["GLOBAL_FIRE_RATE_LIMIT"] = 100
    before = get_rate_limit_stats()["totals"]["hits"]

    assert _fire(client, {**PAYLOAD, "fingerprint": "fp-1"}).status_code == 200

    # Checked against three limits, still one request.
    assert get_rate_limit_stats()["totals"]["hits"] == before + 1


def test_totals_count_a_request_by_how_it_ended(app, client, overlay_connected):
    """Two requests from one device on two networks, device limit 1: the second
    passes the per-IP check and is then refused. It is one blocked request, not
    one allowed and one blocked."""
    app.config["FIRE_RATE_LIMIT"] = 100
    app.config["FIRE_FINGERPRINT_RATE_LIMIT"] = 1
    payload = {**PAYLOAD, "fingerprint": "fp-shared"}
    before = get_rate_limit_stats()["totals"]

    assert _fire(client, payload, ip="1.1.1.1").status_code == 200
    assert _fire(client, payload, ip="2.2.2.2").status_code == 429

    after = get_rate_limit_stats()
    assert after["totals"]["hits"] == before["hits"] + 1
    assert after["totals"]["violations"] == before["violations"] + 1
    assert after["fire"]["hits"] == 2  # both did pass the per-IP check


def test_token_lane_is_counted_separately(app, client, overlay_connected):
    app.config["FIRE_ADMIN_TOKEN"] = "admin-secret"
    app.config["FIRE_ADMIN_RATE_LIMIT"] = 1
    headers = {"X-Fire-Token": "admin-secret"}
    assert _fire(client, headers=headers).status_code == 200

    blocked = _fire(client, headers=headers)

    assert blocked.status_code == 429
    assert "Retry-After" in blocked.headers
    stats = get_rate_limit_stats()
    assert stats["fire_admin"]["hits"] == 1
    assert stats["fire_admin"]["violations"] == 1
    assert stats["fire"]["hits"] == 0


def test_per_sender_fire_limits_get_no_sizing_suggestion(client, app):
    """Suggestions are sized from a scope's total traffic — meaningless for a
    limit that applies to one viewer, one device or one integration."""
    import time as _time

    from server.services.security import _rate_buckets, _rate_stats_hits, _rate_stats_lock

    login_helper(client)
    start = (int(_time.time()) // 300) * 300
    with _rate_stats_lock:
        for scope in ("fire", "fire_fingerprint", "fire_admin", "fire_global"):
            for i in range(24):
                _rate_buckets[scope].append([float(start - i * 300), 300])
            _rate_stats_hits[scope] = 24 * 300
    for key in (
        "FIRE_RATE_LIMIT",
        "FIRE_FINGERPRINT_RATE_LIMIT",
        "FIRE_ADMIN_RATE_LIMIT",
        "GLOBAL_FIRE_RATE_LIMIT",
    ):
        app.config[key] = 10
    app.config["ADMIN_RATE_LIMIT"] = 9999

    limits = client.get("/admin/metrics").get_json()["rate_limits"]

    for scope in ("fire", "fire_fingerprint", "fire_admin"):
        assert limits[scope]["suggestion"] is None, scope
    assert limits["fire_global"]["suggestion"] is not None


def test_fire_token_page_shows_the_real_ceiling(client, app):
    login_helper(client)
    app.config["FIRE_ADMIN_RATE_LIMIT"] = 50
    app.config["FIRE_ADMIN_RATE_WINDOW"] = 30

    usage = client.get("/admin/integrations/fire-token/usage").get_json()

    assert usage["ceiling_per_min"] == 100
    # A small limit over a long window still reads as a limit, not as "none".
    app.config["FIRE_ADMIN_RATE_LIMIT"] = 5
    app.config["FIRE_ADMIN_RATE_WINDOW"] = 3600
    assert client.get("/admin/integrations/fire-token/usage").get_json()["ceiling_per_min"] == 1
