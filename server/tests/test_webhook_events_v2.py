"""Tests for webhook event vocab v2 (3 → 10 events) + /admin/webhooks/toggle."""

from unittest.mock import patch

import pytest

from server.services.webhook import _VALID_EVENTS, WebhookService

# ─── Service-level: vocab v2 ────────────────────────────────────────────────


def test_vocab_contains_legacy_events():
    """3 v1 events stay valid so existing registrations don't get nuked."""
    assert "on_danmu" in _VALID_EVENTS
    assert "on_poll_create" in _VALID_EVENTS
    assert "on_poll_end" in _VALID_EVENTS


def test_vocab_contains_all_v2_events():
    """The 7 new events of the v2 expansion are all subscribable."""
    new_events = {
        "on_danmu_blocked",
        "on_poll_vote",
        "on_session_start",
        "on_session_end",
        "on_overlay_clear",
        "on_audit_alert",
        "on_plugin_change",
    }
    assert new_events.issubset(_VALID_EVENTS)


def test_vocab_size_is_ten():
    """Catalogue size lock — bumping this triggers a deliberate review."""
    assert len(_VALID_EVENTS) == 10


# ─── Registration accepts new event names ───────────────────────────────────


@pytest.fixture(autouse=True)
def _reset_webhook_singleton(tmp_path):
    WebhookService._instance = None
    with patch("server.services.webhook._WEBHOOKS_FILE", tmp_path / "webhooks.json"):
        yield
    WebhookService._instance = None


def _config(**overrides):
    base = {
        "url": "https://example.com/hook",
        "events": ["on_session_start"],
        "format": "json",
        "secret": "",
    }
    base.update(overrides)
    return base


def test_register_accepts_v2_event():
    svc = WebhookService()
    svc.register(_config(events=["on_session_start", "on_overlay_clear"]))
    hooks = svc.list_hooks()
    assert set(hooks[0]["events"]) == {"on_session_start", "on_overlay_clear"}


def test_register_drops_unknown_events():
    """Invalid event names get silently filtered (not 400'd) — matches
    existing service behavior so a typo doesn't kill the whole call."""
    svc = WebhookService()
    svc.register(_config(events=["on_session_start", "on_not_a_real_event"]))
    hooks = svc.list_hooks()
    assert hooks[0]["events"] == ["on_session_start"]


def test_emit_v2_event_fires_subscribed_hook():
    """An on_overlay_clear emit hits subscribed hooks and nothing else."""
    svc = WebhookService()
    svc.register(_config(url="https://a.test/clear", events=["on_overlay_clear"], secret=""))
    svc.register(_config(url="https://b.test/start", events=["on_session_start"], secret=""))

    sent = []

    def _capture(hook, event, data):
        sent.append((hook.url, event))

    with patch.object(svc, "_send_webhook", side_effect=_capture):
        svc.emit("on_overlay_clear", {"actor": "admin"})

    assert len(sent) == 1
    assert sent[0] == ("https://a.test/clear", "on_overlay_clear")


# ─── /admin/webhooks/toggle endpoint ────────────────────────────────────────


def login(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)


def csrf_token(client):
    login(client)
    with client.session_transaction() as sess:
        return sess["csrf_token"]


def test_toggle_requires_hook_id(client):
    token = csrf_token(client)
    resp = client.post(
        "/admin/webhooks/toggle",
        json={},
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 400
    assert "hook_id" in resp.get_json()["error"]


def test_toggle_returns_404_for_unknown_hook(client):
    token = csrf_token(client)
    resp = client.post(
        "/admin/webhooks/toggle",
        json={"hook_id": "no-such-hook"},
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 404


def test_toggle_flips_enabled_when_omitted(client):
    """When `enabled` is not in the body, the toggle inverts current state."""
    from server.services.webhook import webhook_service

    hook_id = webhook_service.register(_config(events=["on_danmu"]))
    assert webhook_service.get_hook(hook_id)["enabled"] is True

    token = csrf_token(client)
    resp = client.post(
        "/admin/webhooks/toggle",
        json={"hook_id": hook_id},
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 200
    assert resp.get_json()["enabled"] is False
    assert webhook_service.get_hook(hook_id)["enabled"] is False

    # Second toggle flips back to True
    resp = client.post(
        "/admin/webhooks/toggle",
        json={"hook_id": hook_id},
        headers={"X-CSRF-Token": token},
    )
    assert resp.get_json()["enabled"] is True


def test_toggle_respects_explicit_enabled_value(client):
    """Explicit enabled=true/false wins over implicit flip."""
    from server.services.webhook import webhook_service

    hook_id = webhook_service.register(_config(events=["on_danmu"]))

    token = csrf_token(client)
    # Force disable
    resp = client.post(
        "/admin/webhooks/toggle",
        json={"hook_id": hook_id, "enabled": False},
        headers={"X-CSRF-Token": token},
    )
    assert resp.get_json()["enabled"] is False

    # Re-disable (idempotent)
    resp = client.post(
        "/admin/webhooks/toggle",
        json={"hook_id": hook_id, "enabled": False},
        headers={"X-CSRF-Token": token},
    )
    assert resp.get_json()["enabled"] is False


def test_toggle_disabled_hook_skips_emit(client):
    """Disabled hooks must NOT fire — toggle's whole point is muting."""
    from server.services.webhook import webhook_service

    hook_id = webhook_service.register(_config(events=["on_session_start"], secret=""))

    token = csrf_token(client)
    client.post(
        "/admin/webhooks/toggle",
        json={"hook_id": hook_id, "enabled": False},
        headers={"X-CSRF-Token": token},
    )

    sent = []
    with patch.object(webhook_service, "_send_webhook", side_effect=lambda h, e, d: sent.append(h)):
        webhook_service.emit("on_session_start", {"id": "x"})

    assert sent == []


# ─── /admin/webhooks/events catalogue endpoint ─────────────────────────────


def test_events_catalog_lists_all_ten(client):
    """Endpoint returns the 10 events for the FE subscription picker."""
    login(client)
    resp = client.get("/admin/webhooks/events")
    assert resp.status_code == 200
    events = resp.get_json()["events"]
    assert len(events) == 10
    slugs = {e["slug"] for e in events}
    assert slugs == _VALID_EVENTS


def test_events_catalog_entries_have_bilingual_labels(client):
    """Each entry has slug + zh + en so the FE can label tooltips."""
    login(client)
    resp = client.get("/admin/webhooks/events")
    for e in resp.get_json()["events"]:
        assert e["slug"]
        assert e["zh"]
        assert e["en"]
