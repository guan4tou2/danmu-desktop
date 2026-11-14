"""Outgoing webhook destination checks.

What these pin down, at the level of the mechanism rather than of particular
URL spellings:

* the decision is made on the addresses a host *resolves to*, every one of them;
* the connection is opened to exactly the addresses that were checked;
* a redirect is reported, never followed;
* a refused destination is not retried, an unresolvable one is.

``conftest._isolate_webhook_store`` already keeps every test off DNS and the
network; the tests here replace ``_resolve`` / ``_connect_any`` again with
their own recorders.
"""

import ipaddress
import socket
import threading

import pytest

from server.services import webhook as wh

PUBLIC = (socket.AF_INET, ("203.0.113.10", 80))
LAN = (socket.AF_INET, ("192.168.1.20", 80))
LOOPBACK = (socket.AF_INET, ("127.0.0.1", 80))
LINK_LOCAL = (socket.AF_INET, ("169.254.10.10", 80))
LINK_LOCAL_V6 = (socket.AF_INET6, ("fe80::1", 80, 0, 0))


def _resolver(*addrs):
    calls = []

    def resolve(host, port):
        calls.append((host, port))
        return list(addrs)

    resolve.calls = calls
    return resolve


# ─── the decision follows the resolved addresses ──────────────────────────


@pytest.mark.parametrize("addr", [LINK_LOCAL, LINK_LOCAL_V6])
def test_a_name_that_resolves_to_a_link_local_address_is_refused(monkeypatch, addr):
    monkeypatch.setattr(wh, "_resolve", _resolver(addr))
    with pytest.raises(ValueError) as excinfo:
        wh._check_destination("http://hooks.example.test/in")
    assert not isinstance(excinfo.value, wh._ResolveError)


def test_one_refused_address_among_several_refuses_the_host(monkeypatch):
    monkeypatch.setattr(wh, "_resolve", _resolver(PUBLIC, LINK_LOCAL))
    with pytest.raises(ValueError):
        wh._check_destination("http://hooks.example.test/in")


@pytest.mark.parametrize("addr", [PUBLIC, LAN, LOOPBACK])
def test_public_lan_and_loopback_destinations_stay_allowed(monkeypatch, addr):
    monkeypatch.setattr(wh, "_resolve", _resolver(addr))
    scheme, host, port, target, addrs = wh._check_destination("http://hooks.example.test/in?a=1")
    assert (scheme, host, port, target) == ("http", "hooks.example.test", 80, "/in?a=1")
    assert addrs == [addr]


def test_a_numeric_host_is_judged_by_the_address_it_denotes(monkeypatch):
    # Same address as LINK_LOCAL, written as a single integer: no name lookup
    # is needed to know where it points, so none is made.
    resolve = _resolver(PUBLIC)
    monkeypatch.setattr(wh, "_resolve", resolve)
    as_integer = str(int(ipaddress.IPv4Address(LINK_LOCAL[1][0])))
    with pytest.raises(ValueError):
        wh._check_destination(f"http://{as_integer}/in")
    assert resolve.calls == []


def test_a_host_that_does_not_resolve_is_a_separate_outcome(monkeypatch):
    def failing(host, port):
        raise socket.gaierror("no such host")

    monkeypatch.setattr(wh, "_resolve", failing)
    with pytest.raises(wh._ResolveError):
        wh._check_destination("http://not-up-yet.example.test/in")
    # Saving such a webhook is allowed; each delivery checks again.
    wh._reject_link_local("http://not-up-yet.example.test/in")


def test_saving_a_webhook_runs_the_same_check(monkeypatch):
    monkeypatch.setattr(wh, "_resolve", _resolver(LINK_LOCAL))
    with pytest.raises(ValueError):
        wh._reject_link_local("http://hooks.example.test/in")


# ─── the connection goes to the checked addresses, once ───────────────────


def _serve_once(response: bytes):
    """A connected socket pair: the client end, and what the peer received."""
    client, server = socket.socketpair()
    received = {}

    def run():
        data = b""
        server.settimeout(5)
        try:
            while b"\r\n\r\n" not in data:
                chunk = server.recv(4096)
                if not chunk:
                    break
                data += chunk
            received["request"] = data
            server.sendall(response)
        finally:
            server.close()

    thread = threading.Thread(target=run, daemon=True)
    thread.start()
    return client, received, thread


def test_post_connects_only_to_the_addresses_that_were_checked(monkeypatch):
    monkeypatch.setattr(wh, "_resolve", _resolver(PUBLIC))
    client, received, thread = _serve_once(b"HTTP/1.1 204 No Content\r\nContent-Length: 0\r\n\r\n")
    connected = []

    def connect_any(addrs, timeout):
        connected.append(list(addrs))
        return client

    monkeypatch.setattr(wh, "_connect_any", connect_any)
    status = wh._post(
        "http://hooks.example.test/in", b"{}", {"Content-Type": "application/json"}, 5
    )
    thread.join(timeout=5)

    assert status == 204
    assert connected == [[PUBLIC]]
    # The request still names the host the admin configured.
    assert b"Host: hooks.example.test" in received["request"]


def test_a_redirect_is_returned_not_followed(monkeypatch):
    resolve = _resolver(PUBLIC)
    monkeypatch.setattr(wh, "_resolve", resolve)
    client, _received, thread = _serve_once(
        b"HTTP/1.1 302 Found\r\n"
        b"Location: http://elsewhere.example.test/\r\n"
        b"Content-Length: 0\r\n\r\n"
    )
    connections = []

    def connect_any(addrs, timeout):
        connections.append(list(addrs))
        return client

    monkeypatch.setattr(wh, "_connect_any", connect_any)
    status = wh._post("http://hooks.example.test/in", b"{}", {}, 5)
    thread.join(timeout=5)

    assert status == 302
    assert len(connections) == 1
    assert [host for host, _port in resolve.calls] == ["hooks.example.test"]


# ─── delivery: what gets retried ──────────────────────────────────────────


def _hook(retry_count=2):
    return wh.WebhookConfig.from_dict(
        {
            "id": "h1",
            "url": "http://hooks.example.test/in",
            "events": ["on_danmu"],
            "format": "json",
            "retry_count": retry_count,
        }
    )


def test_a_refused_destination_is_not_retried(monkeypatch):
    attempts = []

    def post(url, body, headers, timeout):
        attempts.append(url)
        raise ValueError("refused")

    monkeypatch.setattr(wh, "_post", post)
    monkeypatch.setattr(wh.time, "sleep", lambda _s: None)
    wh.WebhookService()._send_webhook(_hook(), "on_danmu", {"text": "x"})
    assert len(attempts) == 1


def test_an_unresolvable_destination_is_retried(monkeypatch):
    attempts = []

    def post(url, body, headers, timeout):
        attempts.append(url)
        raise wh._ResolveError("no such host")

    monkeypatch.setattr(wh, "_post", post)
    monkeypatch.setattr(wh.time, "sleep", lambda _s: None)
    wh.WebhookService()._send_webhook(_hook(retry_count=2), "on_danmu", {"text": "x"})
    assert len(attempts) == 3


def test_a_redirect_response_counts_as_a_failed_delivery(monkeypatch):
    monkeypatch.setattr(wh, "_post", lambda url, body, headers, timeout: 302)
    monkeypatch.setattr(wh.time, "sleep", lambda _s: None)
    service = wh.WebhookService()
    service._send_webhook(_hook(retry_count=0), "on_danmu", {"text": "x"})
    last = service.list_deliveries(limit=1)[0]
    assert last["ok"] is False
    assert last["code"] == 302
