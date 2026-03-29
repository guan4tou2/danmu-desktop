"""Unified client IP extraction with validation."""

from ipaddress import ip_address

from flask import current_app, request


def get_client_ip() -> str:
    """Extract client IP, with optional X-Forwarded-For trust.

    When TRUST_X_FORWARDED_FOR is enabled, validates the leftmost XFF entry
    via ipaddress.ip_address(). Invalid entries fall through to remote_addr.
    """
    trust_xff = bool(current_app.config.get("TRUST_X_FORWARDED_FOR", False))
    if trust_xff:
        xff = request.headers.get("X-Forwarded-For", "")
        if xff:
            candidate = xff.split(",")[0].strip()
            try:
                ip_address(candidate)
                return candidate
            except (ValueError, TypeError):
                pass

    addr = request.remote_addr
    if addr:
        try:
            ip_address(addr)
            return addr
        except (ValueError, TypeError):
            pass
    return "unknown"
