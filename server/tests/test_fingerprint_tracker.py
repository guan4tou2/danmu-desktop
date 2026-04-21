# pyright: reportMissingImports=false

import time

import pytest

from server.services import fingerprint_tracker  # ty: ignore[unresolved-import]


@pytest.fixture(autouse=True)
def _reset_tracker():
    fingerprint_tracker.reset()
    yield
    fingerprint_tracker.reset()


class TestFingerprintRecord:
    def test_record_creates_new_entry(self):
        fingerprint_tracker.record("fp-a", "1.2.3.4", "Mozilla/5.0")
        records = fingerprint_tracker.list_all()
        assert len(records) == 1
        assert records[0]["ip"] == "1.2.3.4"
        assert records[0]["msgs"] == 1
        assert records[0]["blocked"] == 0
        assert records[0]["state"] == "active"

    def test_record_noop_on_empty_fingerprint(self):
        fingerprint_tracker.record("", "1.2.3.4", "UA")
        fingerprint_tracker.record(None, "1.2.3.4", "UA")
        assert fingerprint_tracker.list_all() == []

    def test_record_increments_msgs(self):
        for _ in range(5):
            fingerprint_tracker.record("fp-a", "1.2.3.4", "UA")
        records = fingerprint_tracker.list_all()
        assert records[0]["msgs"] == 5

    def test_record_counts_blocked(self):
        fingerprint_tracker.record("fp-a", "1.2.3.4", "UA", blocked=True)
        fingerprint_tracker.record("fp-a", "1.2.3.4", "UA", blocked=True)
        fingerprint_tracker.record("fp-a", "1.2.3.4", "UA")
        records = fingerprint_tracker.list_all()
        assert records[0]["blocked"] == 2
        assert records[0]["msgs"] == 3
        assert records[0]["state"] == "blocked"

    def test_hash_is_truncated_sha256(self):
        fingerprint_tracker.record("raw-fp", "1.1.1.1", "UA")
        rec = fingerprint_tracker.list_all()[0]
        assert len(rec["hash"]) == 12
        assert "raw-fp" not in rec["hash"]
        # Deterministic across calls
        fingerprint_tracker.reset()
        fingerprint_tracker.record("raw-fp", "9.9.9.9", "UA")
        rec2 = fingerprint_tracker.list_all()[0]
        assert rec["hash"] == rec2["hash"]

    def test_ua_is_truncated(self):
        long_ua = "X" * 5000
        fingerprint_tracker.record("fp-a", "1.1.1.1", long_ua)
        rec = fingerprint_tracker.list_all()[0]
        assert len(rec["ua"]) <= fingerprint_tracker.UA_MAX_LEN


class TestFingerprintState:
    def test_state_flagged_when_rate_exceeds_threshold(self):
        now = time.time()
        rec = fingerprint_tracker._Record("fp", "1.1.1.1", "UA", now)
        # Inject 70 recent timestamps (above the 60/min flag threshold)
        for _ in range(70):
            rec._timestamps.append(now)
        rec.msgs = 70
        assert rec.state(now) == "flagged"

    def test_state_active_when_quiet(self):
        now = time.time()
        rec = fingerprint_tracker._Record("fp", "1.1.1.1", "UA", now)
        rec._timestamps.append(now)
        rec.msgs = 1
        assert rec.state(now) == "active"

    def test_state_blocked_takes_precedence(self):
        now = time.time()
        rec = fingerprint_tracker._Record("fp", "1.1.1.1", "UA", now)
        rec.blocked = 1
        for _ in range(100):
            rec._timestamps.append(now)
        assert rec.state(now) == "blocked"


class TestFingerprintListAndReset:
    def test_list_sorted_by_last_seen_desc(self):
        fingerprint_tracker.record("fp-a", "1.1.1.1", "UA")
        time.sleep(0.01)
        fingerprint_tracker.record("fp-b", "2.2.2.2", "UA")
        records = fingerprint_tracker.list_all()
        assert records[0]["ip"] == "2.2.2.2"
        assert records[1]["ip"] == "1.1.1.1"

    def test_list_limit_is_applied(self):
        for i in range(20):
            fingerprint_tracker.record(f"fp-{i}", "1.1.1.1", "UA")
        assert len(fingerprint_tracker.list_all(limit=5)) == 5

    def test_list_limit_capped_to_max_records(self):
        for i in range(3):
            fingerprint_tracker.record(f"fp-{i}", "1.1.1.1", "UA")
        # Huge limit still safe — capped to MAX_RECORDS
        records = fingerprint_tracker.list_all(limit=99999)
        assert len(records) == 3

    def test_reset_clears_everything(self):
        fingerprint_tracker.record("fp-a", "1.1.1.1", "UA")
        fingerprint_tracker.reset()
        assert fingerprint_tracker.list_all() == []

    def test_get_returns_record_or_none(self):
        fingerprint_tracker.record("fp-a", "1.1.1.1", "UA")
        got = fingerprint_tracker.get("fp-a")
        assert got is not None
        assert got["ip"] == "1.1.1.1"
        assert fingerprint_tracker.get("nonexistent") is None


class TestFingerprintLRU:
    def test_lru_eviction_when_max_records_exceeded(self, monkeypatch):
        monkeypatch.setattr(fingerprint_tracker, "MAX_RECORDS", 3)
        fingerprint_tracker.record("fp-1", "1.1.1.1", "UA")
        time.sleep(0.01)
        fingerprint_tracker.record("fp-2", "2.2.2.2", "UA")
        time.sleep(0.01)
        fingerprint_tracker.record("fp-3", "3.3.3.3", "UA")
        time.sleep(0.01)
        # This should evict fp-1 (oldest last_seen)
        fingerprint_tracker.record("fp-4", "4.4.4.4", "UA")
        records = fingerprint_tracker.list_all()
        ips = {r["ip"] for r in records}
        assert "4.4.4.4" in ips
        assert "1.1.1.1" not in ips
        assert len(records) == 3


class TestFingerprintAdminRoutes:
    def test_list_fingerprints_unauthorized(self, client):
        rv = client.get("/admin/fingerprints")
        assert rv.status_code == 401

    def test_list_fingerprints_authorized(self, client):
        fingerprint_tracker.record("fp-a", "1.1.1.1", "UA")
        with client.session_transaction() as sess:
            sess["logged_in"] = True
        rv = client.get("/admin/fingerprints")
        assert rv.status_code == 200
        data = rv.get_json()
        assert "records" in data
        assert "count" in data
        assert data["count"] == 1

    def test_list_fingerprints_limit_param(self, client):
        for i in range(10):
            fingerprint_tracker.record(f"fp-{i}", "1.1.1.1", "UA")
        with client.session_transaction() as sess:
            sess["logged_in"] = True
        rv = client.get("/admin/fingerprints?limit=3")
        assert rv.status_code == 200
        data = rv.get_json()
        assert len(data["records"]) == 3

    def test_list_fingerprints_bad_limit_falls_back(self, client):
        fingerprint_tracker.record("fp-a", "1.1.1.1", "UA")
        with client.session_transaction() as sess:
            sess["logged_in"] = True
        rv = client.get("/admin/fingerprints?limit=not-a-number")
        assert rv.status_code == 200

    def test_reset_requires_csrf(self, client):
        with client.session_transaction() as sess:
            sess["logged_in"] = True
        rv = client.post("/admin/fingerprints/reset")
        assert rv.status_code == 403

    def test_reset_fingerprints_authorized(self, client):
        fingerprint_tracker.record("fp-a", "1.1.1.1", "UA")
        with client.session_transaction() as sess:
            sess["logged_in"] = True
            sess["csrf_token"] = "test-csrf"
        rv = client.post(
            "/admin/fingerprints/reset",
            headers={"X-CSRF-Token": "test-csrf"},
        )
        assert rv.status_code == 200
        assert fingerprint_tracker.list_all() == []
