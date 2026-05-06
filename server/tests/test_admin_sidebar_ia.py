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


# ─── _bareLegacyRedirects table ──────────────────────────────────────────────
#
# Only the 3 retired slugs whose new home actually owns the original sec-* IDs
# may be redirected in Phase A. The other 3 (`history / automation / appearance`)
# live as-is until Phase B/D moves their DOM. Cf. P1 review of d405943:
# redirecting `history → system` broke `#/audit` because System accordion has
# no `audit` slug — same trap for sessions/search/audience and
# scheduler/webhooks/plugins.

PHASE_A_SAFE_REDIRECTS = {
    "dashboard": "live",   # both render KPI strip via data-route-view alias
    "messages": "live",    # both own sec-live-feed
    "widgets": "display",  # both own sec-widgets
}

PHASE_A_NOT_REDIRECTED = ("history", "automation", "appearance")


def test_bare_legacy_redirects_only_safe_three(admin_js: str):
    """Only retired slugs whose new home owns the original sections may
    redirect in Phase A. history/automation/appearance must NOT appear
    here — their content still lives on the legacy route until Phase B/D."""
    table_match = re.search(
        r"const _bareLegacyRedirects\s*=\s*Object\.create\(null\);\s*"
        r"Object\.assign\(_bareLegacyRedirects,\s*\{([^}]+)\}",
        admin_js,
        re.DOTALL,
    )
    assert table_match, "_bareLegacyRedirects table not found in admin.js"
    body = table_match.group(1)

    for legacy, target in PHASE_A_SAFE_REDIRECTS.items():
        assert re.search(rf'\b{legacy}:\s*"{target}"', body), (
            f"_bareLegacyRedirects missing or wrong: {legacy} → {target}"
        )

    for unsafe in PHASE_A_NOT_REDIRECTED:
        # Match only as a key (start of line + colon), not in commentary.
        # Tightened to `^<ws><slug>:` to avoid false positives.
        for line in body.splitlines():
            stripped = line.strip()
            if stripped.startswith(f"{unsafe}:"):
                pytest.fail(
                    f"'{unsafe}' must NOT be in _bareLegacyRedirects in Phase A — "
                    f"its sections aren't yet owned by the redirect target. "
                    f"Re-add only after Phase B/D moves the DOM."
                )


def test_bare_redirects_consulted_before_alias_resolution(admin_js: str):
    """`_parseHashRoute` must apply `_bareLegacyRedirects` BEFORE resolving
    `_routeAliases` — otherwise a deep-linked alias like `#/audit`
    (which resolves to `nav: "history"`) gets double-translated. The
    fix lives inside `_parseHashRoute`; this test pins it."""
    parser_block = re.search(
        r"function _parseHashRoute\(hash\)\s*\{[\s\S]*?return\s*\{",
        admin_js,
    )
    assert parser_block, "could not find _parseHashRoute body"
    body = parser_block.group(0)
    bare_idx = body.find("_bareLegacyRedirects")
    alias_idx = body.find("_routeAliases")
    assert bare_idx > -1, "_parseHashRoute must consult _bareLegacyRedirects"
    assert alias_idx > -1, "_parseHashRoute must consult _routeAliases"
    assert bare_idx < alias_idx, (
        "bare-legacy redirect must run BEFORE alias resolution; otherwise "
        "deep-link aliases like #/audit get double-translated."
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


# ─── Deep-link aliases must keep resolving correctly ────────────────────────
#
# Reviewer's specific list (P1 callout on d405943): these deep-link
# bookmarks all alias-resolve through `_routeAliases` in admin.js to a
# tab inside a parent nav. The Phase A redirect MUST NOT clobber them.
# This test parses the JS source to confirm each entry is still in the
# alias map and that none of the parent navs are in the bare-redirect
# table (i.e., they wouldn't get re-mapped to system/viewer).

DEEP_LINK_ALIASES = {
    # legacy slug → expected (parent_nav, tab_in_nav)
    "audit":         ("history",     "audit"),
    "sessions":      ("history",     "sessions"),
    "search":        ("history",     "search"),
    "audience":      ("history",     "audience"),
    "scheduler":     ("automation",  "scheduler"),
    "webhooks":      ("automation",  "webhooks"),
    "plugins":       ("automation",  "plugins"),
    "themes":        ("appearance",  "themes"),
    "fonts":         ("appearance",  "fonts"),
    "viewer-config": ("appearance",  "viewer-config"),
}


@pytest.mark.parametrize("slug, parent_tab", list(DEEP_LINK_ALIASES.items()))
def test_deep_link_alias_resolves_to_parent_tab(admin_js: str, slug: str, parent_tab: tuple):
    """Each deep-link alias must map to {nav: <parent>, tab: <slug>}
    in `_routeAliases`. Phase A's bare-legacy redirect MUST NOT touch
    these — they live in the alias map, which runs after the bare
    redirect, so the parent nav (e.g., "history") flows through
    unchanged once we've ensured `history` isn't in the bare table."""
    parent, tab = parent_tab
    # Object keys may be bare (`scheduler:`) or quoted (`"viewer-config":`)
    # in JS — the parser accepts both. Match either form.
    key_pattern = rf'(?:"{re.escape(slug)}"|\b{re.escape(slug)}\b)'
    pattern = re.compile(
        rf'{key_pattern}\s*:\s*\{{\s*nav:\s*"{parent}",\s*tab:\s*"{tab}"',
        re.DOTALL,
    )
    assert pattern.search(admin_js), (
        f"_routeAliases.{slug} must map to nav={parent} tab={tab}; "
        f"breaking this would orphan deep-link bookmarks."
    )


def test_deep_link_parent_navs_not_bare_redirected(admin_js: str):
    """Parents of the deep-link aliases (`history`, `automation`,
    `appearance`) must NOT appear in `_bareLegacyRedirects`, otherwise
    the deep-link's resolved nav gets a second translation pass."""
    table_match = re.search(
        r"const _bareLegacyRedirects\s*=\s*Object\.create\(null\);\s*"
        r"Object\.assign\(_bareLegacyRedirects,\s*\{([^}]+)\}",
        admin_js,
        re.DOTALL,
    )
    assert table_match, "_bareLegacyRedirects table not found"
    body = table_match.group(1)
    for parent in ("history", "automation", "appearance"):
        for line in body.splitlines():
            stripped = line.strip()
            if stripped.startswith(f"{parent}:"):
                pytest.fail(
                    f"'{parent}' is in _bareLegacyRedirects — that would "
                    f"break deep-link aliases under it (e.g., #/audit, "
                    f"#/scheduler, #/themes). Phase A keeps these as-is."
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
