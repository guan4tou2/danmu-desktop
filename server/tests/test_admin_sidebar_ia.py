"""Sidebar IA contract tests (2026-07-28 v6 IA: frequency + object axis).

Locks the admin sidebar order and structure. v6 regrouped the same 19
items from five abstract sections (總覽/互動/審核/設定/整合) into four
sections chosen on a frequency + object axis — "when would you come to
this section" rather than "what category is this feature". The v5 設定
had become a grab bag (effects/plugins/fonts/system/audit share nothing
but being settings-ish) and 整合 held backup, which is upkeep rather
than integration.

  · 場中操作: live / messages / polls / moderation
      what you touch while a session is running
  · 場前佈置: viewer / widgets / effects / themes / assets / fonts
      the one sit-down before a session — surfaces first, then the
      uploadable libraries
  · 系統維運: system / ratelimit / audit / history / backup
      non-realtime upkeep — config → guards → logs/exports → backup
  · 開發擴充: extensions / plugins / webhooks / api-tokens
      extensibility surfaces; the two plug-in mechanisms sit adjacent
      (Extensions = browser-side, 伺服器插件 = server-side)

No route slugs changed in v6 — grouping and group labels only. The
2026-05-19 v5 sweep (commit 12e4c90) had removed the `◐ 顯示設定` item;
its overlay/viewer defaults content lives in the viewer route's 4-tab
layout (page/fields/defaults/limits).

Items that resolve via _routeAliases (themes/widgets/plugins/fonts/audit/
extensions/webhooks/api-tokens/backup/ratelimit) navigate correctly through
applyRoute's alias resolution; the alias-button is-active matcher keeps
the clicked button highlighted.

Old hashes (#/dashboard #/appearance #/automation #/display) still redirect.
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
    # 場中操作 — dashboard → content streams → moderation
    # (2026-07-28 v7 IA: `messages` retired — it was sec-live-feed under a
    # second name; #/messages bare-redirects to live)
    "live",
    "polls",
    "moderation",
    # 場前佈置 — surfaces first, then uploadable libraries
    # (2026-05-19 v5 IA: `display` retired — content merged into viewer's 4 tabs)
    # (2026-07-28 v7 IA: `fonts` folded into assets as its fifth tab)
    "viewer",
    "widgets",
    "effects",
    "themes",
    "assets",
    # 系統維運 — config → records → backup
    # (2026-07-28 v7 IA: `ratelimit` demoted back to its moderation tab;
    # `audit` folded into the history tabbed nav, retitled 紀錄 & 匯出)
    "system",
    "history",
    "backup",
    # 開發擴充 — browser-side and server-side plug-ins adjacent, then wire protocols
    "extensions",
    "plugins",
    "webhooks",
    "api-tokens",
]

# Group label i18n keys in sidebar order. v6 replaced the v5 keys
# (adminNavGroup{Overview,Interact,Moderation,Settings,Integrations}) —
# key names track the displayed meaning so they don't drift apart.
EXPECTED_GROUP_KEYS = [
    "adminNavGroupInSession",
    "adminNavGroupSetup",
    "adminNavGroupOperations",
    "adminNavGroupExtensibility",
]

def test_dev_group_is_collapsible_and_defaults_collapsed():
    """v7 IA (2026-07-28): the 開發擴充 group ships collapsed — its four
    rows are permanent noise for non-developer operators. Contract:
    a [data-nav-group="dev"] container carries data-collapsed in the
    template, wraps a toggle + the four dev rows, and admin.js persists
    the expanded state under admin:navgroup:dev."""
    admin_js = ADMIN_JS.read_text(encoding="utf-8")
    group = re.search(
        r'<div class="admin-dash-nav-group" data-nav-group="dev" data-collapsed>([\s\S]+?)</div>',
        admin_js,
    )
    assert group, "sidebar must wrap 開發擴充 in [data-nav-group='dev'][data-collapsed]"
    body = group.group(1)
    assert 'data-nav-group-toggle' in body, "dev group needs its toggle button"
    for slug in ("extensions", "plugins", "webhooks", "api-tokens"):
        assert f'data-route="{slug}"' in body, f"dev group must contain the {slug} row"
    assert "admin:navgroup:dev" in admin_js, (
        "expanded state must persist under localStorage key admin:navgroup:dev"
    )


RETIRED_GROUP_KEYS = [
    "adminNavGroupOverview",
    "adminNavGroupInteract",
    "adminNavGroupModeration",
    "adminNavGroupSettings",
    "adminNavGroupIntegrations",
]


def test_sidebar_renders_nav_rows_in_locked_order(admin_js: str):
    """Sidebar HTML must declare data-route in the v6 4-section order
    (2026-07-28 frequency + object axis regroup)."""
    pattern = re.compile(r'<button[^>]*\bdata-route="([\w-]+)"[^>]*role="tab"', re.DOTALL)
    found = pattern.findall(admin_js)
    actual = found[: len(EXPECTED_NAV_ORDER)]
    assert actual == EXPECTED_NAV_ORDER, (
        f"sidebar nav order drifted from the v5 grouped IA baseline.\n"
        f"expected: {EXPECTED_NAV_ORDER}\n"
        f"actual:   {actual}"
    )


def test_security_is_not_a_standalone_sidebar_row(admin_js: str):
    """Per the 2026-05-13 engineering update, `security` must NOT exist as
    a top-level sidebar nav row. Its UI lives under System accordion's
    `access` group as a leaf. Bookmarks like `#/security` still work via
    the `_routeAliases` mapping to `{ nav: "system", tab: "security" }`."""
    pattern = re.compile(
        r'<button[^>]*\bdata-route="security"[^>]*role="tab"',
        re.DOTALL,
    )
    assert not pattern.search(admin_js), (
        "security must not be a top-level sidebar row — it belongs in "
        "the System accordion `access` group per the 8-area IA."
    )


def test_truly_retired_slugs_have_no_sidebar_button(admin_js: str):
    """Slugs explicitly removed from the design (dashboard / appearance /
    automation / security) must NOT exist as sidebar buttons. Their hash
    routes still redirect via _bareLegacyRedirects / _routeAliases."""
    pattern = re.compile(r'<button[^>]*\bdata-route="([\w-]+)"[^>]*role="tab"', re.DOTALL)
    found = pattern.findall(admin_js)
    sidebar_slugs = set(found[: len(EXPECTED_NAV_ORDER)])
    for retired in (
        "dashboard", "appearance", "automation", "security",
        # v7 IA (2026-07-28)
        "messages", "ratelimit", "audit", "fonts",
    ):
        assert retired not in sidebar_slugs, (
            f"retired slug '{retired}' has a sidebar button — should live "
            f"in _bareLegacyRedirects / _routeAliases only"
        )


# ─── _bareLegacyRedirects table ──────────────────────────────────────────────
#
# 2026-05-18 (v5 grouped sidebar): widgets / messages / history are now
# first-class top-level routes via _routeAliases, no longer bare-redirected.
# Only dashboard / automation remain as fully retired bare redirects.

PHASE_A_STRING_REDIRECTS = {
    "dashboard": "live",  # both render KPI strip via data-route-view alias
    "messages": "live",   # v7 IA: same sec-live-feed, second name retired
}

PHASE_B_OBJECT_REDIRECTS = {
    "automation": ("system", "scheduler"),
    # v7 IA (2026-07-28): one-feature-one-door demotions land on the tab
    # that already owned the section.
    "ratelimit": ("moderation", "ratelimit"),
    "audit": ("history", "audit"),
    "fonts": ("assets", "fonts"),
}


def test_bare_legacy_string_redirects_present(admin_js: str):
    """String-form bare redirects must map retired slugs to the correct
    surviving home."""
    table_match = re.search(
        r"const _bareLegacyRedirects\s*=\s*Object\.create\(null\);\s*"
        r"Object\.assign\(_bareLegacyRedirects,\s*\{([\s\S]+?)\n\s*\}\);",
        admin_js,
    )
    assert table_match, "_bareLegacyRedirects table not found in admin.js"
    body = table_match.group(1)
    for legacy, target in PHASE_A_STRING_REDIRECTS.items():
        assert re.search(
            rf'\b{legacy}:\s*"{target}"', body
        ), f"_bareLegacyRedirects missing or wrong: {legacy} → {target}"


@pytest.mark.parametrize("slug, expected", list(PHASE_B_OBJECT_REDIRECTS.items()))
def test_bare_legacy_object_redirects_target_system_accordion(
    admin_js: str, slug: str, expected: tuple
):
    """Object-form bare redirects must point at `nav: "system"` plus the
    correct first-leaf tab."""
    expected_nav, expected_tab = expected
    pattern = re.compile(
        rf'\b{slug}:\s*\{{\s*nav:\s*"{expected_nav}",\s*tab:\s*"{expected_tab}"',
    )
    assert pattern.search(admin_js), (
        f"_bareLegacyRedirects.{slug} must be {{nav: '{expected_nav}', " f"tab: '{expected_tab}'}}"
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


def test_extensions_lands_on_first_class_integrations_route(admin_js: str):
    """The v5 grouped sidebar has an Integrations lane. The visible
    `extensions` row may keep its product label, but it must resolve to the
    first-class integrations page, not get folded back into System."""
    alias_match = re.search(
        r"const _routeAliases\s*=\s*Object\.create\(null\);\s*"
        r"Object\.assign\(_routeAliases,\s*\{([\s\S]+?)\n\s*\}\);",
        admin_js,
    )
    assert alias_match, "_routeAliases table not found"
    alias_body = alias_match.group(1)

    assert re.search(
        r'\bextensions:\s*\{\s*nav:\s*"integrations"', alias_body
    ), "sidebar Extensions must resolve to the first-class integrations route"
    assert not re.search(r'\bintegrations:\s*\{\s*nav:\s*"system"', alias_body), (
        "integrations is a promoted sidebar route and must not be aliased back "
        "to the System accordion"
    )
    assert re.search(
        r'\bintegrations:\s*\{\s*title:\s*"整合"', admin_js
    ), "ADMIN_ROUTES must keep a first-class integrations page title"


# ─── ADMIN_ROUTES table ──────────────────────────────────────────────────────


def test_admin_routes_has_new_canonical_slugs(admin_js: str):
    """live/viewer must exist in ADMIN_ROUTES with non-empty section
    lists pointing at EXISTING sec-* IDs (so each slug has something
    to render in Phase A — DOM moves are deferred to B/D).

    2026-05-19 v5 IA: `display` was removed from this list — its
    sidebar item retired and the route slug demoted to a bare-legacy
    redirect (#/display → #/viewer/defaults). Coverage is now in
    test_display_bare_legacy_redirect below."""
    for slug, expected_section in [
        ("live", "sec-live-feed"),
        ("viewer", "sec-viewer-config-tabs"),
    ]:
        pattern = re.compile(
            rf'\b{slug}:\s*\{{[^}}]*sections:\s*\[[^\]]*"{expected_section}"',
            re.DOTALL,
        )
        assert pattern.search(
            admin_js
        ), f"ADMIN_ROUTES.{slug} missing or doesn't reference {expected_section}"


def test_display_bare_legacy_redirect(admin_js: str):
    """v5 IA (2026-05-19): #/display deep-link must redirect to
    #/viewer/defaults via _bareLegacyRedirects (NOT _routeAliases —
    those only fire when ADMIN_ROUTES lookup misses, but ADMIN_ROUTES
    used to have a `display` entry that would shadow the alias. The
    bare-legacy path runs BEFORE the ADMIN_ROUTES check.)"""
    bare_redirect = re.compile(
        r"_bareLegacyRedirects.*?display:\s*\{\s*nav:\s*['\"]viewer['\"]"
        r"\s*,\s*tab:\s*['\"]defaults['\"]",
        re.DOTALL,
    )
    assert bare_redirect.search(admin_js), (
        "expected display: { nav: 'viewer', tab: 'defaults' } in "
        "_bareLegacyRedirects so #/display lands on viewer's defaults tab"
    )
    # Also assert the dead ADMIN_ROUTES.display entry got cleaned up
    # (otherwise the bare redirect is shadowed).
    legacy_routes_entry = re.compile(
        r"\n\s*display:\s*\{\s*title:",  # ADMIN_ROUTES style: title before sections
    )
    assert not legacy_routes_entry.search(admin_js), (
        "ADMIN_ROUTES.display must be removed — leaving it shadows "
        "the _bareLegacyRedirects entry and breaks the v5 IA intent"
    )


def test_admin_routes_keeps_legacy_aliases_alive(admin_js: str):
    """Legacy keys must still be present in ADMIN_ROUTES so that
    `|| 'dashboard'` fallbacks scattered across admin-*.js (sessions,
    audit, search, history, replay, audience, security, backup,
    notifications, display, history-v2, poll-deepdive, onboarding)
    keep resolving to a valid route. Phase B/D collapses these."""
    # v7 IA (2026-07-28): `messages` dropped from this list — its
    # ADMIN_ROUTES entry was removed with the bare redirect to live.
    for legacy_slug in ("dashboard", "widgets", "appearance", "automation", "history"):
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
    # 2026-05-18 v5: themes / fonts / audit / plugins promoted to first-class
    # sidebar slugs with their own ADMIN_ROUTES entries. Their alias entries
    # were removed so #/themes etc. resolve directly.
    # 2026-05-19 v5.2: sessions / search / audience / webhooks / security
    # promoted to first-class routes. Only replay / scheduler remain aliased.
    "replay": ("system", "replay"),
    "scheduler": ("system", "scheduler"),
}

# Routes promoted from system accordion aliases to first-class ADMIN_ROUTES
# entries. Verify they have their own route config (not aliased).
PROMOTED_TO_FIRST_CLASS = ["sessions", "search", "audience", "webhooks", "security"]


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


@pytest.mark.parametrize("slug", PROMOTED_TO_FIRST_CLASS)
def test_promoted_route_has_own_admin_routes_entry(admin_js: str, slug: str):
    """Routes promoted from system accordion must have their own
    ADMIN_ROUTES entry and must NOT appear in _routeAliases."""
    key_pattern = rf'(?:"{re.escape(slug)}"|\b{re.escape(slug)}\b)'
    # Must be in ADMIN_ROUTES (has title/kicker/sections)
    route_pattern = re.compile(
        rf"{key_pattern}\s*:\s*\{{\s*title:",
        re.DOTALL,
    )
    assert route_pattern.search(
        admin_js
    ), f"ADMIN_ROUTES must have a first-class entry for '{slug}'."
    # Must NOT be in _routeAliases (would intercept before ADMIN_ROUTES)
    alias_block = re.search(
        r"_routeAliases\s*\)\s*;?\s*\n\s*Object\.assign\(_routeAliases,\s*\{(.*?)\}\)",
        admin_js,
        re.DOTALL,
    )
    if alias_block:
        alias_content = alias_block.group(1)
        alias_pattern = re.compile(
            rf"^\s*{key_pattern}\s*:",
            re.MULTILINE,
        )
        assert not alias_pattern.search(alias_content), (
            f"'{slug}' must NOT be in _routeAliases — it has its own "
            f"ADMIN_ROUTES entry and the alias would intercept it."
        )


def test_viewer_config_alias_targets_viewer_parent(admin_js: str):
    """`viewer-config` is a parent-only alias — `{ nav: "viewer" }` with
    no tab key. The viewer route owns the canonical tabbed surface
    (page / fields / defaults / limits), so the legacy bookmark just
    lands on that route and tab state comes from
    `document.body.dataset.viewerConfigTab`."""
    pattern = re.compile(
        r'"viewer-config"\s*:\s*\{\s*nav:\s*"viewer"\s*\}',
        re.DOTALL,
    )
    assert pattern.search(admin_js), (
        '_routeAliases["viewer-config"] must equal { nav: "viewer" } '
        "(parent-only, no tab) so legacy bookmarks keep landing on the "
        "canonical Viewer tabbed surface."
    )


def test_appearance_parent_nav_not_bare_redirected(admin_js: str):
    """Phase D will move themes / fonts / viewer-config out of `appearance`
    into viewer + assets. Until then, `appearance` MUST NOT be in
    `_bareLegacyRedirects` — its child aliases would get double-translated.

    Phase B (2026-05-06): `history` and `automation` are intentionally
    in the bare table now, but they no longer share a slug-collision
    surface with their child aliases — every child (audit / sessions /
    scheduler etc.) has been re-targeted to `nav: "system"` directly
    rather than going through the absorbed parent. Hence safe."""
    table_match = re.search(
        r"const _bareLegacyRedirects\s*=\s*Object\.create\(null\);\s*"
        r"Object\.assign\(_bareLegacyRedirects,\s*\{([\s\S]+?)\n\s*\}\);",
        admin_js,
    )
    assert table_match, "_bareLegacyRedirects table not found"
    body = table_match.group(1)
    for line in body.splitlines():
        stripped = line.strip()
        if stripped.startswith("appearance:"):
            pytest.fail(
                "'appearance' is in _bareLegacyRedirects — that would "
                "break deep-link aliases under it (#/themes, #/fonts, "
                "#/viewer-config). Wait for Phase D to redirect."
            )


# ─── system accordion shape (Phase B 2026-05-06) ────────────────────────────
#
# The system route absorbs automation + history. Lock the accordion's
# slug list + group structure so a future edit doesn't quietly drop a
# slug or scramble the grouping that the IA-REORG-DRAFT calls for.

ACCORDION_GROUPS_EXPECTED = ["settings", "access", "automation", "history"]

# 2026-05-13 engineering update: security is the first leaf of the
# `access` group (which replaces the older `tokens` group). The
# remaining settings / automation / history slugs are unchanged.
ACCORDION_SLUGS_BY_GROUP = {
    "settings": ["system", "backup", "integrations", "wcag", "about"],
    "access": ["security", "firetoken", "api-tokens"],
    "automation": ["scheduler", "webhooks", "plugins"],
    "history": ["sessions", "search", "audit", "replay", "audience"],
}


@pytest.fixture(scope="module")
def accordion_js() -> str:
    path = Path(__file__).resolve().parent.parent / "static" / "js" / "admin-system-accordion.js"
    return path.read_text(encoding="utf-8")


def test_accordion_declares_four_groups(accordion_js: str):
    """The accordion's GROUPS array must declare exactly 4 groups in the
    canonical order: settings → tokens → automation → history."""
    groups_match = re.search(
        r"const GROUPS\s*=\s*\[([\s\S]+?)\];",
        accordion_js,
    )
    assert groups_match, "GROUPS array not found in admin-system-accordion.js"
    body = groups_match.group(1)
    found = re.findall(r'\{\s*key:\s*"([\w-]+)"', body)
    assert found == ACCORDION_GROUPS_EXPECTED, (
        f"accordion GROUPS order drifted.\n"
        f"expected: {ACCORDION_GROUPS_EXPECTED}\n"
        f"actual:   {found}"
    )


@pytest.mark.parametrize("group, expected_slugs", list(ACCORDION_SLUGS_BY_GROUP.items()))
def test_accordion_section_slugs_per_group(accordion_js: str, group: str, expected_slugs: list):
    """Each group's slugs must appear in the SECTIONS array tagged with
    the right `group` field. Phase B added automation + history; settings
    + tokens are unchanged from Phase A."""
    sections_match = re.search(
        r"const SECTIONS\s*=\s*\[([\s\S]+?)\n\s*\];",
        accordion_js,
    )
    assert sections_match, "SECTIONS array not found"
    body = sections_match.group(1)
    # Find slugs tagged with the requested group.
    pattern = re.compile(
        rf'slug:\s*"([\w-]+)"[^}}]*?group:\s*"{group}"',
    )
    found = pattern.findall(body)
    assert found == expected_slugs, (
        f"accordion SECTIONS for group={group!r} drifted.\n"
        f"expected: {expected_slugs}\n"
        f"actual:   {found}"
    )


def test_accordion_replay_uses_multi_section_bundle(accordion_js: str):
    """The history/replay leaf renders the history tab bundle together
    (sec-history-tabs + history-v2-section + sec-history-list + sec-history).
    The accordion config must keep the `sectionIds` array form for replay so all
    show together when the leaf is open."""
    pattern = re.compile(
        r'slug:\s*"replay"[^}]*sectionIds:\s*\[\s*'
        r'"sec-history-tabs"\s*,\s*'
        r'"history-v2-section"\s*,\s*'
        r'"sec-history-list"\s*,\s*'
        r'"sec-history"\s*\]',
        re.DOTALL,
    )
    assert pattern.search(accordion_js), (
        "history/replay must keep sectionIds: ['sec-history-tabs', "
        "'history-v2-section', 'sec-history-list', 'sec-history']; "
        "otherwise the replay view loses its tab strip + body when opened."
    )


# ─── Section IDs must actually be creatable (added 2026-07-28) ──────────────
#
# Both ADMIN_ROUTES[route].sections and the accordion's sectionId/sectionIds
# name DOM element IDs. Nothing checked that those elements are ever created,
# so a page migrated to a v2 shell could leave its old `sec-*` ID behind in
# the route table and no test would notice. That drift is not cosmetic:
# `syncRouteContainerVisibility()` derives which `.admin-route-sections`
# container to show from these IDs, so an empty or phantom-only list hides
# the container the page actually lives in — which is exactly how #/security
# rendered blank (sections: [] while admin-security-v2-page sat inside
# settings-grid).


def _creatable_element_ids() -> set:
    """IDs any admin module can actually put in the DOM.

    The admin modules mount markup four different ways, so all four count
    as creation — an earlier draft of this helper only knew the first two
    and produced false positives against perfectly live pages:

      · a literal attribute        id="some-id"
      · a DOM property assignment  el.id = "some-id"
      · a constant interpolated    id="${PAGE_ID}"
      · a constant concatenated    '<div id="' + PAGE_ID + '"'
        (and el.id = SECTION_ID)
      · the settingCard() factory, which computes
        id="sec-${id.toLowerCase()}" from its first argument — the only
        runtime-derived ID in the admin bundle, so it is resolved here
        rather than left to produce a false positive.

    Constant-based forms are matched by pairing each string constant with
    any `id` token that mentions it within the same expression.
    """
    static_js = Path(__file__).resolve().parent.parent / "static" / "js"
    templates = Path(__file__).resolve().parent.parent / "templates"
    found = set()
    for path in list(static_js.glob("*.js")) + list(templates.glob("*.html")):
        text = path.read_text(encoding="utf-8")
        found |= set(re.findall(r"""id=["']([\w-]+)["']""", text))
        found |= set(re.findall(r"""\.id\s*=\s*["']([\w-]+)["']""", text))
        for name, value in re.findall(
            r"""(?:const|var|let)\s+(\w+)\s*=\s*["']([\w-]+)["']""", text
        ):
            if re.search(r"\bid\b[^;\n]{0,20}\b" + re.escape(name) + r"\b", text):
                found.add(value)
        for card_id in re.findall(r"""settingCard\(\s*["'](\w+)["']""", text):
            found.add("sec-" + card_id.lower())
    return found


def _admin_routes_sections(admin_js: str) -> dict:
    """Parse ADMIN_ROUTES into {slug: [section ids]}."""
    block = re.search(r"const ADMIN_ROUTES\s*=\s*\{(.+?)\n  \};", admin_js, re.DOTALL)
    assert block, "ADMIN_ROUTES table not found in admin.js"
    entries = re.findall(
        r'(?m)^\s*"?([\w-]+)"?:\s*\{[^\n]*?sections:\s*\[([^\]]*)\]', block.group(1)
    )
    assert entries, "no ADMIN_ROUTES entries parsed — did the table format change?"
    return {slug: re.findall(r'"([\w-]+)"', secs) for slug, secs in entries}


def test_admin_routes_sections_reference_creatable_ids(admin_js: str):
    """Every ID in ADMIN_ROUTES.sections must be an element some module creates."""
    creatable = _creatable_element_ids()
    phantom = {
        slug: [sid for sid in ids if sid not in creatable]
        for slug, ids in _admin_routes_sections(admin_js).items()
    }
    phantom = {slug: ids for slug, ids in phantom.items() if ids}
    assert not phantom, (
        f"ADMIN_ROUTES lists section IDs that no module ever creates: {phantom}.\n"
        f"A phantom ID makes the route table lie about what it renders, and "
        f"leaves the route-level visibility pass steering on a non-existent "
        f"element. Point the entry at the ID the page actually mounts."
    )


def test_accordion_section_ids_are_creatable(accordion_js: str):
    """Same contract for the System accordion's leaf → section mapping.

    A phantom ID here means the accordion silently stops managing that
    leaf's visibility — it happens to work only while the page also
    self-hides from `dataset.activeLeaf`, which is luck, not design.
    """
    creatable = _creatable_element_ids()
    sections = re.search(r"const SECTIONS\s*=\s*\[([\s\S]+?)\n\s*\];", accordion_js)
    assert sections, "SECTIONS array not found"
    body = sections.group(1)
    referenced = set(re.findall(r'sectionId:\s*"([\w-]+)"', body))
    for group in re.findall(r"sectionIds:\s*\[([^\]]+)\]", body):
        referenced |= set(re.findall(r'"([\w-]+)"', group))
    phantom = sorted(sid for sid in referenced if sid not in creatable)
    assert not phantom, f"accordion SECTIONS reference IDs that no module creates: {phantom}."


def test_routes_owning_a_v2_page_do_not_declare_empty_sections(admin_js: str):
    """A route whose page mounts inside a `.admin-route-sections` container
    must name that page in `sections`.

    With `sections: []`, `syncRouteContainerVisibility()` computes an empty
    owner set and hides every container — including the one holding the
    page — so the route renders blank however hard the module tries to
    show itself. This pinned #/security after it regressed that way.
    """
    sections_by_slug = _admin_routes_sections(admin_js)
    for slug in ("security", "backup"):
        assert sections_by_slug.get(slug), (
            f"ADMIN_ROUTES.{slug}.sections is empty — the route's v2 page "
            f"lives inside settings-grid, which the container-visibility "
            f"pass will hide when no section maps to it."
        )


def test_admin_routes_system_owns_absorbed_sections(admin_js: str):
    """ADMIN_ROUTES.system must list every section the accordion can open.
    Without this, the route-level visibility pass would hide the absorbed
    sections regardless of which accordion leaf is active."""
    system_match = re.search(
        r"\bsystem:\s*\{\s*title:[^}]*?sections:\s*\[([^\]]+)\]",
        admin_js,
    )
    assert system_match, "ADMIN_ROUTES.system entry not found"
    sections = system_match.group(1)
    must_contain = [
        # Phase B additions
        "sec-scheduler",
        "sec-webhooks",
        "sec-plugins",
        "sec-sessions-overview",
        "sec-search-overview",
        "sec-audit-overview",
        "sec-history-tabs",
        "history-v2-section",
        "sec-history-list",
        "sec-history",
        "sec-audience-overview",
    ]
    for sec in must_contain:
        assert f'"{sec}"' in sections, (
            f"ADMIN_ROUTES.system missing absorbed section {sec!r}; "
            f"the route-level visibility pass would hide it on #/system."
        )


# ─── admin-display.js viewer-config visibility gate ─────────────────────────
#
# Reviewer P1 on b7cbc55: the visibility gate `route === "viewer-config"`
# never fired because `_routeAliases["viewer-config"]` resolves to
# `nav: "appearance"`, so dataset.activeRoute is "appearance" with
# activeLeaf="viewer-config". Phase A's new top-level `viewer` route also
# needs to render these panels but has activeLeaf="viewer". The fix is to
# accept either: route in {viewer-config, viewer} OR leaf === viewer-config.


@pytest.fixture(scope="module")
def admin_display_js() -> str:
    path = Path(__file__).resolve().parent.parent / "static" / "js" / "admin-display.js"
    return path.read_text(encoding="utf-8")


def test_viewer_owner_gate_accepts_all_four_owners(admin_display_js: str):
    """The admin-display syncVisibility() gate must consider every valid
    owner signal — `route === "viewer-config"` (legacy bookmark) or
    `route === "viewer"` (canonical), plus the matching leaf paths —
    and use the resulting flag to decide which tab panel renders.

    2026-05-13 engineering update: the editable per-parameter table
    (color / opacity / font-size / speed / layout) is now the
    Viewer › Defaults tab; the helper was renamed from
    `_isViewerConfigOwner` → `_isViewerOwner` to reflect that the
    surface now belongs to the Viewer route, not a legacy viewer-config
    sub-page."""
    owner_block = re.search(
        r"function _isViewerOwner\(route, leaf\)\s*\{[\s\S]*?\n\s*\}",
        admin_display_js,
    )
    assert owner_block, "_isViewerOwner helper not found"
    owner_body = owner_block.group(0)
    assert 'route === "viewer-config"' in owner_body, "must accept legacy viewer-config route"
    assert 'route === "viewer"' in owner_body, "must accept canonical viewer route"
    assert 'leaf === "viewer-config"' in owner_body, "must accept appearance/viewer-config leaf"
    assert 'leaf === "viewer"' in owner_body, "must accept system or alias viewer leaf"

    sync_block = re.search(
        r"function syncVisibility\(\)\s*\{[\s\S]*?_lastVisibleRoute\s*=\s*route;",
        admin_display_js,
    )
    assert sync_block, "syncVisibility body not found"
    body = sync_block.group(0)
    assert (
        "const isViewerOwner = _isViewerOwner(route, leaf)" in body
    ), "syncVisibility must use the shared owner helper"
    assert 'page.style.display = (isViewerOwner && tab === "defaults") ? "" : "none"' in body, (
        "admin-display-v2-page now hosts the Viewer › Defaults tab; it "
        "must become visible only when the viewer owner gate is true "
        "AND the defaults tab is active."
    )


def test_viewer_owner_tab_bar_uses_route_owner_not_raw_hash(admin_display_js: str):
    """The viewer tab chrome must follow the same route/leaf owner
    decision as syncVisibility(). A raw hash check like
    `hash === "viewer-config"` misses #/viewer and
    #/appearance/viewer-config."""
    sync_bar = re.search(
        r"function _syncBar\(\)\s*\{[\s\S]*?syncVisibility\(\);[\s\S]*?\}",
        admin_display_js,
    )
    assert sync_bar, "_syncBar body not found"
    body = sync_bar.group(0)
    assert (
        "_isViewerOwner(route, leaf)" in body
    ), "_syncBar must use the shared route/leaf owner check"
    assert (
        'hash === "viewer-config"' not in body
    ), "_syncBar must not rely on raw hash-only visibility"


# ─── Command palette must not jump to a route that doesn't own the section ──
#
# Reviewer P2 on b7cbc55: the palette had Webhooks / Scheduler / Fingerprints
# pointing at `#/system`, but System doesn't own those `sec-*` IDs after
# Phase A — webhooks/scheduler live under automation tabs, fingerprints
# under moderation tabs. The fix is to use the deep-link alias slugs
# (`#/webhooks`, `#/scheduler`, `#/fingerprints`) which alias-resolve to
# the correct {nav, tab} pair so AdminTabs.applyTabSectionVisibility shows
# the right section.

# Each entry: section ID → MUST NOT use this route slug (because it doesn't
# own the section), MUST use this route slug (because alias resolves correctly).
PALETTE_CONTRACT = [
    # (label, must_route_to, must_NOT_route_to)
    ("Webhooks", "webhooks", "system"),
    ("Scheduler", "scheduler", "system"),
    ("Fingerprints", "fingerprints", "system"),
]


@pytest.fixture(scope="module")
def palette_js() -> str:
    path = Path(__file__).resolve().parent.parent / "static" / "js" / "admin-command-palette.js"
    return path.read_text(encoding="utf-8")


def test_palette_has_no_debug_console_logging(palette_js: str):
    assert "console.log" not in palette_js


@pytest.mark.parametrize("label, must_route, must_not_route", PALETTE_CONTRACT)
def test_palette_routes_to_owning_route(
    palette_js: str, label: str, must_route: str, must_not_route: str
):
    """Each palette entry must point to a route that actually renders the
    section it scrolls to. Pre-Phase-A these jumped to `#/system`; the
    section IDs were system-owned then, but Phase A moved ownership and
    the palette must follow."""
    # Find the palette entry line for this label
    pattern = re.compile(
        rf'\{{\s*label:\s*"{re.escape(label)}",\s*route:\s*"([^"]+)"',
    )
    m = pattern.search(palette_js)
    assert m, f"palette entry for label={label!r} not found"
    actual_route = m.group(1)
    assert actual_route == must_route, (
        f"{label} palette entry routes to '{actual_route}'; expected '{must_route}'. "
        f"Routing to '{must_not_route}' would leave the section hidden because "
        f"that route doesn't own the sec-* ID."
    )


# ─── i18n labels (cross-locale parity) ───────────────────────────────────────


def _slug_to_i18n_key(slug: str) -> str:
    """Convert a route slug to its `adminNav<PascalCase>` i18n key. Handles
    hyphenated slugs like `api-tokens` → `adminNavApiTokens`."""
    parts = slug.split("-")
    return "adminNav" + "".join(p[:1].upper() + p[1:] for p in parts)


@pytest.mark.parametrize(
    "locale",
    ["zh", "en", "ja", "ko"],
)
def test_nav_i18n_keys_present_in_all_locales(locale: str):
    """Every nav button uses a data-i18n key; all 4 locales must
    define every key so language switching doesn't leave blanks."""
    locale_path = (
        Path(__file__).resolve().parent.parent / "static" / "locales" / locale / "translation.json"
    )
    body = locale_path.read_text(encoding="utf-8")

    for slug in EXPECTED_NAV_ORDER:
        key = f'"{_slug_to_i18n_key(slug)}"'
        assert key in body, f"{locale}/translation.json missing {key}"


# ─── Group labels (added 2026-07-28) ─────────────────────────────────────────
#
# The v5 suite locked per-item order and per-item i18n keys but left the
# section headers uncovered — a half-finished regroup (markup renamed,
# locales not) would have shipped green. These three tests close that gap.


def test_sidebar_declares_group_labels_in_order(admin_js: str):
    """The four group headers must appear in v6 order. Three are plain
    `.admin-dash-nav-label` divs; 開發擴充 is a collapsible-group toggle
    (v7 IA 2026-07-28) whose label span carries the data-i18n key."""
    pattern = re.compile(
        r'<(?:div class="admin-dash-nav-label"|span) data-i18n="(adminNavGroup[\w]+)"'
    )
    found = pattern.findall(admin_js)
    assert found == EXPECTED_GROUP_KEYS, (
        f"sidebar group labels drifted from the v6 IA baseline.\n"
        f"expected: {EXPECTED_GROUP_KEYS}\n"
        f"actual:   {found}"
    )


@pytest.mark.parametrize("locale", ["zh", "en", "ja", "ko"])
def test_group_i18n_keys_present_in_all_locales(locale: str):
    """All 4 locales must define every group key, and must no longer carry
    the retired v5 keys (stale entries mean a half-done rename)."""
    locale_path = (
        Path(__file__).resolve().parent.parent / "static" / "locales" / locale / "translation.json"
    )
    body = locale_path.read_text(encoding="utf-8")

    for key in EXPECTED_GROUP_KEYS:
        assert f'"{key}"' in body, f"{locale}/translation.json missing {key!r}"
    for retired in RETIRED_GROUP_KEYS:
        assert f'"{retired}"' not in body, (
            f"{locale}/translation.json still defines retired group key "
            f"{retired!r} — remove it so the v5 IA doesn't linger."
        )


def test_generated_i18n_bundle_matches_locale_sources():
    """`static/js/i18n.js` is generated by `npm run build:i18n`. If it still
    carries the retired group keys, someone edited the locale JSON without
    regenerating the bundle — the admin UI loads the bundle, not the JSON,
    so the sidebar would render stale labels."""
    bundle = (Path(__file__).resolve().parent.parent / "static" / "js" / "i18n.js").read_text(
        encoding="utf-8"
    )

    for key in EXPECTED_GROUP_KEYS:
        assert (
            f'"{key}"' in bundle
        ), f"i18n.js missing {key!r} — run `npm run build:i18n` in server/."
    for retired in RETIRED_GROUP_KEYS:
        assert f'"{retired}"' not in bundle, (
            f"i18n.js still carries retired key {retired!r} — run "
            f"`npm run build:i18n` in server/ to regenerate from the locale JSON."
        )
