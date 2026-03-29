# pyright: reportMissingImports=false
"""Tests for server.services.ip — unified client IP extraction."""

import pytest

from server.app import create_app  # ty: ignore[unresolved-import]
from server.services.ip import get_client_ip  # ty: ignore[unresolved-import]


@pytest.fixture()
def app():
    app = create_app()
    app.config["TESTING"] = True
    return app


class TestGetClientIp:
    """Tests for get_client_ip()."""

    def test_normal_remote_addr(self, app):
        """Returns remote_addr when XFF is not trusted."""
        with app.test_request_context(environ_base={"REMOTE_ADDR": "192.168.1.10"}):
            assert get_client_ip() == "192.168.1.10"

    def test_ipv6_remote_addr(self, app):
        """Returns IPv6 remote_addr."""
        with app.test_request_context(environ_base={"REMOTE_ADDR": "::1"}):
            assert get_client_ip() == "::1"

    def test_trusted_xff_returns_first_ip(self, app):
        """When TRUST_X_FORWARDED_FOR is set, returns leftmost XFF entry."""
        app.config["TRUST_X_FORWARDED_FOR"] = True
        headers = {"X-Forwarded-For": "10.0.0.1, 172.16.0.1"}
        with app.test_request_context(headers=headers, environ_base={"REMOTE_ADDR": "127.0.0.1"}):
            assert get_client_ip() == "10.0.0.1"

    def test_untrusted_xff_ignores_header(self, app):
        """When TRUST_X_FORWARDED_FOR is not set, XFF header is ignored."""
        app.config["TRUST_X_FORWARDED_FOR"] = False
        headers = {"X-Forwarded-For": "10.0.0.1"}
        with app.test_request_context(headers=headers, environ_base={"REMOTE_ADDR": "192.168.1.5"}):
            assert get_client_ip() == "192.168.1.5"

    def test_invalid_xff_falls_through_to_remote_addr(self, app):
        """Invalid XFF IP falls through to remote_addr."""
        app.config["TRUST_X_FORWARDED_FOR"] = True
        headers = {"X-Forwarded-For": "not-an-ip, 172.16.0.1"}
        with app.test_request_context(headers=headers, environ_base={"REMOTE_ADDR": "192.168.1.20"}):
            assert get_client_ip() == "192.168.1.20"

    def test_empty_xff_falls_through(self, app):
        """Empty XFF header falls through to remote_addr."""
        app.config["TRUST_X_FORWARDED_FOR"] = True
        headers = {"X-Forwarded-For": ""}
        with app.test_request_context(headers=headers, environ_base={"REMOTE_ADDR": "192.168.1.30"}):
            assert get_client_ip() == "192.168.1.30"

    def test_no_remote_addr_returns_unknown(self, app):
        """When remote_addr is None/empty, returns 'unknown'."""
        with app.test_request_context(environ_base={"REMOTE_ADDR": ""}):
            # Flask may set remote_addr to empty string or None
            assert get_client_ip() == "unknown"

    def test_invalid_remote_addr_returns_unknown(self, app):
        """When remote_addr is not a valid IP, returns 'unknown'."""
        with app.test_request_context():
            # Override remote_addr with an invalid value
            from flask import request
            with app.test_request_context(environ_base={"REMOTE_ADDR": "garbage"}):
                assert get_client_ip() == "unknown"

    def test_xff_with_ipv6(self, app):
        """XFF with IPv6 address is accepted."""
        app.config["TRUST_X_FORWARDED_FOR"] = True
        headers = {"X-Forwarded-For": "2001:db8::1, 10.0.0.1"}
        with app.test_request_context(headers=headers, environ_base={"REMOTE_ADDR": "127.0.0.1"}):
            assert get_client_ip() == "2001:db8::1"
