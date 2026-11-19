"""The address the audience should open — and the entry QR encodes.

Everywhere that shows a "join" address used to take it from the request:
whatever the host typed to open the admin panel. That is right behind a
domain or a reverse proxy, and wrong in the most common self-hosted setup:
the host opens ``http://localhost:4000`` on the machine that runs the
server, so the projected QR sends every phone to its own ``localhost``.

``resolve`` keeps the request's address unless its host is loopback. Then it
substitutes this machine's LAN address (same scheme, same port). When no LAN
address can be found — offline, or inside a container, where the only
address visible is the container's own — it says so (``source ==
"unavailable"``) instead of quietly handing back ``localhost``; callers show
a warning.

One more thing decides whether an address is any use: ``TRUSTED_HOSTS``. With
it set, the server answers 400 to every Host it does not list, so a LAN
address that is not on the list would be shown, scanned, and refused. Such an
address is never offered; an IP address the operator did list is used instead,
and failing that the warning names the address that needs adding.

No new dependency: the standard library, plus Werkzeug's own trusted-host
check so the answer here is the one the server will give.
"""

from __future__ import annotations

import ipaddress
import os
import socket
from typing import Dict, Iterable, Optional
from urllib.parse import urlsplit

from werkzeug.sansio.utils import host_is_trusted

# Never sent to: connecting a UDP socket only asks the OS which local address
# it would route from. A private, unroutable target works without internet.
_PROBE_TARGET = ("10.255.255.255", 1)


def is_loopback_host(host: Optional[str]) -> bool:
    """``localhost``, ``*.localhost``, 127.0.0.0/8, ``::1`` — and ``0.0.0.0``.

    ``0.0.0.0`` is not loopback, but a browser on the server's own machine
    opens it as if it were, and it is just as useless on a phone.
    """
    if not host:
        return False
    name = host.strip().strip("[]").lower().rstrip(".")
    if name == "localhost" or name.endswith(".localhost"):
        return True
    try:
        address = ipaddress.ip_address(name)
    except ValueError:
        return False
    return address.is_loopback or address.is_unspecified


def _usable(candidate: Optional[str]) -> Optional[str]:
    """An IPv4 address other devices on the network could reach, or None."""
    if not candidate:
        return None
    try:
        address = ipaddress.ip_address(candidate)
    except ValueError:
        return None
    if address.version != 4:
        return None
    if address.is_loopback or address.is_link_local or address.is_unspecified:
        return None
    return str(address)


def in_container() -> bool:
    """Inside Docker the detectable address is the container's, not the host's."""
    return os.path.exists("/.dockerenv") or os.path.exists("/run/.containerenv")


def detect_lan_ip() -> Optional[str]:
    """This machine's address on the local network, or None.

    Returns None in a container: 172.x there is reachable from nobody's phone.
    """
    if in_container():
        return None
    probe = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        probe.connect(_PROBE_TARGET)
        found = _usable(probe.getsockname()[0])
    except OSError:
        found = None
    finally:
        probe.close()
    if found:
        return found
    # No default route (an isolated network): fall back to the hostname.
    try:
        return _usable(socket.gethostbyname(socket.gethostname()))
    except OSError:
        return None


def _trusted(host: str, trusted_hosts: Optional[Iterable[str]]) -> bool:
    """Would the server itself accept a request for ``host``?

    With ``TRUSTED_HOSTS`` set, Flask answers 400 to any other Host header —
    so an address that is not on the list is no use to the audience, however
    reachable the machine is.
    """
    if not trusted_hosts:
        return True
    try:
        return host_is_trusted(host, list(trusted_hosts))
    except Exception:  # an unparsable entry must not take the page down
        return False


def _declared_address(trusted_hosts: Optional[Iterable[str]]) -> Optional[str]:
    """An IP address the operator listed for this server, or None.

    ``TRUSTED_HOSTS`` is the one place a deployment says which addresses it
    answers to; setup.sh writes the server's IP there. That covers the case
    detection cannot: inside a container the machine's own address is not
    visible, but the published port is the one the host just used.

    Only IP addresses. A name on the list is not adopted: ``web`` may be a
    compose service nobody's phone can resolve, and a real domain usually
    sits behind a proxy on another scheme and port — building
    ``http://that-domain:4000`` from a localhost request would print a QR
    that looks right and does not open.
    """
    for entry in trusted_hosts or ():
        name = str(entry).strip()
        if name.count(":") == 1:  # "203.0.113.9:4000" — the port is the request's
            name = name.split(":")[0]
        found = _usable(name)
        if found:
            return found
    return None


def resolve(host_url: str, trusted_hosts: Optional[Iterable[str]] = None) -> Dict[str, str]:
    """Return the address the audience should open, and where it came from.

    ``{"url", "source"}``, plus ``"blocked_host"`` in one case below.

    source:
        ``request``      the request's own address (not loopback) — unchanged
        ``lan``          loopback replaced by this machine's LAN address
        ``configured``   loopback replaced by the IP address in ``TRUSTED_HOSTS``
        ``unavailable``  loopback, and nothing better is known; ``url`` is
                         still the loopback one, and callers must warn. When
                         a LAN address exists but ``TRUSTED_HOSTS`` would
                         refuse it, ``blocked_host`` names it so the warning
                         can say what to fix.
    """
    url = (host_url or "").rstrip("/")
    try:
        parts = urlsplit(url)
        hostname, port = parts.hostname, parts.port
    except ValueError:  # a Host header with a nonsense port
        return {"url": url, "source": "request"}
    if not is_loopback_host(hostname):
        return {"url": url, "source": "request"}

    port_suffix = f":{port}" if port else ""
    lan_ip = detect_lan_ip()
    if lan_ip and _trusted(lan_ip, trusted_hosts):
        return {"url": f"{parts.scheme}://{lan_ip}{port_suffix}", "source": "lan"}

    declared = _declared_address(trusted_hosts)
    if declared:
        return {"url": f"{parts.scheme}://{declared}{port_suffix}", "source": "configured"}

    result = {"url": url, "source": "unavailable"}
    if lan_ip:
        result["blocked_host"] = lan_ip
    return result
