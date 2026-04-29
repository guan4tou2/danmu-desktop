"""HTTP-level tests for admin routes not covered by existing unit tests.

Covers: /admin/filters/*, /admin/poll/*, /admin/metrics
"""

import pytest

from server.services.filter_engine import FilterEngine

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------


def login(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)


def csrf_token(client):
    login(client)
    with client.session_transaction() as sess:
        return sess["csrf_token"]


def authed_post(client, url, payload):
    token = csrf_token(client)
    return client.post(url, json=payload, headers={"X-CSRF-Token": token})


def authed_get(client, url):
    login(client)
    return client.get(url)


# ---------------------------------------------------------------------------
# Fixtures
# ---------------------------------------------------------------------------


@pytest.fixture(autouse=True)
def reset_filter_engine(tmp_path):
    FilterEngine._instance = None
    engine = FilterEngine(path=str(tmp_path / "rules.json"))
    yield engine
    FilterEngine._instance = None


@pytest.fixture(autouse=True)
def reset_poll():
    from server.services.poll import poll_service

    poll_service.reset()
    yield
    poll_service.reset()


# ---------------------------------------------------------------------------
# /admin/filters/add
# ---------------------------------------------------------------------------


def test_filter_add_keyword_rule(client):
    resp = authed_post(
        client, "/admin/filters/add", {"type": "keyword", "pattern": "spam", "action": "block"}
    )
    assert resp.status_code == 200
    data = resp.get_json()
    assert "rule_id" in data


def test_filter_add_validation_error(client):
    resp = authed_post(client, "/admin/filters/add", {"type": "keyword"})
    assert resp.status_code == 400
    data = resp.get_json()
    assert "error" in data


def test_filter_add_requires_login(client):
    resp = client.post(
        "/admin/filters/add", json={"type": "keyword", "pattern": "x", "action": "block"}
    )
    assert resp.status_code in (302, 401, 403)


# ---------------------------------------------------------------------------
# /admin/filters/remove
# ---------------------------------------------------------------------------


def test_filter_remove_existing_rule(client):
    # Add a rule first
    add_resp = authed_post(
        client, "/admin/filters/add", {"type": "keyword", "pattern": "test", "action": "block"}
    )
    rule_id = add_resp.get_json()["rule_id"]

    resp = authed_post(client, "/admin/filters/remove", {"rule_id": rule_id})
    assert resp.status_code == 200
    assert resp.get_json()["message"] == "Rule removed"


def test_filter_remove_nonexistent_rule(client):
    resp = authed_post(client, "/admin/filters/remove", {"rule_id": "doesnotexist"})
    assert resp.status_code == 404
    assert "error" in resp.get_json()


# ---------------------------------------------------------------------------
# /admin/filters/update
# ---------------------------------------------------------------------------


def test_filter_update_existing_rule(client):
    add_resp = authed_post(
        client, "/admin/filters/add", {"type": "keyword", "pattern": "hello", "action": "block"}
    )
    rule_id = add_resp.get_json()["rule_id"]

    resp = authed_post(
        client, "/admin/filters/update", {"rule_id": rule_id, "updates": {"pattern": "world"}}
    )
    assert resp.status_code == 200
    assert resp.get_json()["message"] == "Rule updated"


def test_filter_update_missing_fields(client):
    resp = authed_post(client, "/admin/filters/update", {})
    assert resp.status_code == 400


def test_filter_update_nonexistent_rule(client):
    resp = authed_post(
        client, "/admin/filters/update", {"rule_id": "ghost", "updates": {"pattern": "x"}}
    )
    assert resp.status_code == 404


# ---------------------------------------------------------------------------
# /admin/filters/list
# ---------------------------------------------------------------------------


def test_filter_list_returns_rules(client):
    authed_post(
        client, "/admin/filters/add", {"type": "keyword", "pattern": "a", "action": "block"}
    )
    resp = authed_get(client, "/admin/filters/list")
    assert resp.status_code == 200
    data = resp.get_json()
    assert "rules" in data
    assert len(data["rules"]) >= 1


def test_filter_list_returns_list_type(client):
    resp = authed_get(client, "/admin/filters/list")
    assert resp.status_code == 200
    assert isinstance(resp.get_json()["rules"], list)


# ---------------------------------------------------------------------------
# /admin/filters/test
# ---------------------------------------------------------------------------


def test_filter_test_matching_rule(client):
    resp = authed_post(
        client,
        "/admin/filters/test",
        {"rule": {"type": "keyword", "pattern": "spam", "action": "block"}, "text": "this is spam"},
    )
    assert resp.status_code == 200
    data = resp.get_json()
    assert data["action"] == "block"
    assert "reason" in data


def test_filter_test_non_matching_rule(client):
    resp = authed_post(
        client,
        "/admin/filters/test",
        {"rule": {"type": "keyword", "pattern": "spam", "action": "block"}, "text": "clean text"},
    )
    assert resp.status_code == 200
    assert resp.get_json()["action"] == "pass"


def test_filter_test_invalid_rule(client):
    resp = authed_post(
        client,
        "/admin/filters/test",
        {"rule": {"type": "invalid_type", "pattern": "x", "action": "block"}, "text": "text"},
    )
    assert resp.status_code == 400


# ---------------------------------------------------------------------------
# /admin/poll/* HTTP routes
# ---------------------------------------------------------------------------


def test_poll_create_via_http(client):
    resp = authed_post(
        client,
        "/admin/poll/create",
        {"question": "Best fruit?", "options": ["Apple", "Banana", "Cherry"]},
    )
    assert resp.status_code == 200
    data = resp.get_json()
    assert "poll_id" in data
    assert data["state"] == "active"


def test_poll_create_validation_error(client):
    resp = authed_post(client, "/admin/poll/create", {"question": "No options?"})
    assert resp.status_code == 400


def test_poll_create_while_active_returns_409(client):
    authed_post(client, "/admin/poll/create", {"question": "First?", "options": ["A", "B"]})
    resp = authed_post(client, "/admin/poll/create", {"question": "Second?", "options": ["X", "Y"]})
    assert resp.status_code == 409


def test_poll_end_via_http(client):
    authed_post(client, "/admin/poll/create", {"question": "Q?", "options": ["A", "B"]})
    resp = authed_post(client, "/admin/poll/end", {})
    assert resp.status_code == 200
    assert resp.get_json()["state"] == "ended"


def test_poll_reset_via_http(client):
    authed_post(client, "/admin/poll/create", {"question": "Q?", "options": ["A", "B"]})
    resp = authed_post(client, "/admin/poll/reset", {})
    assert resp.status_code == 200
    assert resp.get_json()["state"] == "idle"


def test_poll_status_via_http(client):
    login(client)
    resp = authed_get(client, "/admin/poll/status")
    assert resp.status_code == 200
    assert "state" in resp.get_json()


# ---------------------------------------------------------------------------
# /admin/metrics
# ---------------------------------------------------------------------------


def test_metrics_requires_login(client):
    resp = client.get("/admin/metrics")
    assert resp.status_code in (302, 401, 403)


def test_metrics_returns_data_when_logged_in(client):
    resp = authed_get(client, "/admin/metrics")
    assert resp.status_code == 200
    data = resp.get_json()
    # Metrics endpoint returns ws connection count and queue state
    assert isinstance(data, dict)


def test_metrics_includes_rate_limits(client):
    resp = authed_get(client, "/admin/metrics")
    assert resp.status_code == 200
    data = resp.get_json()
    assert "rate_limits" in data
    rl = data["rate_limits"]
    for key in ("fire", "api", "admin", "login", "totals"):
        assert key in rl, f"missing rate_limits[{key!r}]"
        assert isinstance(rl[key]["hits"], int)
        assert isinstance(rl[key]["violations"], int)


def test_rate_limit_counters_increment_on_request(client):
    # Hit an admin-rate-limited endpoint a few times while logged in.
    for _ in range(3):
        resp = authed_get(client, "/admin/metrics")
        assert resp.status_code == 200

    resp = authed_get(client, "/admin/metrics")
    data = resp.get_json()
    rl = data["rate_limits"]
    # At least the requests we just made should be counted under "admin".
    assert rl["admin"]["hits"] >= 3
    assert rl["totals"]["hits"] >= 3


# ---------------------------------------------------------------------------
# /admin/fonts (list + delete)
# ---------------------------------------------------------------------------


def test_list_fonts_requires_login(client):
    resp = client.get("/admin/fonts")
    assert resp.status_code in (302, 401, 403)


def test_list_fonts_returns_full_catalog(client):
    from pathlib import Path

    from server import state

    (Path(state.USER_FONTS_DIR) / "Mine.ttf").write_text("data")
    resp = authed_get(client, "/admin/fonts")
    assert resp.status_code == 200
    data = resp.get_json()
    assert "fonts" in data
    names = [f["name"] for f in data["fonts"]]
    # Uploaded font is present
    assert "Mine" in names
    # Full catalog now includes built-in fonts (NotoSansTC bundled + catalog)
    assert "NotoSansTC" in names
    # Each font has metadata fields
    mine = next(f for f in data["fonts"] if f["name"] == "Mine")
    assert mine["type"] == "uploaded"
    assert "status" in mine


def test_delete_font_removes_existing(client):
    from pathlib import Path

    from server import state

    target = Path(state.USER_FONTS_DIR) / "Gone.ttf"
    target.write_text("data")
    token = csrf_token(client)
    resp = client.delete("/admin/fonts/Gone", headers={"X-CSRF-Token": token})
    assert resp.status_code == 200
    assert not target.exists()


def test_delete_font_404_when_missing(client):
    token = csrf_token(client)
    resp = client.delete("/admin/fonts/Nope", headers={"X-CSRF-Token": token})
    assert resp.status_code == 404


def test_delete_font_requires_login(client):
    resp = client.delete("/admin/fonts/AnyName")
    assert resp.status_code in (302, 401, 403)


def test_metrics_includes_telemetry_series(client):
    resp = authed_get(client, "/admin/metrics")
    data = resp.get_json()
    for key in ("cpu_series", "mem_series", "mem_mb_series", "ws_series", "rate_series"):
        assert key in data
        assert isinstance(data[key], list)
        assert len(data[key]) <= data["series_len"]
    # mem_mb_series entries (when populated) must be numeric — sidebar renders
    # `${Math.round(value)} MB` so non-numbers would surface as `NaN MB`.
    for v in data["mem_mb_series"]:
        assert isinstance(v, (int, float))
    assert data["series_len"] == 60
    assert data["sample_interval_sec"] == 1.0


# ---------------------------------------------------------------------------
# /admin/bootstrap — bulk first-paint snapshot
# ---------------------------------------------------------------------------

_BOOTSTRAP_KEYS = (
    "blacklist", "widgets", "polls", "settings", "filters", "history_stats",
    "ws_auth", "effects", "themes", "webhooks", "sounds", "emojis",
    "stickers", "scheduler", "fingerprints", "metrics",
)


def test_bootstrap_requires_login(client):
    resp = client.get("/admin/bootstrap")
    assert resp.status_code in (302, 401, 403)


def test_bootstrap_returns_all_sections(client):
    resp = authed_get(client, "/admin/bootstrap")
    assert resp.status_code == 200
    data = resp.get_json()
    for key in _BOOTSTRAP_KEYS:
        assert key in data, f"missing bootstrap[{key!r}]"


def test_bootstrap_continues_on_section_error(client, monkeypatch):
    from server.routes.admin import bootstrap as bs
    monkeypatch.setattr(bs, "_widgets", lambda: (_ for _ in ()).throw(RuntimeError("boom")))
    resp = authed_get(client, "/admin/bootstrap")
    assert resp.status_code == 200
    data = resp.get_json()
    assert data["widgets"] == {"_error": "boom"}
    assert "polls" in data and "metrics" in data


# ---------------------------------------------------------------------------
# /admin/ratelimit/apply — live-apply rate-limit overrides (P3-3, v5.0.0)
# ---------------------------------------------------------------------------


def test_ratelimit_apply_requires_login(client):
    resp = client.post(
        "/admin/ratelimit/apply",
        json={"scope": "fire", "limit": 25, "window": 60},
    )
    assert resp.status_code in (302, 401, 403)


def test_ratelimit_apply_updates_config(client, app):
    resp = authed_post(
        client,
        "/admin/ratelimit/apply",
        {"scope": "fire", "limit": 42, "window": 30},
    )
    assert resp.status_code == 200
    body = resp.get_json()
    assert body == {"scope": "fire", "limit": 42, "window": 30}
    assert app.config["FIRE_RATE_LIMIT"] == 42
    assert app.config["FIRE_RATE_WINDOW"] == 30

    # Second scope writes to its own keys without touching others.
    resp2 = authed_post(
        client,
        "/admin/ratelimit/apply",
        {"scope": "login", "limit": 7, "window": 300},
    )
    assert resp2.status_code == 200
    assert app.config["LOGIN_RATE_LIMIT"] == 7
    assert app.config["LOGIN_RATE_WINDOW"] == 300
    # First scope's writes survive the second update.
    assert app.config["FIRE_RATE_LIMIT"] == 42


def test_ratelimit_apply_validates_scope_and_window(client):
    # bad scope
    resp = authed_post(
        client,
        "/admin/ratelimit/apply",
        {"scope": "nope", "limit": 20, "window": 60},
    )
    assert resp.status_code == 400
    assert "error" in resp.get_json()

    # bad window (not in allow-list)
    resp = authed_post(
        client,
        "/admin/ratelimit/apply",
        {"scope": "fire", "limit": 20, "window": 45},
    )
    assert resp.status_code == 400

    # bad limit (out of range)
    resp = authed_post(
        client,
        "/admin/ratelimit/apply",
        {"scope": "fire", "limit": 0, "window": 60},
    )
    assert resp.status_code == 400

    resp = authed_post(
        client,
        "/admin/ratelimit/apply",
        {"scope": "fire", "limit": 1001, "window": 60},
    )
    assert resp.status_code == 400

    # non-int limit
    resp = authed_post(
        client,
        "/admin/ratelimit/apply",
        {"scope": "fire", "limit": "20", "window": 60},
    )
    assert resp.status_code == 400
