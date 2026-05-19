"""Tests for /admin/search filters (status, type, fp, since/until)."""

from datetime import datetime, timedelta, timezone
from urllib.parse import quote_plus

import pytest

from server.services import history as hist_svc
from server.services.history import DanmuHistory

# ─── Helpers ────────────────────────────────────────────────────────────────


def login(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)


def search(client, **params):
    """GET /admin/search with proper URL-encoding (so `+` in ISO timestamps
    survives the query-string round-trip — otherwise the offset gets
    decoded as a space)."""
    login(client)
    qs = "&".join(f"{k}={quote_plus(str(v))}" for k, v in params.items())
    return client.get(f"/admin/search?{qs}")


@pytest.fixture()
def fresh_history():
    """Swap in a clean DanmuHistory for each test; restore after."""
    original = hist_svc.danmu_history
    hist_svc.danmu_history = DanmuHistory(max_records=200, auto_cleanup_hours=999)
    yield hist_svc.danmu_history
    hist_svc.danmu_history = original


def _seed(history, **overrides):
    """Helper to add a record with defaults filled in."""
    payload = {
        "text": "hello",
        "color": "ffffff",
        "size": 50,
        "speed": 4,
        "opacity": 70,
        "isImage": False,
        "fingerprint": "fp_default",
        "clientIp": "127.0.0.1",
    }
    payload.update(overrides)
    history.add(payload)


# ─── Baseline behavior ──────────────────────────────────────────────────────


def test_search_requires_query(client, fresh_history):
    resp = search(client, q="")
    assert resp.status_code == 400
    assert "q must be" in resp.get_json()["error"]


def test_search_rejects_overlong_query(client, fresh_history):
    resp = search(client, q="x" * 101)
    assert resp.status_code == 400


def test_search_returns_matches_by_text(client, fresh_history):
    _seed(fresh_history, text="hello world")
    _seed(fresh_history, text="goodbye")
    resp = search(client, q="hello")
    assert resp.status_code == 200
    body = resp.get_json()
    assert body["total"] == 1
    assert body["results"][0]["text"] == "hello world"


def test_search_returns_filters_envelope(client, fresh_history):
    """Response includes the resolved filter set for FE transparency."""
    _seed(fresh_history, text="foo")
    resp = search(client, q="foo")
    body = resp.get_json()
    assert "filters" in body
    assert body["filters"]["since"] is None
    assert body["filters"]["until"] is None
    assert body["filters"]["type"] is None


# ─── since / until — custom date range ───────────────────────────────────────


def test_search_rejects_bad_since(client, fresh_history):
    resp = search(client, q="hi", since="not-a-date")
    assert resp.status_code == 400
    assert "since" in resp.get_json()["error"]


def test_search_rejects_bad_until(client, fresh_history):
    resp = search(client, q="hi", until="garbage")
    assert resp.status_code == 400


def test_search_rejects_since_after_until(client, fresh_history):
    """since must be strictly before until."""
    later = "2026-05-19T12:00:00+00:00"
    earlier = "2026-05-19T11:00:00+00:00"
    resp = search(client, q="hi", since=later, until=earlier)
    assert resp.status_code == 400


def test_search_since_overrides_hours(client, fresh_history):
    """Records older than 168h are reachable via explicit since=."""
    # Manually craft a record stamped 200 hours ago — bypasses .add() so
    # we control the timestamp.
    old_ts = (datetime.now(timezone.utc) - timedelta(hours=200)).isoformat()
    fresh_history._records.append(
        {
            "timestamp": old_ts,
            "text": "ancient message",
            "fingerprint": "fp_old",
        }
    )
    # Without since= the default hours=168 hides it.
    resp = search(client, q="ancient")
    assert resp.status_code == 200
    assert resp.get_json()["total"] == 0

    # With since= reaching back 300h it surfaces.
    far_back = (datetime.now(timezone.utc) - timedelta(hours=300)).isoformat()
    resp = search(client, q="ancient", since=far_back)
    body = resp.get_json()
    assert body["total"] == 1
    assert body["filters"]["since"] is not None


def test_search_until_clamps_upper_bound(client, fresh_history):
    _seed(fresh_history, text="recent")
    # until in the past → nothing returned.
    past = (datetime.now(timezone.utc) - timedelta(hours=1)).isoformat()
    far_past = (datetime.now(timezone.utc) - timedelta(hours=2)).isoformat()
    resp = search(client, q="recent", since=far_past, until=past)
    assert resp.status_code == 200
    assert resp.get_json()["total"] == 0


# ─── type filter ─────────────────────────────────────────────────────────────


def test_search_type_image_filters_to_images(client, fresh_history):
    _seed(fresh_history, text="cat pic", isImage=True)
    _seed(fresh_history, text="cat words", isImage=False)
    resp = search(client, q="cat", type="image")
    body = resp.get_json()
    assert body["total"] == 1
    assert body["results"][0]["isImage"] is True


def test_search_type_text_excludes_images(client, fresh_history):
    _seed(fresh_history, text="dog pic", isImage=True)
    _seed(fresh_history, text="dog words", isImage=False)
    resp = search(client, q="dog", type="text")
    body = resp.get_json()
    assert body["total"] == 1
    assert body["results"][0]["isImage"] is False


def test_search_type_invalid_rejected(client, fresh_history):
    resp = search(client, q="x", type="banana")
    assert resp.status_code == 400


# ─── fp filter ───────────────────────────────────────────────────────────────


def test_search_fp_exact_match(client, fresh_history):
    _seed(fresh_history, text="hi", fingerprint="abc123")
    _seed(fresh_history, text="hi", fingerprint="zzz999")
    resp = search(client, q="hi", fp="abc123")
    body = resp.get_json()
    assert body["total"] == 1
    assert body["results"][0]["fingerprint"] == "abc123"


def test_search_fp_no_partial_match(client, fresh_history):
    """fp= is EXACT — substring matching is via the `q` parameter."""
    _seed(fresh_history, text="hi", fingerprint="abc123")
    resp = search(client, q="hi", fp="abc")
    assert resp.get_json()["total"] == 0


# ─── status filter ───────────────────────────────────────────────────────────


def test_search_status_default_is_shown(client, fresh_history):
    """Records without a status field are treated as 'shown'."""
    _seed(fresh_history, text="hi")
    resp = search(client, q="hi", status="shown")
    assert resp.get_json()["total"] == 1


def test_search_status_filters_out_other_statuses(client, fresh_history):
    _seed(fresh_history, text="hi")  # default "shown"
    fresh_history._records.append(
        {
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "text": "hi pinned",
            "status": "pinned",
            "fingerprint": "fp_pin",
        }
    )
    # Only `shown` requested → masks out pinned.
    resp = search(client, q="hi", status="shown")
    body = resp.get_json()
    assert body["total"] == 1
    assert body["results"][0]["text"] == "hi"


def test_search_status_multi_value(client, fresh_history):
    _seed(fresh_history, text="hi")  # shown
    fresh_history._records.append(
        {
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "text": "hi pinned",
            "status": "pinned",
            "fingerprint": "fp_pin",
        }
    )
    fresh_history._records.append(
        {
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "text": "hi blocked",
            "status": "blocked",
            "fingerprint": "fp_blk",
        }
    )
    resp = search(client, q="hi", status="shown,pinned")
    body = resp.get_json()
    assert body["total"] == 2
    statuses = {r.get("status") or "shown" for r in body["results"]}
    assert statuses == {"shown", "pinned"}


def test_search_status_invalid_value_ignored(client, fresh_history):
    """Unknown status tokens get silently dropped from the filter set
    (so a bogus URL still returns matches instead of confusing 400s)."""
    _seed(fresh_history, text="hi")
    resp = search(client, q="hi", status="banana,shown")
    body = resp.get_json()
    assert body["total"] == 1
    assert "banana" not in (body["filters"]["status"] or [])


# ─── Combined filters ───────────────────────────────────────────────────────


def test_search_combines_type_and_fp(client, fresh_history):
    _seed(fresh_history, text="mix", isImage=True, fingerprint="fp_a")
    _seed(fresh_history, text="mix", isImage=False, fingerprint="fp_a")
    _seed(fresh_history, text="mix", isImage=True, fingerprint="fp_b")
    resp = search(client, q="mix", type="image", fp="fp_a")
    body = resp.get_json()
    assert body["total"] == 1
    assert body["results"][0]["fingerprint"] == "fp_a"
    assert body["results"][0]["isImage"] is True


def test_search_empty_history_returns_empty(client, fresh_history):
    resp = search(client, q="anything")
    assert resp.status_code == 200
    assert resp.get_json()["total"] == 0
