"""Unit tests for the admin live-feed polling buffer.

Replaces the legacy WS push for admin's live feed (Phase 1 of admin-WS
removal, 2026-05-05). Each forwarded danmu appends a snapshot here;
admin polls /admin/live-feed/recent with a cursor.
"""

# pyright: reportMissingImports=false

from server.services import live_feed_buffer  # ty: ignore[unresolved-import]


def test_append_assigns_monotonic_seq():
    s1 = live_feed_buffer.append({"text": "a"})
    s2 = live_feed_buffer.append({"text": "b"})
    s3 = live_feed_buffer.append({"text": "c"})
    assert s1 == 1
    assert s2 == 2
    assert s3 == 3


def test_recent_returns_entries_after_cursor():
    live_feed_buffer.append({"text": "a"})
    live_feed_buffer.append({"text": "b"})
    live_feed_buffer.append({"text": "c"})
    out = live_feed_buffer.recent(since=1)
    assert [e["data"]["text"] for e in out["entries"]] == ["b", "c"]
    assert out["next_since"] == 3


def test_recent_since_zero_returns_all():
    live_feed_buffer.append({"text": "a"})
    live_feed_buffer.append({"text": "b"})
    out = live_feed_buffer.recent(since=0)
    assert len(out["entries"]) == 2
    assert out["next_since"] == 2


def test_recent_no_new_entries_returns_empty_keeps_cursor():
    live_feed_buffer.append({"text": "a"})
    out = live_feed_buffer.recent(since=10)  # cursor ahead of head
    assert out["entries"] == []
    assert out["next_since"] == 10


def test_recent_respects_limit():
    for i in range(50):
        live_feed_buffer.append({"text": f"msg-{i}"})
    out = live_feed_buffer.recent(since=0, limit=10)
    assert len(out["entries"]) == 10
    assert out["next_since"] == 10
    # Caller continues with next_since on subsequent poll
    nxt = live_feed_buffer.recent(since=out["next_since"], limit=10)
    assert [e["data"]["text"] for e in nxt["entries"]][0] == "msg-10"


def test_buffer_caps_at_max_entries():
    # Push 250 entries; buffer keeps last 200, but seq still monotonic.
    for i in range(250):
        live_feed_buffer.append({"text": f"m{i}"})
    snap = live_feed_buffer.snapshot()
    assert len(snap) == 200
    assert snap[0]["seq"] == 51  # 250 - 200 + 1
    assert snap[-1]["seq"] == 250


def test_recent_after_buffer_wraparound_returns_current_window():
    """Client asleep longer than the buffer can hold: cursor falls
    behind buffer's oldest entry. Client just resumes from current head
    — same as a late WS reconnect."""
    for i in range(250):
        live_feed_buffer.append({"text": f"m{i}"})
    # Client cursor is 5; buffer's oldest is 51 — entries 1-50 are gone.
    out = live_feed_buffer.recent(since=5)
    seqs = [e["seq"] for e in out["entries"]]
    assert seqs[0] >= 51  # caught up to current window head
    assert out["next_since"] == seqs[-1]


def test_append_rejects_non_dict():
    seq_before = live_feed_buffer.append({"text": "valid"})
    seq_invalid = live_feed_buffer.append("not a dict")
    assert seq_invalid == 0
    seq_after = live_feed_buffer.append({"text": "valid2"})
    # Sequence is monotonic — invalid append doesn't burn a seq.
    assert seq_after == seq_before + 1


def test_recent_normalizes_bad_inputs():
    live_feed_buffer.append({"text": "a"})
    # Negative since coerced to 0
    out = live_feed_buffer.recent(since=-5)
    assert len(out["entries"]) == 1
    # Non-int limit coerced to default 100
    out = live_feed_buffer.recent(since=0, limit=-1)
    assert len(out["entries"]) == 1


def test_reset_drops_buffer_and_resets_seq():
    live_feed_buffer.append({"text": "a"})
    live_feed_buffer.append({"text": "b"})
    live_feed_buffer.reset()
    assert live_feed_buffer.snapshot() == []
    seq = live_feed_buffer.append({"text": "after-reset"})
    assert seq == 1


def test_messaging_forward_appends_to_buffer(app, _isolate_broadcast):
    """End-to-end: messaging.forward_to_ws_server populates the buffer
    so admin polling sees the same danmu the legacy WS push did."""
    from server.services import messaging  # ty: ignore[unresolved-import]

    with app.app_context():
        result = messaging.forward_to_ws_server(
            {"text": "hello-buffer", "color": "FF00FF", "speed": 5}
        )
    assert result["status"] == "sent"
    snap = live_feed_buffer.snapshot()
    assert len(snap) == 1
    assert snap[0]["data"]["text"] == "hello-buffer"
    assert snap[0]["data"]["color"] == "FF00FF"


# ── HTTP route tests ───────────────────────────────────────────────────────


def _login(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)


def test_live_feed_recent_requires_login(client):
    res = client.get("/admin/live-feed/recent")
    assert res.status_code in {401, 403}


def test_live_feed_recent_returns_empty_buffer(client):
    _login(client)
    res = client.get("/admin/live-feed/recent")
    assert res.status_code == 200
    body = res.get_json()
    assert body == {"entries": [], "next_since": 0}


def test_live_feed_recent_returns_pushed_entries(client):
    _login(client)
    live_feed_buffer.append({"text": "alpha"})
    live_feed_buffer.append({"text": "beta"})
    res = client.get("/admin/live-feed/recent?since=0")
    body = res.get_json()
    assert [e["data"]["text"] for e in body["entries"]] == ["alpha", "beta"]
    assert body["next_since"] == 2


def test_live_feed_recent_cursor_advances(client):
    _login(client)
    live_feed_buffer.append({"text": "first"})
    live_feed_buffer.append({"text": "second"})
    body = client.get("/admin/live-feed/recent?since=0").get_json()
    assert body["next_since"] == 2
    # Subsequent poll with the cursor returns nothing new
    body2 = client.get(f"/admin/live-feed/recent?since={body['next_since']}").get_json()
    assert body2["entries"] == []
    assert body2["next_since"] == 2
    # New entry after the cursor is picked up
    live_feed_buffer.append({"text": "third"})
    body3 = client.get(f"/admin/live-feed/recent?since={body2['next_since']}").get_json()
    assert [e["data"]["text"] for e in body3["entries"]] == ["third"]
    assert body3["next_since"] == 3


def test_live_feed_recent_limit_param_caps_response(client):
    _login(client)
    for i in range(10):
        live_feed_buffer.append({"text": f"m{i}"})
    body = client.get("/admin/live-feed/recent?since=0&limit=3").get_json()
    assert len(body["entries"]) == 3
    assert body["next_since"] == 3


def test_live_feed_recent_invalid_params_default_safely(client):
    _login(client)
    live_feed_buffer.append({"text": "x"})
    # Bad since string → treated as 0
    body = client.get("/admin/live-feed/recent?since=not-a-number").get_json()
    assert len(body["entries"]) == 1
    # Bad limit → default 100
    body2 = client.get("/admin/live-feed/recent?since=0&limit=abc").get_json()
    assert len(body2["entries"]) == 1
