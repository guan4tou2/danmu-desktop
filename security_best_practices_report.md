# Security Best Practices Report

## Executive Summary

This report reviews open GitHub code scanning findings for `guan4tou2/danmu-desktop` and documents fixes applied locally in this branch.

Priority outcomes:
- Fixed direct CodeQL issues (sensitive-data logging, stack-trace exposure, DOM XSS sink hardening, workflow permissions).
- Reduced lockfile security exposure via dependency updates (`npm audit fix`), including `minimatch`, `tar`, `glob`, `ajv`, `lodash`, and `webpack` updates in `danmu-desktop/package-lock.json`.
- One residual npm advisory remains (`serialize-javascript` via `terser-webpack-plugin`) with no non-breaking upstream fix path indicated by current audit metadata.

## Critical/High

### [F-001] Clear-text sensitive data exposure in password hash script
- Rule ID: `py/clear-text-logging-sensitive-data` (CodeQL alert #23)
- Severity: High
- Location: `server/scripts/hash_password.py:20-34`
- Evidence: Script previously printed raw plaintext password to stdout.
- Impact: Plaintext credential exposure in terminal history/CI logs/shell capture.
- Fix Applied:
  - Removed plaintext password output.
  - Added secure prompt flow (`getpass`) when password argument is omitted.
  - Added empty-password guard.
- Mitigation: Prefer running without CLI args to avoid shell history leaks.

### [F-002] DOM XSS risk via untrusted URL assignment in preview image
- Rule ID: `js/xss-through-dom` (CodeQL alert #31)
- Severity: High
- Location: `server/static/js/main.js:338-369`
- Evidence: User-controlled text was previously assigned into `img.src` after extension regex only.
- Impact: Scriptable URL/protocol abuse risk in preview rendering path.
- Fix Applied:
  - Added `parseSafeImageUrl()` to enforce protocol allowlist (`http/https`) and extension checks on parsed pathname.
  - Preview now uses normalized safe URL only.
- Mitigation: Keep server-side URL validation (`/fire`) as second layer.

## Medium

### [F-003] Stack-trace / internal exception detail exposure
- Rule ID: `py/stack-trace-exposure` (CodeQL alert #58)
- Severity: Medium
- Location: `server/routes/admin.py:165-167`
- Evidence: Route returned `str(exc)` to client on `ValueError`.
- Impact: Internal validation details leak to untrusted clients.
- Fix Applied:
  - Return generic JSON error message.
  - Preserve sanitized server log for diagnostics.

### [F-004] Missing workflow token least-privilege permissions
- Rule ID: `actions/missing-workflow-permissions` (CodeQL alerts #21, #22, #26)
- Severity: Medium
- Location:
  - `.github/workflows/test.yml:15-16`
  - `.github/workflows/docker-build.yml:21-22`
- Evidence: No explicit `permissions` block defined.
- Impact: Broader default `GITHUB_TOKEN` scope than needed.
- Fix Applied:
  - Added explicit `permissions: contents: read`.

### [F-005] Insecure admin password defaults / credential hardening gap
- Rule ID: Best-practice hardening (config review)
- Severity: Medium
- Location:
  - `server/config.py:22-25,34`
  - `server/app.py:33-37`
- Evidence: Previously used fallback plaintext default password.
- Impact: Weak default credential risk and misconfigured deployments.
- Fix Applied:
  - Removed fallback default admin password.
  - Added startup guard: require `ADMIN_PASSWORD` or `ADMIN_PASSWORD_HASHED`.
  - Set runtime password hash file mode to `0600` after write.

## Dependency/Lockfile Findings

### [F-006] Multiple transitive vulnerabilities in JS lockfile
- Rule IDs: multiple OSV alerts (`CVE-2026-27903`, `CVE-2026-27904`, `CVE-2026-26996`, `CVE-2026-26960`, `CVE-2025-69873`, `CVE-2025-68458`, `CVE-2026-25547`, etc.)
- Severity: Warning/High mix (from code scanning)
- Location: `danmu-desktop/package-lock.json`
- Fix Applied:
  - Ran `npm audit fix` in `danmu-desktop/`.
  - Updated dependency graph now includes patched baselines such as:
    - `webpack@5.105.3`
    - `minimatch@3.1.5/9.0.9/10.2.4`
    - `tar@7.5.9`
    - `glob@10.5.0`
    - `ajv@6.14.0/8.18.0`
    - `lodash@4.17.23`

## Residual Risk / Open Item

### [R-001] `serialize-javascript` advisory remains
- Source: `npm audit --json` (post-fix)
- Current package path: transitive via `terser-webpack-plugin@5.3.16`
- Status: `fixAvailable: false` for non-breaking path in current tree.
- Recommended next step:
  - Re-run GitHub code scanning after push to confirm closed alerts.
  - If this advisory remains only as tooling-only path (build-time) and no safe upgrade exists, consider documenting and suppressing in `osv-scanner.toml` with explicit risk acceptance reason.

## Verification Performed

- Backend tests: `PYTHONPATH=.. uv run --group dev pytest` (89 passed)
- Frontend tests:
  - `npm test -- tests/ws-reconnect.test.js --runInBand` (pass)
  - Full suite shows one intermittent failure in `tests/ws-reconnect.test.js` backoff-growth assertion (existing flaky behavior; not tied to security patch logic).

