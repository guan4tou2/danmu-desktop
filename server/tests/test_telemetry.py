"""Tests for server.services.telemetry ring buffer + sampler."""

import pytest

from server.services import telemetry


@pytest.fixture(autouse=True)
def _reset_telemetry():
    telemetry._reset_for_tests()
    yield
    telemetry._reset_for_tests()


def test_record_message_increments_counter():
    telemetry.record_message()
    telemetry.record_message()
    telemetry.record_message()
    assert telemetry._drain_counter() == 3
    assert telemetry._drain_counter() == 0  # drained


def test_sample_now_populates_series():
    telemetry.sample_now()
    series = telemetry.get_series()
    assert len(series["cpu_series"]) == 1
    assert len(series["mem_series"]) == 1
    assert len(series["ws_series"]) == 1
    assert len(series["rate_series"]) == 1


def test_sample_now_rate_uses_counter():
    telemetry.record_message()
    telemetry.record_message()
    telemetry.sample_now()
    # Counter is per-second; extrapolated × 60 → per-minute
    series = telemetry.get_series()
    assert series["rate_series"][-1] == 120


def test_series_capped_at_series_len():
    for _ in range(telemetry.SERIES_LEN + 20):
        telemetry.sample_now()
    series = telemetry.get_series()
    assert len(series["cpu_series"]) == telemetry.SERIES_LEN
    assert len(series["rate_series"]) == telemetry.SERIES_LEN


def test_get_series_returns_metadata():
    series = telemetry.get_series()
    assert series["series_len"] == telemetry.SERIES_LEN
    assert series["sample_interval_sec"] == telemetry.SAMPLE_INTERVAL_SEC


def test_get_series_returns_empty_before_first_sample():
    series = telemetry.get_series()
    assert series["cpu_series"] == []
    assert series["rate_series"] == []


def test_cpu_mem_are_non_negative_floats():
    telemetry.sample_now()
    series = telemetry.get_series()
    cpu = series["cpu_series"][-1]
    mem = series["mem_series"][-1]
    assert isinstance(cpu, float)
    assert isinstance(mem, float)
    assert cpu >= 0.0
    assert mem >= 0.0


def test_ws_series_is_int():
    telemetry.sample_now()
    series = telemetry.get_series()
    assert isinstance(series["ws_series"][-1], int)


def test_counter_resets_each_sample():
    telemetry.record_message()
    telemetry.sample_now()
    telemetry.sample_now()  # counter should be 0 for second sample
    series = telemetry.get_series()
    assert series["rate_series"][-2] == 60  # 1 msg × 60
    assert series["rate_series"][-1] == 0
