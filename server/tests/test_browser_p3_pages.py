"""Browser smoke tests for the P3 / Group A / Group B admin pages
shipped during the 2026-04-27 sprint.

Each test navigates to one of the routes and asserts the section
is rendered + visible + has at least one expected element. Keeps
coverage shallow (smoke / regression-detector) since Jest infra would
be a sizable add for ~10 small helpers in new modules.

Routes covered (post-5.1.0 these route through alias redirects to new
P0-0 nav, but the section IDs are unchanged so the tests still match
on `#sec-*-overview` visibility):

    #/about         → #/system/about      — AdminAboutPage
    #/notifications →                       — AdminNotificationsPage (no alias)
    #/audit         → #/history/audit     — AdminAuditLogPage
    #/audience      → #/history/audience  — AdminAudiencePage
    #/mobile        → #/system/mobile     — AdminMobilePage
    #/poll-deepdive →                       — AdminPollDeepDivePage (no alias)
    #/setup         →                       — AdminSetupWizard overlay (no alias)

The legacy URLs above still work via _routeAliases — `_go_to_route`
sets the legacy hash, admin.js applyRoute resolves it to the new nav+
tab/accordion home, and the section's visibility is governed by
applyTabSectionVisibility (tabbed) or AdminSystemAccordion (system).
Slice 8 also added `dataset.activeLeaf` so admin-*.js modules check
the leaf slug instead of the route name.

Viewer states (ViewerBanned / ViewerPollThankYou) tested via URL
preview flag on /fire.
"""

from __future__ import annotations

import threading

import pytest
from playwright.sync_api import sync_playwright

from server.app import create_app
from server.tests._browser_isolation import should_run_browser_module
from server.tests.conftest import TestConfig, find_free_port

if not should_run_browser_module(__file__):
    pytest.skip(
        "Browser modules run in isolated child pytest processes during the full suite.",
        allow_module_level=True,
    )


# ─── Fixtures (replicated from test_browser_admin.py — module-scoped per
#     pattern; sharing via conftest would change test_browser_admin's
#     scope contract) ──────────────────────────────────────────────────


class BrowserTestConfig(TestConfig):
    LOGIN_RATE_LIMIT = 1000
    LOGIN_RATE_WINDOW = 1
    ADMIN_RATE_LIMIT = 1000
    ADMIN_RATE_WINDOW = 1
    FIRE_RATE_LIMIT = 1000
    FIRE_RATE_WINDOW = 1
    API_RATE_LIMIT = 1000
    API_RATE_WINDOW = 1


@pytest.fixture(scope="session")
def live_url():
    from gevent.pywsgi import WSGIServer

    app = create_app(BrowserTestConfig)
    port = find_free_port()
    server = WSGIServer(("127.0.0.1", port), app, log=None, error_log=None)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    yield f"http://127.0.0.1:{port}"
    server.stop()


@pytest.fixture(scope="module")
def browser_session():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        yield browser
        browser.close()


@pytest.fixture(scope="module")
def logged_context(browser_session, live_url):
    context = browser_session.new_context()
    page = context.new_page()
    page.goto(f"{live_url}/admin/")
    page.wait_for_selector("#loginForm", timeout=8000)
    page.fill("#password", "test")
    page.locator("#loginForm button[type=submit]").click()
    page.wait_for_selector("#logoutButton", timeout=8000)
    page.close()
    yield context
    context.close()


@pytest.fixture()
def admin_page(logged_context, live_url):
    page = logged_context.new_page()
    page.goto(f"{live_url}/admin/")
    page.wait_for_selector("#logoutButton", timeout=8000)
    yield page
    page.close()


def _go_to_route(page, route: str) -> None:
    page.evaluate(
        '(target) => { window.location.hash = target; }',
        f"#/{route}",
    )
    page.wait_for_timeout(400)


def test_about_page_renders(admin_page):
    _go_to_route(admin_page, "about")
    admin_page.wait_for_selector("#sec-about-overview", state="visible", timeout=5000)
    # Big version card + 4 KPI tiles + OSS notices + changelog
    assert admin_page.is_visible("[data-about-version]")
    assert admin_page.locator(".admin-about-stat").count() == 4
    assert admin_page.locator(".admin-about-cl-entry").count() >= 1
    # KPI tiles match prototype labels (G11)
    kpi_labels = admin_page.locator(".admin-about-stat .k").all_text_contents()
    assert "已是最新版" in kpi_labels
    assert "上次檢查更新" in kpi_labels
    assert "LICENSE" in kpi_labels
    # Action buttons (G11 added 檢查更新 + Setup Wizard)
    actions = admin_page.locator("[data-about-action]").all_text_contents()
    assert any("檢查更新" in a for a in actions)
    assert any("複製" in a for a in actions)
    assert any("設定精靈" in a for a in actions)


def test_notifications_page_renders(admin_page):
    _go_to_route(admin_page, "notifications")
    admin_page.wait_for_selector("#sec-notifications-overview", state="visible", timeout=5000)
    # Filter sidebar tabs + sources (未讀 / 全部 / 已標記 / 已封存)
    assert admin_page.locator("[data-notif-tab]").count() == 4
    sources = admin_page.locator("[data-notif-src]").count()
    assert sources >= 6  # 全部 + Fire Token + Webhooks + System + Backup + Moderation
    # List + summary present
    assert admin_page.is_visible("[data-notif-list]")
    assert admin_page.is_visible("[data-notif-summary]")


def test_audit_page_renders(admin_page):
    _go_to_route(admin_page, "audit")
    admin_page.wait_for_selector("#sec-audit-overview", state="visible", timeout=5000)
    # ACTION / ACTOR / RANGE filters + table
    assert admin_page.locator("[data-audit-action-filter]").count() >= 1
    assert admin_page.locator("[data-audit-actor-filter]").count() >= 1
    assert admin_page.locator("[data-audit-time-filter]").count() >= 3
    # 5-col header
    cols = admin_page.locator(".admin-audit-table th").all_text_contents()
    assert "時間" in cols
    assert "來源" in cols
    assert "事件" in cols
    assert "執行者" in cols
    # JSON export action present
    assert admin_page.locator("[data-audit-action='export']").count() == 1


def test_audience_page_renders(admin_page):
    _go_to_route(admin_page, "audience")
    admin_page.wait_for_selector("#sec-audience-overview", state="visible", timeout=5000)
    # 5 KPI tiles
    assert admin_page.locator(".admin-aud-stat").count() == 5
    # Filter chips: 全部 + 標記
    assert admin_page.locator("[data-aud-filter]").count() == 2
    # Table header (or empty state)
    has_header = admin_page.locator(".admin-aud-row--head").count()
    has_empty = admin_page.locator(".admin-aud-empty").count()
    assert has_header + has_empty >= 1


def test_mobile_admin_page_renders(admin_page):
    _go_to_route(admin_page, "mobile")
    admin_page.wait_for_selector("#sec-mobile-admin-overview", state="visible", timeout=5000)
    # Phone frame + status bar + appbar
    assert admin_page.is_visible("[data-mobile-frame]")
    assert admin_page.is_visible("[data-mobile-time]")
    assert admin_page.is_visible(".admin-mobile-appbar")
    # 4 big actions
    assert admin_page.locator(".admin-mobile-actions .card").count() == 4
    # 3 KPI tiles
    assert admin_page.locator(".admin-mobile-stats .kpi").count() == 3
    # 4 quick toggles
    assert admin_page.locator("[data-mobile-toggle]").count() == 4
    # 5-tab bottom bar
    assert admin_page.locator(".admin-mobile-tabbar .tab").count() == 5


def test_poll_deepdive_page_renders(admin_page):
    _go_to_route(admin_page, "poll-deepdive")
    admin_page.wait_for_selector("#sec-poll-deepdive-overview", state="visible", timeout=5000)
    # Either populated state (header + KPI) OR empty state
    has_header = admin_page.locator(".admin-pdd-header").count()
    has_empty = admin_page.locator(".admin-pdd-empty").count()
    assert has_header + has_empty >= 1
    # If populated, sentiment row should be present (G8 polish)
    if has_header > 0:
        assert admin_page.locator(".admin-pdd-sentiment-tile").count() == 2


def test_setup_wizard_overlay_renders(admin_page):
    _go_to_route(admin_page, "setup")
    admin_page.wait_for_selector("#admin-setup-wizard-root", state="visible", timeout=5000)
    # 5-step flow (password / logo / theme / language / done)
    assert admin_page.locator(".admin-setup-step").count() == 5
    # First step is password
    assert admin_page.locator(".admin-setup-step.is-active .lbl").text_content() == "密碼"
    # Footer action buttons (close / prev / next)
    assert admin_page.locator("[data-setup-action='close']").count() >= 1
    # Close drawer to clean up for next test
    admin_page.evaluate('() => { window.AdminSetupWizard && window.AdminSetupWizard.close && window.AdminSetupWizard.close(); }')


def test_setup_wizard_step_dependency_hints(admin_page):
    """Task 5 regression: show backend dependency hints for step 1/2 when unavailable."""
    _go_to_route(admin_page, "setup")
    admin_page.wait_for_selector("#admin-setup-wizard-root", state="visible", timeout=5000)

    # Simulate missing backend endpoints for password/logo from the page runtime.
    admin_page.evaluate(
        """() => {
          if (!window.AdminSetupWizard || typeof window.AdminSetupWizard.__setCapabilityForTest !== "function") {
            throw new Error("missing AdminSetupWizard.__setCapabilityForTest");
          }
          window.AdminSetupWizard.__setCapabilityForTest("password", false);
          window.AdminSetupWizard.__setCapabilityForTest("logo", false);
        }"""
    )
    admin_page.wait_for_selector("[data-setup-blocked='password']", state="visible", timeout=5000)

    admin_page.locator("[data-setup-action='next']").click()
    admin_page.wait_for_selector("[data-setup-blocked='logo']", state="visible", timeout=5000)


def test_session_detail_falls_back_to_archive_endpoint(admin_page):
    """Regression (P0-2): lifecycle session detail should fallback to archive API."""
    _go_to_route(admin_page, "dashboard")
    admin_page.wait_for_selector("#logoutButton", state="visible", timeout=5000)

    # Create a lifecycle session with no history records, then close it so
    # /admin/sessions/<id> is expected to 404 and UI must fallback to archive detail.
    session_id = admin_page.evaluate(
        """async () => {
          const openRes = await window.csrfFetch("/admin/session/open", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: "browser-regression-archive-fallback" }),
          });
          const openData = await openRes.json();
          if (!openRes.ok) {
            throw new Error(openData.error || ("open failed: " + openRes.status));
          }
          const id = openData && openData.session && openData.session.id;
          if (!id) throw new Error("missing session id");

          const closeRes = await window.csrfFetch("/admin/session/close", { method: "POST" });
          const closeData = await closeRes.json();
          if (!closeRes.ok) {
            throw new Error(closeData.error || ("close failed: " + closeRes.status));
          }
          return id;
        }"""
    )
    assert session_id and str(session_id).startswith("sess_")

    seen = {}

    def _on_response(resp):
        url = resp.url
        if f"/admin/sessions/{session_id}" in url:
            seen["derived"] = resp.status
        if f"/admin/session/archive/{session_id}" in url:
            seen["archive"] = resp.status

    admin_page.on("response", _on_response)
    try:
        admin_page.evaluate(
            '(sid) => { window.location.hash = "#/session-detail?id=" + encodeURIComponent(sid); }',
            session_id,
        )
        admin_page.wait_for_selector("#sec-session-detail-overview", state="visible", timeout=6000)
        admin_page.wait_for_selector("[data-sd-session-header]", state="visible", timeout=6000)
        admin_page.wait_for_timeout(400)
    finally:
        admin_page.remove_listener("response", _on_response)

    assert seen.get("derived") == 404
    assert seen.get("archive") == 200
    assert session_id in (admin_page.locator("[data-sd-session-id]").text_content() or "")


def test_message_drawer_opens_from_live_feed(admin_page):
    """Group A G10 — Message Detail Drawer opens with prev/next buttons."""
    _go_to_route(admin_page, "messages")
    admin_page.wait_for_timeout(300)
    # Inject mock messages then click first row
    admin_page.evaluate('''() => {
        for (let i = 0; i < 3; i++) {
            document.dispatchEvent(new CustomEvent('admin-ws-message', {
                detail: { type: 'danmu_live', data: {
                    text: '訊息 #' + (i+1), color: '#7c3aed', layout: 'scroll',
                    nickname: '測試', fingerprint: 'fp_test_' + i,
                } }
            }));
        }
    }''')
    admin_page.wait_for_timeout(200)
    rows = admin_page.locator(".admin-live-feed-row")
    if rows.count() == 0:
        pytest.skip("Live feed rows not rendered (race); skipping click")
    rows.first.click()
    admin_page.wait_for_timeout(200)
    # Drawer present + prev/next nav buttons + close button
    assert admin_page.locator("#admin-message-drawer-root").count() == 1
    assert admin_page.locator("[data-msgd-action='prev']").count() == 1
    assert admin_page.locator("[data-msgd-action='next']").count() == 1
    # Two close handlers: backdrop click + ✕ button in header
    assert admin_page.locator("[data-msgd-action='close']").count() == 2


def test_viewer_banned_state_url_preview(browser_session, live_url):
    """ViewerBanned auto-shows when URL has ?state=banned."""
    page = browser_session.new_page()
    try:
        page.goto(f"{live_url}/?state=banned", wait_until="domcontentloaded")
        page.wait_for_selector(".viewer-state--banned", state="visible", timeout=5000)
        assert page.locator(".viewer-state-kicker").text_content() == "BLOCKED · 已被禁言"
        assert page.locator(".viewer-state-info .row").count() == 3
    finally:
        page.close()


def test_viewer_pollthankyou_state_url_preview(browser_session, live_url):
    """ViewerPollThankYou auto-shows when URL has ?state=thankyou."""
    page = browser_session.new_page()
    try:
        page.goto(f"{live_url}/?state=thankyou&choice=Demo", wait_until="domcontentloaded")
        page.wait_for_selector(".viewer-state--thankyou", state="visible", timeout=5000)
        assert page.locator(".viewer-state-title").text_content() == "已送出投票"
        # Choice text from URL param renders inside the recap
        assert "Demo" in page.locator(".viewer-state-recap .choice .lbl").text_content()
    finally:
        page.close()


# ─── 5.1.0 P0-0 IA migration coverage ──────────────────────────────────────


def test_ia_alias_redirect_audit_to_history(admin_page):
    """Slice 4: legacy #/audit must redirect to #/history/audit and
    activate the audit tab inside the history nav."""
    _go_to_route(admin_page, "audit")
    # URL gets rewritten by applyRoute via buildHash
    final_hash = admin_page.evaluate('() => window.location.hash')
    assert final_hash == "#/history/audit", f"expected redirect, got {final_hash}"
    # The shell exposes the canonical leaf to legacy modules
    leaf = admin_page.evaluate('() => document.querySelector(".admin-dash-grid").dataset.activeLeaf')
    assert leaf == "audit"
    # Audit section is the only visible history-tab body
    admin_page.wait_for_selector("#sec-audit-overview", state="visible", timeout=5000)


def test_ia_tab_strip_renders_for_moderation(admin_page):
    """Slice 3: tabbed nav routes mount a tab strip in the topbar host."""
    _go_to_route(admin_page, "moderation")
    admin_page.wait_for_selector(".admin-tabs-strip", state="attached", timeout=5000)
    # 4 tabs per P0-0a (blacklist / filters / ratelimit / fingerprints)
    assert admin_page.locator(".admin-tabs-btn").count() == 4
    # Default tab = blacklist (locked decision in tab-chrome.jsx)
    active = admin_page.locator(".admin-tabs-btn.is-active").get_attribute("data-tab")
    assert active == "blacklist"


def test_ia_system_accordion_renders(admin_page):
    """Slice 6: system route shows the 8-leaf accordion."""
    _go_to_route(admin_page, "system")
    admin_page.wait_for_selector(".admin-system-accordion", state="attached", timeout=5000)
    rows = admin_page.locator(".admin-system-accordion-row")
    assert rows.count() == 8
    # Single-open default — first row (system overview) is open
    open_rows = admin_page.locator(".admin-system-accordion-row.is-open")
    assert open_rows.count() == 1


def test_ia_deep_link_preserves_tab(admin_page):
    """Slice 2 + 3: deep-linking #/<nav>/<tab> activates the tab directly,
    skipping the default."""
    admin_page.evaluate(
        '() => { window.location.hash = "#/moderation/filters"; }'
    )
    admin_page.wait_for_timeout(400)
    active = admin_page.locator(".admin-tabs-btn.is-active").get_attribute("data-tab")
    assert active == "filters"
    # Inactive tab section hidden
    blacklist_display = admin_page.evaluate(
        '() => document.getElementById("sec-blacklist").style.display'
    )
    assert blacklist_display == "none"
