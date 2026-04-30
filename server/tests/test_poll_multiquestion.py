"""Tests for P0-1 multi-question poll session.

Covers the new ``PollService.create_session`` / ``start`` / ``advance`` flow,
the per-question image upload endpoint, the public ``/polls/media/`` static
serving, and the audience-vote intercept that targets only the *current*
question.
"""

# pyright: reportMissingImports=false

import io
import struct
import zlib

import pytest

from server.services.poll import PollService, poll_service  # ty: ignore[unresolved-import]


# ─── Helpers ────────────────────────────────────────────────────────────────


def login(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)


def csrf_token(client):
    login(client)
    with client.session_transaction() as sess:
        return sess["csrf_token"]


def authed_post_json(client, url, payload):
    token = csrf_token(client)
    return client.post(url, json=payload, headers={"X-CSRF-Token": token})


def authed_post_multipart(client, url, data):
    token = csrf_token(client)
    return client.post(
        url,
        data=data,
        headers={"X-CSRF-Token": token},
        content_type="multipart/form-data",
    )


def make_png_bytes(width: int = 4, height: int = 4) -> bytes:
    """Smallest-possible valid PNG (no external deps)."""
    sig = b"\x89PNG\r\n\x1a\n"

    def chunk(tag: bytes, data: bytes) -> bytes:
        return (
            struct.pack(">I", len(data))
            + tag
            + data
            + struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF)
        )

    ihdr = chunk(b"IHDR", struct.pack(">IIBBBBB", width, height, 8, 2, 0, 0, 0))
    raw = b"".join(b"\x00" + b"\x00\x00\x00" * width for _ in range(height))
    idat = chunk(b"IDAT", zlib.compress(raw, 9))
    iend = chunk(b"IEND", b"")
    return sig + ihdr + idat + iend


# ─── Fixtures ───────────────────────────────────────────────────────────────


@pytest.fixture(autouse=True)
def reset_poll_service():
    """Make the singleton clean between tests so HTTP tests don't bleed."""
    poll_service.reset()
    yield
    poll_service.reset()


@pytest.fixture(autouse=True)
def mock_ws_queue(monkeypatch):
    """Silence WS broadcasts during unit-level service assertions."""
    monkeypatch.setattr("server.services.poll.ws_queue.enqueue_message", lambda _: None)


@pytest.fixture
def isolated_poll_dir(tmp_path, monkeypatch):
    """Redirect POLL_MEDIA_DIR to a per-test tmp dir."""
    from server.routes.admin import poll as poll_route  # ty: ignore[unresolved-import]

    target = tmp_path / "polls"
    target.mkdir()
    monkeypatch.setattr(poll_route, "POLL_MEDIA_DIR", target)
    return target


# ─── Service-level tests ───────────────────────────────────────────────────


def test_create_multi_question_poll():
    svc = PollService()
    status = svc.create_session(
        [
            {"text": "Best fruit?", "options": ["Apple", "Banana"]},
            {"text": "Best color?", "options": ["Red", "Blue", "Green"]},
        ]
    )
    assert status["state"] == "ended"  # pending: not yet started
    assert status["active"] is False
    assert status["current_index"] == -1
    assert status["question_count"] == 2
    assert len(status["questions"]) == 2
    assert status["questions"][0]["text"] == "Best fruit?"
    assert status["questions"][1]["text"] == "Best color?"
    # IDs are unique uuid4 prefixes
    ids = [q["id"] for q in status["questions"]]
    assert len(set(ids)) == 2
    # Legacy compat surface present
    assert status["question"] == "Best fruit?"
    assert len(status["options"]) == 2


def test_start_then_advance_resets_votes():
    svc = PollService()
    svc.create_session(
        [
            {"text": "Q1?", "options": ["A1", "A2"]},
            {"text": "Q2?", "options": ["B1", "B2", "B3"]},
        ]
    )
    started = svc.start()
    assert started["active"] is True
    assert started["current_index"] == 0
    assert started["question"] == "Q1?"

    # Cast a vote on Q1
    assert svc.vote("A", "user1") is True
    assert svc.get_status()["questions"][0]["options"][0]["count"] == 1

    advanced = svc.advance()
    assert advanced["current_index"] == 1
    assert advanced["question"] == "Q2?"
    # Q1's vote is preserved on Q1; Q2 starts clean
    assert svc.get_status()["questions"][0]["options"][0]["count"] == 1
    assert all(o["count"] == 0 for o in advanced["options"])


def test_vote_targets_current_question_only():
    svc = PollService()
    svc.create_session(
        [
            {"text": "Q1?", "options": ["A1", "A2"]},
            {"text": "Q2?", "options": ["B1", "B2"]},
        ]
    )
    svc.start()
    # Vote on first question
    svc.vote("A", "voter-1")
    svc.vote("B", "voter-2")
    s = svc.get_status()
    assert s["questions"][0]["options"][0]["count"] == 1
    assert s["questions"][0]["options"][1]["count"] == 1
    # Advance and vote — only Q2 should change
    svc.advance()
    svc.vote("A", "voter-1")  # voter-1 can vote again on a fresh question
    svc.vote("A", "voter-2")
    s = svc.get_status()
    assert s["questions"][0]["options"][0]["count"] == 1  # unchanged
    assert s["questions"][1]["options"][0]["count"] == 2  # both voters here


def test_advance_past_last_question_raises():
    svc = PollService()
    svc.create_session([{"text": "Only?", "options": ["X", "Y"]}])
    svc.start()
    with pytest.raises(ValueError, match="last question"):
        svc.advance()


def test_legacy_single_question_create_still_works():
    svc = PollService()
    pid = svc.create("Pick one", ["Alpha", "Beta", "Gamma"])
    assert isinstance(pid, str)
    s = svc.get_status()
    assert s["state"] == "active"
    assert s["question"] == "Pick one"
    assert len(s["options"]) == 3
    assert len(s["questions"]) == 1
    # Legacy callers can still vote with no schema change
    assert svc.vote("A", "voter-A") is True
    assert svc.get_status()["options"][0]["count"] == 1


def test_get_option_keys_follows_current_question():
    svc = PollService()
    svc.create_session(
        [
            {"text": "Q1?", "options": ["A1", "A2"]},
            {"text": "Q2?", "options": ["B1", "B2", "B3"]},
        ]
    )
    svc.start()
    assert svc.get_option_keys() == ["A", "B"]
    svc.advance()
    assert svc.get_option_keys() == ["A", "B", "C"]
    svc.end()
    assert svc.get_option_keys() == []


# ─── HTTP route tests ──────────────────────────────────────────────────────


def test_create_multi_question_via_http(client):
    resp = authed_post_json(
        client,
        "/admin/poll/create",
        {
            "questions": [
                {"text": "Q1?", "options": ["A1", "A2"]},
                {"text": "Q2?", "options": ["B1", "B2", "B3"]},
            ]
        },
    )
    assert resp.status_code == 200
    data = resp.get_json()
    assert "poll_id" in data
    assert data["question_count"] == 2
    assert data["current_index"] == -1


def test_legacy_single_question_create_via_http(client):
    """Existing callers (admin-poll.js v4) still work unchanged."""
    resp = authed_post_json(
        client,
        "/admin/poll/create",
        {"question": "Best fruit?", "options": ["Apple", "Banana"]},
    )
    assert resp.status_code == 200
    data = resp.get_json()
    assert data["state"] == "active"
    assert data["question"] == "Best fruit?"
    assert data["question_count"] == 1


def test_start_and_advance_via_http(client):
    create_resp = authed_post_json(
        client,
        "/admin/poll/create",
        {
            "questions": [
                {"text": "Q1?", "options": ["A", "B"]},
                {"text": "Q2?", "options": ["X", "Y"]},
            ]
        },
    )
    assert create_resp.status_code == 200

    start_resp = authed_post_json(client, "/admin/poll/start", {})
    assert start_resp.status_code == 200
    assert start_resp.get_json()["current_index"] == 0
    assert start_resp.get_json()["active"] is True

    adv_resp = authed_post_json(client, "/admin/poll/advance", {})
    assert adv_resp.status_code == 200
    assert adv_resp.get_json()["current_index"] == 1

    # Past-the-end advance returns 409
    adv2 = authed_post_json(client, "/admin/poll/advance", {})
    assert adv2.status_code == 409


def test_advance_without_start_is_409(client):
    authed_post_json(
        client,
        "/admin/poll/create",
        {"questions": [{"text": "Q1?", "options": ["A", "B"]}]},
    )
    # No /start call yet
    resp = authed_post_json(client, "/admin/poll/advance", {})
    assert resp.status_code == 409


def test_image_upload_and_serving(client, isolated_poll_dir):
    """Upload a PNG to a question and fetch it via /polls/media/."""
    create_resp = authed_post_json(
        client,
        "/admin/poll/create",
        {"questions": [{"text": "Q?", "options": ["A", "B"]}]},
    )
    assert create_resp.status_code == 200
    payload = create_resp.get_json()
    poll_id = payload["poll_id"]
    question_id = payload["questions"][0]["id"]

    png = make_png_bytes()
    upload_resp = authed_post_multipart(
        client,
        f"/admin/poll/{poll_id}/upload-image/{question_id}",
        {"file": (io.BytesIO(png), "diagram.png")},
    )
    assert upload_resp.status_code == 200, upload_resp.get_json()
    image_url = upload_resp.get_json()["image_url"]
    assert image_url == f"/polls/media/{poll_id}/{question_id}.png"

    # File is on disk under the isolated dir
    assert (isolated_poll_dir / poll_id / f"{question_id}.png").exists()

    # Service has the URL attached
    status = poll_service.get_status()
    assert status["questions"][0]["image_url"] == image_url

    # Public route serves the bytes back
    fetch_resp = client.get(image_url)
    assert fetch_resp.status_code == 200
    assert fetch_resp.data == png
    assert "max-age=3600" in fetch_resp.headers.get("Cache-Control", "")


def test_image_upload_rejects_oversize(client, isolated_poll_dir):
    create_resp = authed_post_json(
        client,
        "/admin/poll/create",
        {"questions": [{"text": "Q?", "options": ["A", "B"]}]},
    )
    payload = create_resp.get_json()
    poll_id, question_id = payload["poll_id"], payload["questions"][0]["id"]

    too_big = b"\x89PNG" + b"\x00" * (3 * 1024 * 1024)
    resp = authed_post_multipart(
        client,
        f"/admin/poll/{poll_id}/upload-image/{question_id}",
        {"file": (io.BytesIO(too_big), "huge.png")},
    )
    assert resp.status_code == 413


def test_image_upload_rejects_wrong_mime(client, isolated_poll_dir):
    create_resp = authed_post_json(
        client,
        "/admin/poll/create",
        {"questions": [{"text": "Q?", "options": ["A", "B"]}]},
    )
    payload = create_resp.get_json()
    poll_id, question_id = payload["poll_id"], payload["questions"][0]["id"]

    resp = authed_post_multipart(
        client,
        f"/admin/poll/{poll_id}/upload-image/{question_id}",
        {"file": (io.BytesIO(b"not an image, just text"), "fake.png")},
    )
    assert resp.status_code == 400


def test_image_upload_rejects_bad_ids(client, isolated_poll_dir):
    png = make_png_bytes()
    # Path traversal in poll_id
    resp = authed_post_multipart(
        client,
        "/admin/poll/..%2Fevil/upload-image/q_abcd1234",
        {"file": (io.BytesIO(png), "x.png")},
    )
    # Either Flask refuses to route, or our regex rejects it; both are fine.
    assert resp.status_code in {400, 404}


def test_polls_media_path_traversal_blocked(client, isolated_poll_dir):
    """Even if a malicious URL squeaks through routing, the responder rejects."""
    # Create a sibling file outside the polls dir that we should NOT be able
    # to read.
    secret = isolated_poll_dir.parent / "SECRET.txt"
    secret.write_text("nope")

    resp = client.get("/polls/media/../SECRET.txt")
    # Flask normalises ".." segments before our handler sees them; either way
    # the result must not be a 200 with the secret bytes.
    assert resp.status_code != 200 or b"nope" not in resp.data


def test_vote_targets_current_question_via_fire(client, isolated_poll_dir, monkeypatch):
    """/fire intercepts a danmu vote and routes it to the current question only."""
    from server.services import messaging  # ty: ignore[unresolved-import]
    from server.services.ws_state import update_ws_client_count  # ty: ignore[unresolved-import]

    # Pretend an overlay is connected so /fire doesn't 503.
    update_ws_client_count(1)
    # Stub the WS forward via monkeypatch so other tests aren't affected.
    monkeypatch.setattr(messaging, "forward_to_ws_server", lambda _data: True)

    create_resp = authed_post_json(
        client,
        "/admin/poll/create",
        {
            "questions": [
                {"text": "Q1?", "options": ["A1", "A2"]},
                {"text": "Q2?", "options": ["B1", "B2"]},
            ]
        },
    )
    assert create_resp.status_code == 200
    authed_post_json(client, "/admin/poll/start", {})

    # Vote "A" via /fire — should land on Q1 only
    resp = client.post("/fire", json={"text": "A", "fingerprint": "voter-1"})
    assert resp.status_code == 200
    payload = resp.get_json()
    assert payload["status"] == "OK"
    assert payload["poll_vote"]["accepted"] is True
    assert payload["poll_vote"]["key"] == "A"
    assert payload["poll_vote"]["question"] == "Q1?"
    s = poll_service.get_status()
    assert s["questions"][0]["options"][0]["count"] == 1
    assert s["questions"][1]["options"][0]["count"] == 0

    # Advance and vote again — only Q2 changes
    authed_post_json(client, "/admin/poll/advance", {})
    resp = client.post("/fire", json={"text": "A", "fingerprint": "voter-1"})
    assert resp.status_code == 200
    payload = resp.get_json()
    assert payload["poll_vote"]["accepted"] is True
    assert payload["poll_vote"]["question"] == "Q2?"
    s = poll_service.get_status()
    assert s["questions"][0]["options"][0]["count"] == 1  # frozen
    assert s["questions"][1]["options"][0]["count"] == 1  # new


def test_non_vote_fire_response_has_no_poll_vote_meta(client, monkeypatch):
    """Server-driven poll flags should appear only for valid poll-option votes."""
    from server.services import messaging  # ty: ignore[unresolved-import]
    from server.services.ws_state import update_ws_client_count  # ty: ignore[unresolved-import]

    update_ws_client_count(1)
    monkeypatch.setattr(messaging, "forward_to_ws_server", lambda _data: True)
    authed_post_json(
        client,
        "/admin/poll/create",
        {"question": "Q?", "options": ["Yes", "No"]},
    )

    resp = client.post("/fire", json={"text": "hello world", "fingerprint": "voter-1"})
    assert resp.status_code == 200
    payload = resp.get_json()
    assert payload["status"] == "OK"
    assert "poll_vote" not in payload


def test_status_back_compat_shape(client):
    """Old clients keep working: top-level question/options/total_votes."""
    authed_post_json(
        client,
        "/admin/poll/create",
        {"question": "Legacy?", "options": ["L1", "L2"]},
    )
    resp = client.get("/admin/poll/status")
    # /admin/poll/status requires login (the create above logged us in).
    assert resp.status_code == 200
    data = resp.get_json()
    assert data["question"] == "Legacy?"
    assert isinstance(data["options"], list)
    assert "total_votes" in data
    # New keys also present (back-compat is additive, not replacement)
    assert "questions" in data
    assert "current_index" in data
