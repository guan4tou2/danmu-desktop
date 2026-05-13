"""Unit tests for fire_sources detection + ring buffer."""

import time

import pytest

from server.services import fire_sources


@pytest.fixture(autouse=True)
def _reset_buffer():
    fire_sources.clear()
    yield
    fire_sources.clear()


# ─── detect() ────────────────────────────────────────────────────────────────


def test_detect_explicit_header_wins():
    s = fire_sources.detect(ua="Mozilla/5.0", explicit="slido")
    assert s == "slido"


def test_detect_lowercases_explicit():
    assert fire_sources.detect(explicit="OBS") == "obs"


def test_detect_truncates_explicit():
    long_explicit = "x" * 100
    s = fire_sources.detect(explicit=long_explicit)
    assert len(s) == 32


def test_detect_falls_back_to_ua():
    s = fire_sources.detect(ua="slido-extension/0.2.0")
    assert s == "slido"


def test_detect_obs_ua():
    assert fire_sources.detect(ua="OBS-Studio-29") == "obs"


def test_detect_default_web():
    assert fire_sources.detect(ua="Mozilla/5.0 (Macintosh; Intel Mac OS X)") == "web"


def test_detect_handles_empty_args():
    assert fire_sources.detect() == "web"


# ─── record + recent_sources ─────────────────────────────────────────────────


def test_record_and_recent_lists_distinct_sources():
    fire_sources.record("slido")
    fire_sources.record("slido", "fp_abc")
    fire_sources.record("web")
    out = fire_sources.recent_sources(window_sec=300)
    assert len(out) == 2
    by_source = {e["source"]: e for e in out}
    assert by_source["slido"]["count"] == 2
    assert by_source["web"]["count"] == 1


def test_recent_excludes_old_events():
    """Stale entries outside the window are dropped."""
    # Inject a 1h-old slido entry directly.
    with fire_sources._lock:
        fire_sources._buffer.append(
            {
                "ts": time.time() - 3600,
                "source": "slido",
                "fingerprint": None,
            }
        )
    fire_sources.record("web")  # within window
    out = fire_sources.recent_sources(window_sec=300)
    assert len(out) == 1
    assert out[0]["source"] == "web"


def test_recent_sorted_newest_first():
    fire_sources.record("slido")
    time.sleep(0.01)
    fire_sources.record("obs")
    time.sleep(0.01)
    fire_sources.record("discord")
    out = fire_sources.recent_sources(window_sec=60)
    assert [e["source"] for e in out] == ["discord", "obs", "slido"]


def test_record_skips_empty_source():
    fire_sources.record("")
    fire_sources.record(None)  # type: ignore[arg-type]
    out = fire_sources.recent_sources(window_sec=60)
    assert out == []


def test_buffer_capped_at_200():
    for i in range(250):
        fire_sources.record("web")
    # Buffer should hold at most 200; we record 250 but they're all "web"
    # so distinct count is still 1.
    out = fire_sources.recent_sources(window_sec=60)
    assert len(out) == 1
    assert out[0]["source"] == "web"
    assert out[0]["count"] <= 200


def test_fingerprint_truncated_to_12_chars():
    fire_sources.record("slido", fingerprint="x" * 100)
    with fire_sources._lock:
        last = list(fire_sources._buffer)[-1]
    assert last["fingerprint"] == "x" * 12


# ─── recent_ips (v5.2 Sprint 2) ─────────────────────────────────────────────


def test_recent_ips_aggregates_by_ip():
    fire_sources.record("slido", ip="1.2.3.4", ua="slido/1.0")
    fire_sources.record("slido", ip="1.2.3.4", ua="slido/1.0")
    fire_sources.record("web", ip="5.6.7.8", ua="Mozilla")
    out = fire_sources.recent_ips(window_sec=300)
    by_ip = {r["ip"]: r for r in out}
    assert by_ip["1.2.3.4"]["count"] == 2
    assert by_ip["5.6.7.8"]["count"] == 1


def test_recent_ips_sorted_by_count_desc_then_recency():
    fire_sources.record("web", ip="A")
    fire_sources.record("web", ip="A")
    fire_sources.record("web", ip="A")
    fire_sources.record("web", ip="B")
    out = fire_sources.recent_ips(window_sec=300)
    assert out[0]["ip"] == "A"
    assert out[1]["ip"] == "B"


def test_recent_ips_skips_entries_without_ip():
    fire_sources.record("slido", fingerprint="fp1")  # no ip
    fire_sources.record("slido", ip="1.1.1.1")
    out = fire_sources.recent_ips(window_sec=300)
    assert len(out) == 1
    assert out[0]["ip"] == "1.1.1.1"


def test_recent_ips_caps_at_limit():
    for i in range(20):
        fire_sources.record("web", ip=f"10.0.0.{i}")
    out = fire_sources.recent_ips(window_sec=300, limit=5)
    assert len(out) == 5


def test_recent_ips_excludes_old_entries():
    with fire_sources._lock:
        fire_sources._buffer.append(
            {
                "ts": time.time() - 7200,  # 2 hours ago
                "source": "slido",
                "fingerprint": None,
                "ip": "stale.ip",
                "ua": None,
            }
        )
    fire_sources.record("slido", ip="fresh.ip")
    out = fire_sources.recent_ips(window_sec=3600)
    assert len(out) == 1
    assert out[0]["ip"] == "fresh.ip"
