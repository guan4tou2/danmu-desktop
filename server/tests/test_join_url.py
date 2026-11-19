"""The audience-facing address (services/join_url.py).

A host who opens the admin panel on ``localhost`` must not end up projecting
a QR that points every phone at its own ``localhost``.
"""

import pytest

from server.services import join_url


def _login(client, base_url="http://localhost:4000"):
    # The session cookie belongs to the host that set it: log in on the same
    # address the test then requests.
    client.post("/login", data={"password": "test"}, base_url=base_url)


class _Probe:
    """Stands in for the UDP socket used to ask the OS for the LAN address."""

    def __init__(self, address=None, error=None):
        self._address, self._error = address, error

    def connect(self, _target):
        if self._error:
            raise self._error

    def getsockname(self):
        return (self._address, 0)

    def close(self):
        pass


@pytest.fixture()
def lan(monkeypatch):
    """Pretend this machine is (or is not) on a LAN. Returns a setter."""
    monkeypatch.setattr(join_url, "in_container", lambda: False)

    def set_address(address=None, error=None, hostname_ip=None):
        monkeypatch.setattr(
            join_url.socket, "socket", lambda *a, **k: _Probe(address=address, error=error)
        )
        if hostname_ip is None:
            monkeypatch.setattr(
                join_url.socket, "gethostbyname", lambda _n: (_ for _ in ()).throw(OSError())
            )
        else:
            monkeypatch.setattr(join_url.socket, "gethostbyname", lambda _n: hostname_ip)

    return set_address


@pytest.mark.parametrize(
    "host,loopback",
    [
        ("localhost", True),
        ("LOCALHOST", True),
        ("app.localhost", True),
        ("127.0.0.1", True),
        ("0.0.0.0", True),  # what some hosts type to open the panel on this machine
        ("localhost.", True),
        ("127.5.6.7", True),
        ("::1", True),
        ("[::1]", True),
        ("192.168.1.20", False),
        ("danmu.example.com", False),
        ("localhost.example.com", False),
        ("", False),
        (None, False),
    ],
)
def test_loopback_hosts(host, loopback):
    assert join_url.is_loopback_host(host) is loopback


@pytest.mark.parametrize(
    "host_url",
    ["https://danmu.example.com/", "http://192.168.1.20:4000/", "https://10.0.0.5:8443"],
)
def test_a_real_address_is_left_alone(lan, host_url):
    lan(address="192.168.9.9")  # even though a LAN address is available

    assert join_url.resolve(host_url) == {"url": host_url.rstrip("/"), "source": "request"}


@pytest.mark.parametrize(
    "host_url,expected",
    [
        ("http://localhost:4000/", "http://192.168.1.20:4000"),
        ("http://127.0.0.1:4000/", "http://192.168.1.20:4000"),
        ("https://localhost/", "https://192.168.1.20"),
        ("http://[::1]:4000/", "http://192.168.1.20:4000"),
    ],
)
def test_localhost_becomes_the_lan_address_with_the_same_scheme_and_port(lan, host_url, expected):
    lan(address="192.168.1.20")

    assert join_url.resolve(host_url) == {"url": expected, "source": "lan"}


def test_no_network_is_reported_rather_than_hidden(lan):
    lan(error=OSError("network unreachable"))

    assert join_url.resolve("http://localhost:4000/") == {
        "url": "http://localhost:4000",
        "source": "unavailable",
    }


@pytest.mark.parametrize("useless", ["127.0.0.1", "169.254.10.3", "0.0.0.0", "not-an-ip"])
def test_addresses_nobody_else_can_reach_are_not_offered(lan, useless):
    lan(address=useless)

    assert join_url.resolve("http://localhost:4000/")["source"] == "unavailable"


def test_isolated_network_falls_back_to_the_hostname_address(lan):
    lan(error=OSError("no route"), hostname_ip="192.168.50.7")

    assert join_url.resolve("http://localhost:4000/")["url"] == "http://192.168.50.7:4000"


def test_inside_a_container_the_container_address_is_not_offered(lan, monkeypatch):
    lan(address="172.18.0.3")
    monkeypatch.setattr(join_url, "in_container", lambda: True)

    assert join_url.resolve("http://localhost:4000/")["source"] == "unavailable"


# ── TRUSTED_HOSTS: an address the server itself would refuse is no use ───────


def test_lan_address_the_server_would_refuse_is_not_offered(lan):
    """With TRUSTED_HOSTS set, Flask answers 400 to any other Host. Showing a
    LAN address that is not listed would send the audience to a 400."""
    lan(address="192.168.1.20")

    assert join_url.resolve("http://localhost:4000/", ["localhost", "127.0.0.1"]) == {
        "url": "http://localhost:4000",
        "source": "unavailable",
        "blocked_host": "192.168.1.20",  # what the warning tells the host to add
    }


def test_listed_lan_address_is_offered(lan):
    lan(address="192.168.1.20")

    resolved = join_url.resolve("http://localhost:4000/", ["localhost", "192.168.1.20"])

    assert resolved == {"url": "http://192.168.1.20:4000", "source": "lan"}


def test_an_ip_address_the_operator_listed_is_used_when_the_lan_one_is_refused(lan):
    lan(address="192.168.1.20")  # detected, but not on the list

    assert join_url.resolve("https://localhost/", ["127.0.0.1", "203.0.113.9"]) == {
        "url": "https://203.0.113.9",
        "source": "configured",
    }


@pytest.mark.parametrize(
    "trusted",
    [
        ["localhost", "web"],  # a compose service name: no phone can resolve it
        ["localhost", "danmu.example.com"],  # behind a proxy: scheme and port unknown
        ["localhost", ".example.com"],  # a pattern, not an address
        ["localhost", "0.0.0.0", "169.254.10.10"],  # nobody else can reach these
    ],
)
def test_a_name_on_the_list_is_not_turned_into_an_address(lan, trusted):
    """Guessing ``http://danmu.example.com:4000`` from a localhost request
    would print a QR that looks right and does not open."""
    lan(address="192.168.1.20")

    assert join_url.resolve("http://localhost:4000/", trusted) == {
        "url": "http://localhost:4000",
        "source": "unavailable",
        "blocked_host": "192.168.1.20",
    }


def test_the_listed_address_keeps_the_port_the_host_is_using(lan):
    lan(error=OSError())

    resolved = join_url.resolve("http://localhost:4000/", ["localhost", "203.0.113.9"])

    assert resolved["url"] == "http://203.0.113.9:4000"
    # An entry written with a port is the same address.
    with_port = join_url.resolve("http://localhost:4000/", ["localhost", "203.0.113.9:8443"])
    assert with_port["url"] == "http://203.0.113.9:4000"


def test_without_trusted_hosts_any_lan_address_will_do(lan):
    lan(address="192.168.1.20")

    assert join_url.resolve("http://localhost:4000/", None)["source"] == "lan"


def test_a_host_header_with_a_nonsense_port_is_not_an_error():
    assert join_url.resolve("http://localhost:notaport/")["source"] == "request"


# ── where it is used ─────────────────────────────────────────────────────────


def _trust(app, *hosts):
    app.config["TRUSTED_HOSTS"] = [*app.config["TRUSTED_HOSTS"], *hosts]


def test_admin_qr_points_at_the_lan_address_when_opened_on_localhost(client, app, lan):
    _trust(app, "192.168.1.20")
    lan(address="192.168.1.20")
    _login(client)

    body = client.get("/admin/qr/public", base_url="http://localhost:4000").get_json()

    assert body["url"] == "http://192.168.1.20:4000"
    assert body["source"] == "lan"
    assert body["svg"].lstrip().startswith("<svg")


def test_admin_qr_says_when_it_is_still_local(client, lan):
    lan(error=OSError())
    _login(client)

    body = client.get("/admin/qr/public", base_url="http://localhost:4000").get_json()

    assert (body["url"], body["source"]) == ("http://localhost:4000", "unavailable")


def test_admin_qr_names_the_lan_address_the_server_refuses(client, lan):
    """The test config trusts only localhost — like a default local install."""
    lan(address="192.168.1.20")
    _login(client)

    body = client.get("/admin/qr/public", base_url="http://localhost:4000").get_json()

    assert (body["url"], body["source"]) == ("http://localhost:4000", "unavailable")
    assert body["blocked_host"] == "192.168.1.20"


def test_admin_qr_keeps_a_public_address(client, app, lan):
    _trust(app, "danmu.example.com")
    lan(address="192.168.1.20")
    _login(client, "https://danmu.example.com")

    body = client.get("/admin/qr/public", base_url="https://danmu.example.com").get_json()

    assert (body["url"], body["source"]) == ("https://danmu.example.com", "request")


def test_admin_qr_requires_login(client):
    assert client.get("/admin/qr/public").status_code in (302, 401, 403)


def test_overlay_idle_screen_shows_the_lan_address(client, app, lan):
    _trust(app, "192.168.1.20")
    lan(address="192.168.1.20")

    html = client.get("/overlay", base_url="http://localhost:4000").get_data(as_text=True)

    assert "http://192.168.1.20:4000" in html  # OVERLAY_CONFIG.joinUrl
    assert "localhost:4000" not in html
    assert 'id="overlayIdleQr"' in html
    assert "joinReachable: true" in html


def test_overlay_idle_screen_prints_no_qr_when_nobody_could_use_it(client, lan):
    """The idle screen is projected to the room. A QR that opens each phone's
    own localhost is worse than none; the host sees why in the admin panel."""
    lan(address="192.168.1.20")  # detected, but the test app only trusts localhost

    html = client.get("/overlay", base_url="http://localhost:4000").get_data(as_text=True)

    assert 'id="overlayIdleQr"' not in html
    assert "joinReachable: false" in html
    assert "用手機掃描 QR" not in html
