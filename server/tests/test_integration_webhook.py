"""Integration tests: Webhook admin API workflows and incoming webhook → fire."""

import hashlib
import hmac
import json

import pytest

from server.services import ws_queue
from server.services.webhook import WebhookService
from server.services.ws_state import update_ws_client_count


def _login(client):
    """Log in and return the CSRF token."""
    client.post("/login", data={"password": "test"}, follow_redirects=True)
    with client.session_transaction() as sess:
        return sess.get("csrf_token", "")


@pytest.fixture(autouse=True)
def _reset_webhook(tmp_path):
    from unittest.mock import patch

    WebhookService._instance = None
    tmp_file = tmp_path / "webhooks.json"
    with patch("server.services.webhook._WEBHOOKS_FILE", tmp_file):
        yield
    WebhookService._instance = None


@pytest.fixture(autouse=True)
def _ws_ready():
    update_ws_client_count(1)
    ws_queue.dequeue_all()
    yield
    ws_queue.dequeue_all()


# ── Webhook admin CRUD workflow ─────────────────────────────────────────────


def test_register_list_unregister_workflow(client):
    """Full CRUD: register → list → unregister → verify empty."""
    token = _login(client)
    headers = {"X-CSRF-Token": token}

    # Register
    resp = client.post(
        "/admin/webhooks/register",
        json={
            "url": "https://example.com/hook",
            "events": ["on_danmu"],
            "format": "json",
            "secret": "my-secret",
        },
        headers=headers,
    )
    assert resp.status_code == 200
    hook_id = resp.get_json()["hook_id"]
    assert hook_id

    # List shows the hook with redacted secret
    resp = client.get("/admin/webhooks/list")
    assert resp.status_code == 200
    hooks = resp.get_json()["webhooks"]
    assert len(hooks) == 1
    assert hooks[0]["id"] == hook_id
    assert hooks[0]["secret"] == "***"

    # Unregister
    resp = client.post(
        "/admin/webhooks/unregister",
        json={"hook_id": hook_id},
        headers=headers,
    )
    assert resp.status_code == 200

    # List is now empty
    resp = client.get("/admin/webhooks/list")
    assert resp.get_json()["webhooks"] == []


def test_unregister_nonexistent_returns_404(client):
    token = _login(client)
    resp = client.post(
        "/admin/webhooks/unregister",
        json={"hook_id": "nonexistent"},
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 404


def test_register_invalid_url_fails_validation(client):
    token = _login(client)
    resp = client.post(
        "/admin/webhooks/register",
        json={"url": "", "events": ["on_danmu"]},
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 400


def test_webhook_requires_login(client):
    """Webhook admin endpoints require authentication."""
    resp = client.get("/admin/webhooks/list")
    assert resp.status_code == 401


# ── Incoming webhook → fire ─────────────────────────────────────────────────


def test_incoming_webhook_fires_danmu(client):
    """External webhook with valid signature should enqueue a danmu message."""
    token = _login(client)
    secret = "test-secret-key"

    # Register a webhook with a secret
    resp = client.post(
        "/admin/webhooks/register",
        json={
            "url": "https://example.com/hook",
            "events": ["on_danmu"],
            "secret": secret,
        },
        headers={"X-CSRF-Token": token},
    )
    hook_id = resp.get_json()["hook_id"]

    # Send incoming webhook
    payload = json.dumps({"text": "hello from webhook"}).encode()
    signature = hmac.new(secret.encode(), payload, hashlib.sha256).hexdigest()

    resp = client.post(
        f"/admin/webhook/incoming/{hook_id}",
        data=payload,
        content_type="application/json",
        headers={"X-Webhook-Signature": signature},
    )
    assert resp.status_code == 200
    assert resp.get_json()["status"] == "OK"

    msgs = ws_queue.dequeue_all()
    danmu = [m for m in msgs if m.get("text") == "hello from webhook"]
    assert len(danmu) == 1


def test_incoming_webhook_bad_signature_rejected(client):
    """Incoming webhook with invalid signature should be rejected."""
    token = _login(client)

    resp = client.post(
        "/admin/webhooks/register",
        json={
            "url": "https://example.com/hook",
            "events": ["on_danmu"],
            "secret": "real-secret",
        },
        headers={"X-CSRF-Token": token},
    )
    hook_id = resp.get_json()["hook_id"]

    payload = json.dumps({"text": "sneaky"}).encode()

    resp = client.post(
        f"/admin/webhook/incoming/{hook_id}",
        data=payload,
        content_type="application/json",
        headers={"X-Webhook-Signature": "bad-signature"},
    )
    assert resp.status_code == 403
    assert ws_queue.dequeue_all() == []


def test_incoming_webhook_blocked_by_blacklist(client):
    """Incoming webhook danmu should be blocked if text matches blacklist."""
    token = _login(client)
    secret = "blk-secret"

    # Add blacklist keyword
    client.post(
        "/admin/blacklist/add",
        json={"keyword": "badword"},
        headers={"X-CSRF-Token": token},
    )

    # Register webhook
    resp = client.post(
        "/admin/webhooks/register",
        json={
            "url": "https://example.com/hook",
            "events": ["on_danmu"],
            "secret": secret,
        },
        headers={"X-CSRF-Token": token},
    )
    hook_id = resp.get_json()["hook_id"]

    # Send incoming with blacklisted text
    payload = json.dumps({"text": "contains badword here"}).encode()
    signature = hmac.new(secret.encode(), payload, hashlib.sha256).hexdigest()

    resp = client.post(
        f"/admin/webhook/incoming/{hook_id}",
        data=payload,
        content_type="application/json",
        headers={"X-Webhook-Signature": signature},
    )
    assert resp.status_code == 403
    assert "blacklist" in resp.get_json()["error"].lower()
    assert ws_queue.dequeue_all() == []


def test_incoming_webhook_unknown_hook_returns_404(client):
    payload = json.dumps({"text": "hello"}).encode()
    resp = client.post(
        "/admin/webhook/incoming/nonexistent",
        data=payload,
        content_type="application/json",
    )
    assert resp.status_code == 404


def test_webhook_admin_actions_are_written_to_audit_log(client):
    """Regression: webhook admin actions should be queryable from /admin/audit."""
    token = _login(client)
    headers = {"X-CSRF-Token": token}

    reg = client.post(
        "/admin/webhooks/register",
        json={
            "url": "https://example.com/notify",
            "events": ["on_danmu"],
            "format": "json",
            "secret": "audit-secret",
        },
        headers=headers,
    )
    assert reg.status_code == 200
    hook_id = reg.get_json()["hook_id"]

    tst = client.post(
        "/admin/webhooks/test",
        json={"hook_id": hook_id},
        headers=headers,
    )
    assert tst.status_code == 200

    unreg = client.post(
        "/admin/webhooks/unregister",
        json={"hook_id": hook_id},
        headers=headers,
    )
    assert unreg.status_code == 200

    # Read via admin audit API contract.
    client.post("/login", data={"password": "test"}, follow_redirects=True)
    audit_resp = client.get("/admin/audit?source=webhooks")
    assert audit_resp.status_code == 200
    events = audit_resp.get_json()["events"]
    kinds = [e.get("kind") for e in events]
    assert "register" in kinds
    assert "test" in kinds
    assert "unregister" in kinds
