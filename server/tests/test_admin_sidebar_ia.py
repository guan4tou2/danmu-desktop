"""Phase A IA reorg contract tests (2026-05-06).

Locks the admin sidebar order, the legacy → new slug redirects, and the
standalone-security row marker so future edits don't quietly drift the
IA back to the 11-row sprawl. These run as plain source-text checks
against `server/static/js/admin.js` — no browser, no Playwright; CI
catches regressions in seconds.

Owner ack on the IA:
  · 8 main slugs in this exact order: live / display / effects /
    assets / viewer / polls / moderation / system
  · security stays standalone (NOT inside System accordion)
  · old hashes (#/dashboard #/messages #/widgets #/appearance
    #/automation #/history) must NOT 404 — they redirect to a sensible
    new home

If a test here fails, the sidebar HTML, the HASH_REDIRECTS table, or
ADMIN_ROUTES probably drifted. Verify against
docs/designs/design-v2/IA-REORG-DRAFT-2026-05-06.md before "fixing" the
test.
"""

# pyright: reportMissingImports=false

import re
from pathlib import Path

import pytest

ADMIN_JS = Path(__file__).resolve().parent.parent / "static" / "js" / "admin.js"


@pytest.fixture(scope="module")
def admin_js() -> str:
    return ADMIN_JS.read_text(encoding="utf-8")


# ─── Sidebar order ────────────────────────────────────────────────────────────

EXPECTED_NAV_ORDER = [
    "live",
    "display",
    "effects",
    "assets",
    "viewer",
    "polls",
    "moderation",
    "system",
    "security",  # standalone — last row, after divider
]


def test_sidebar_renders_nine_nav_rows_in_locked_order(admin_js: str):
    """Sidebar HTML must declare data-route in this exact order."""
    pattern = re.compile(r'<button[^>]*\bdata-route="([\w-]+)"[^>]*role="tab"', re.DOTALL)
    found = pattern.findall(admin_js)
    # Multiple data-route="…" occurrences exist throughout admin.js
    # (other UI bits also use them); restrict to the first run that
    # hits all 9 expected slugs in order. The first 9 nav buttons are
    # the sidebar.
    actual_first_nine = found[:9]
    assert actual_first_nine == EXPECTED_NAV_ORDER, (
        f"sidebar nav order drifted from IA-REORG-DRAFT.\n"
        f"expected: {EXPECTED_NAV_ORDER}\n"
        f"actual:   {actual_first_nine}"
    )


def test_security_row_has_standalone_marker(admin_js: str):
    """security must carry data-nav-standalone='true' so CSS divider
    layout makes the visual separation obvious — locked decision per
    polestar 2026-05-04: security is NOT inside System accordion."""
    pattern = re.compile(
        r'<button[^>]*\bdata-route="security"[^>]*\bdata-nav-standalone="true"',
        re.DOTALL,
    )
    assert pattern.search(admin_js), (
        "security button must have data-nav-standalone='true'; "
        "if you removed it, you also broke the standalone polestar lock."
    )


def test_security_row_preceded_by_divider(admin_js: str):
    """The CSS divider element must sit between the System row and the
    Security row so security visually reads as standalone."""
    pattern = re.compile(
        r'data-route="system"[\s\S]*?<div class="admin-dash-nav-divider"[\s\S]*?data-route="security"',
        re.DOTALL,
    )
    assert pattern.search(admin_js), (
        "expected <div class='admin-dash-nav-divider'> between system and security"
    )


def test_legacy_top_level_buttons_removed(admin_js: str):
    """Old top-level rows must no longer be visible nav buttons.
    They live in HASH_REDIRECTS instead."""
    sidebar_block = re.search(
        r"data-route=\"live\".*?data-route=\"security\"",
        admin_js,
        re.DOTALL,
    )
    assert sidebar_block, "could not find sidebar block to scope removal check"
    block = sidebar_block.group(0)
    for retired in ("widgets", "appearance", "automation", "history", "dashboard", "messages"):
        # Buttons would be `<button … data-route="<slug>" … role="tab">`.
        # Allow the slug to appear elsewhere (e.g., comments) but not as a
        # role=tab nav button inside the sidebar block.
        retired_btn = re.compile(
            rf'<button[^>]*\bdata-route="{retired}"[^>]*role="tab"', re.DOTALL
        )
        assert not retired_btn.search(block), (
            f"retired slug '{retired}' still has a sidebar button — should be in HASH_REDIRECTS"
        )


# ─── HASH_REDIRECTS table ────────────────────────────────────────────────────

EXPECTED_REDIRECTS = {
    "dashboard": "live",
    "messages": "live",
    "widgets": "display",
    "appearance": "viewer",
    "automation": "system",
    "history": "system",
}


def test_hash_redirects_table_complete(admin_js: str):
    """All 6 retired top-level slugs must redirect to a sensible new
    home so old bookmarks + cross-page links don't 404."""
    table_match = re.search(
        r"const HASH_REDIRECTS\s*=\s*\{([^}]+)\}",
        admin_js,
        re.DOTALL,
    )
    assert table_match, "HASH_REDIRECTS table not found in admin.js"
    body = table_match.group(1)

    for legacy, target in EXPECTED_REDIRECTS.items():
        assert re.search(rf'\b{legacy}:\s*"{target}"', body), (
            f"HASH_REDIRECTS missing or wrong: {legacy} → {target}"
        )


# ─── ADMIN_ROUTES table ──────────────────────────────────────────────────────


def test_admin_routes_has_new_canonical_slugs(admin_js: str):
    """live/display/viewer must exist in ADMIN_ROUTES with non-empty
    section lists pointing at EXISTING sec-* IDs (so each slug has
    something to render in Phase A — DOM moves are deferred to B/D)."""
    for slug, expected_section in [
        ("live", "sec-live-feed"),
        ("display", "sec-widgets"),
        ("viewer", "sec-viewer-config-tabs"),
    ]:
        pattern = re.compile(
            rf'\b{slug}:\s*\{{[^}}]*sections:\s*\[[^\]]*"{expected_section}"',
            re.DOTALL,
        )
        assert pattern.search(admin_js), (
            f"ADMIN_ROUTES.{slug} missing or doesn't reference {expected_section}"
        )


def test_admin_routes_keeps_legacy_aliases_alive(admin_js: str):
    """Legacy keys must still be present in ADMIN_ROUTES so that
    `|| 'dashboard'` fallbacks scattered across admin-*.js (sessions,
    audit, search, history, replay, audience, security, backup,
    notifications, display, history-v2, poll-deepdive, onboarding)
    keep resolving to a valid route. Phase B/D collapses these."""
    for legacy_slug in ("dashboard", "messages", "widgets", "appearance", "automation", "history"):
        # Each must appear as a top-level key with a config object.
        pattern = re.compile(rf"\n\s*{legacy_slug}:\s*\{{")
        assert pattern.search(admin_js), (
            f"legacy alias '{legacy_slug}' missing from ADMIN_ROUTES — "
            f"removing it would break || 'dashboard' fallbacks downstream"
        )


# ─── i18n labels (cross-locale parity) ───────────────────────────────────────


@pytest.mark.parametrize(
    "locale",
    ["zh", "en", "ja", "ko"],
)
def test_nav_i18n_keys_present_in_all_locales(locale: str):
    """Every nav button uses a data-i18n key; all 4 locales must
    define every key so language switching doesn't leave blanks."""
    locale_path = (
        Path(__file__).resolve().parent.parent
        / "static"
        / "locales"
        / locale
        / "translation.json"
    )
    body = locale_path.read_text(encoding="utf-8")

    for slug in EXPECTED_NAV_ORDER:
        # adminNavLive, adminNavDisplay, …, adminNavSecurity
        key = f'"adminNav{slug.title()}"'
        assert key in body, f"{locale}/translation.json missing {key}"
