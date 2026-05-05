"""Tests for v5.0.0 Phase-2 public viewer polling endpoints.

`/poll/public-status` and `/session/public-state` replace the legacy
WebSocket pushes (`poll_update`, `session_ended`). These endpoints must:

1. Be reachable without login (viewers are anonymous).
2. Strip vote counts/percentages/total_votes from poll status — the
   polestar (2026-05-05) is that viewers must NEVER see counts even
   if their DOM happens to drop them. The privacy boundary lives at
   the wire, not the renderer.
3. Return enough shape for the existing renderer (`_normalizePollState`
   + `_renderPollPane` in main.js) to keep working unchanged.
"""

# pyright: reportMissingImports=false

import pytest

from server.services.poll import poll_service  # ty: ignore[unresolved-import]


@pytest.fixture(autouse=True)
def _reset_poll():
    poll_service.reset()
    yield
    poll_service.reset()


@pytest.fixture(autouse=True)
def _silence_ws_push(monkeypatch):
    monkeypatch.setattr("server.services.poll.ws_queue.enqueue_message", lambda _: None)


# ─── /poll/public-status ─────────────────────────────────────────────────────


def test_poll_public_status_no_login_required(client):
    res = client.get("/poll/public-status")
    assert res.status_code == 200


def test_poll_public_status_idle_returns_minimal_state(client):
    body = client.get("/poll/public-status").get_json()
    assert body == {"state": "idle"}


def test_poll_public_status_active_strips_vote_counts(client):
    poll_service.create_session([{"text": "Q1", "options": ["Apple", "Banana"]}])
    poll_service.start()
    # Cast votes so counts are non-zero — sanitizer must still hide them.
    poll_service.vote("A", "voter-1")
    poll_service.vote("A", "voter-2")
    poll_service.vote("B", "voter-3")

    body = client.get("/poll/public-status").get_json()

    # Top-level vote totals are stripped.
    assert "total_votes" not in body
    # Per-question vote totals + duplicate_attempts are stripped.
    for q in body.get("questions", []):
        assert "total_votes" not in q
        assert "duplicate_attempts" not in q
        for opt in q.get("options", []):
            assert "count" not in opt
            assert "percentage" not in opt
    # Legacy compat options array is also sanitized.
    for opt in body.get("options", []):
        assert "count" not in opt
        assert "percentage" not in opt


def test_poll_public_status_keeps_renderer_contract(client):
    """`_normalizePollState` reads state, current_index, questions[].text,
    questions[].options[].key/text, and legacy question/options. The
    sanitizer must keep all of those so the viewer renders correctly."""
    poll_service.create_session([{"text": "Pick one", "options": ["X", "Y"]}])
    poll_service.start()

    body = client.get("/poll/public-status").get_json()

    assert body["state"] == "active"
    assert body["current_index"] == 0
    assert body["questions"][0]["text"] == "Pick one"
    keys = {o["key"] for o in body["questions"][0]["options"]}
    assert keys == {"A", "B"}
    # Legacy single-question shape still populated for old viewers.
    assert body["question"] == "Pick one"
    assert {o["key"] for o in body["options"]} == {"A", "B"}


# ─── /session/public-state ───────────────────────────────────────────────────


def test_session_public_state_no_login_required(client):
    res = client.get("/session/public-state")
    assert res.status_code == 200


def test_session_public_state_idle(client):
    body = client.get("/session/public-state").get_json()
    assert body.get("status") == "idle"


def test_session_public_state_live_includes_status_and_name(client):
    from server.services import session_service  # ty: ignore[unresolved-import]

    session_service.open_session("Live event")
    body = client.get("/session/public-state").get_json()
    assert body.get("status") == "live"
    assert body.get("name") == "Live event"
