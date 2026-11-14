"""Webhook address policy additions and retry accounting."""

import ipaddress
import ssl

import pytest

from server.services import webhook as webhook_mod
from server.services.webhook import WebhookService


@pytest.mark.parametrize("addr", ["fd00:c1::a9fe:a9fe", "fd20:ce::254", "fd00:ec2::254"])
def test_cloud_metadata_ipv6_addresses_are_refused(addr):
    assert webhook_mod._blocked_address(ipaddress.ip_address(addr)) is True


def test_ipv6_with_link_local_ipv4_in_low_bits_is_refused():
    assert webhook_mod._blocked_address(ipaddress.ip_address("fd12:3456::a9fe:1")) is True
    reason = webhook_mod._blocked_reason(ipaddress.ip_address("fd12:3456::a9fe:1"))
    assert reason == webhook_mod._METADATA_REASON


# Every embedded-IPv4 form whose low 32 bits are the cloud metadata address
# 169.254.169.254. The list is a regression guard: narrowing the rule must
# not let any of these through again.
@pytest.mark.parametrize(
    "addr",
    [
        "169.254.169.254",  # IPv4 link-local literal
        "::ffff:169.254.169.254",  # IPv4-mapped (::ffff:0:0/96)
        "::ffff:a9fe:a9fe",  # same, written in hex
        "::ffff:0:a9fe:a9fe",  # IPv4-translated (::ffff:0:0:0/96, SIIT)
        "::a9fe:a9fe",  # IPv4-compatible (::/96)
        "64:ff9b::a9fe:a9fe",  # well-known NAT64
        "64:ff9b:1::a9fe:a9fe",  # RFC 8215 local NAT64
        "fd00:ec2::254",  # AWS metadata over IPv6
        "fd00:c1::a9fe:a9fe",  # Oracle Cloud
        "fd20:ce::254",  # Google Compute Engine
        "100.100.100.200",  # Alibaba Cloud
        "fe80::1",  # IPv6 link-local
    ],
)
def test_every_blocked_address_form_stays_blocked(addr):
    assert webhook_mod._blocked_address(ipaddress.ip_address(addr)) is True


def test_global_unicast_address_with_the_same_low_bits_is_allowed():
    """Only private (ULA) space is read as a metadata-shaped address; in a
    global unicast address the low 32 bits are ordinary host bits."""
    assert webhook_mod._blocked_address(ipaddress.ip_address("2001:db8:1::a9fe:a9fe")) is False


def test_refusal_message_names_the_actual_reason():
    link_local = webhook_mod._blocked_reason(ipaddress.ip_address("fe80::1"))
    metadata = webhook_mod._blocked_reason(ipaddress.ip_address("fd00:ec2::254"))
    assert link_local == webhook_mod._LINK_LOCAL_REASON
    assert metadata == webhook_mod._METADATA_REASON
    assert webhook_mod._blocked_reason(ipaddress.ip_address("10.0.0.5")) is None


@pytest.mark.parametrize(
    "addr", ["fd12:3456::1", "fd00:c1::1", "fc00::10", "2001:db8::5", "::1", "10.0.0.5"]
)
def test_ordinary_private_and_loopback_addresses_stay_allowed(addr):
    assert webhook_mod._blocked_address(ipaddress.ip_address(addr)) is False


def _hook(svc, retry_count=2):
    hook_id = svc.register(
        {"url": "https://hooks.example/h", "events": ["on_danmu"], "retry_count": retry_count}
    )
    return svc._hooks[hook_id]


def test_tls_errors_are_retried_and_counted(monkeypatch):
    svc = WebhookService()
    hook = _hook(svc, retry_count=2)
    calls = []

    def fail(*_a, **_k):
        calls.append(1)
        raise ssl.SSLCertVerificationError("certificate verify failed")

    monkeypatch.setattr(webhook_mod, "_post", fail)
    monkeypatch.setattr(webhook_mod.time, "sleep", lambda _s: None)
    svc._send_webhook(hook, "on_danmu", {"text": "x"})
    assert len(calls) == 3
    assert svc.list_deliveries()[0]["retries"] == 2


def test_load_entry_turns_an_out_of_range_count_into_valueerror():
    import math

    for bad in (math.inf, 1e999):  # 1e999 parses from JSON as inf
        with pytest.raises(ValueError):
            webhook_mod._load_entry(
                {"url": "https://h.example/h", "events": ["on_danmu"], "success_count": bad}
            )


def test_status_update_does_not_fsync_on_every_delivery(monkeypatch):
    from server.services import atomic_file

    svc = WebhookService()
    hook_id = svc.register({"url": "https://hooks.example/h", "events": ["on_danmu"]})

    fsyncs = []
    monkeypatch.setattr(atomic_file.os, "fsync", lambda fd: fsyncs.append(fd))
    svc._update_status(hook_id, 200, None, ok=True)
    assert fsyncs == []  # a status-only write must not hit the gevent hub
    assert svc.get_hook(hook_id)["success_count"] == 1

    # A configuration write still fsyncs durably.
    svc.register({"url": "https://hooks.example/h2", "events": ["on_danmu"]})
    assert fsyncs


def test_refused_destination_is_tried_once_and_logged_as_one_try(monkeypatch):
    svc = WebhookService()
    hook = _hook(svc, retry_count=2)
    calls = []

    def refuse(*_a, **_k):
        calls.append(1)
        raise ValueError(webhook_mod._LINK_LOCAL_REASON)

    monkeypatch.setattr(webhook_mod, "_post", refuse)
    monkeypatch.setattr(webhook_mod.time, "sleep", lambda _s: None)
    svc._send_webhook(hook, "on_danmu", {"text": "x"})
    assert len(calls) == 1
    assert svc.list_deliveries()[0]["retries"] == 0
