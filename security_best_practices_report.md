# Security Fix Verification Report

## Executive Summary

I re-verified the three previously discussed issues against the current workspace.

Current status:

1. `SEC-001` Weak default admin password handling: fixed for production startup. The app now rejects weak passwords such as `password` and `changeme` in production, while only warning in development. The local [`server/.env`](/Users/guantou/Desktop/danmu-desktop/server/.env#L1) still uses `changeme`, so this remains a local-development hygiene concern, not the earlier high-severity production bypass.
2. `SEC-002` Fingerprint blocking: fixed. The admin `Block FP` flow now creates a real `fingerprint` rule, and regression tests pass.
3. `SEC-003` Dedicated WebSocket exposure: partially fixed. The code now defaults to binding the WS server to loopback via `WS_HOST=127.0.0.1`, but the default Docker deployment still sets `WS_HOST=0.0.0.0` and leaves `WS_REQUIRE_TOKEN=false`, so container deployments remain unauthenticated unless the operator overrides the defaults.

Validation performed:

1. Targeted `pytest` for fingerprint blocking:
   - [`test_live_block_fingerprint_success`](/Users/guantou/Desktop/danmu-desktop/server/tests/test_admin.py#L686): passed
   - fingerprint-specific rules in [`test_filter_engine.py`](/Users/guantou/Desktop/danmu-desktop/server/tests/test_filter_engine.py#L90): `4` tests passed
2. Direct runtime probe for password handling:
   - `ENV=production` + `ADMIN_PASSWORD=changeme` raised the expected `RuntimeError`
   - `ENV=development` + `ADMIN_PASSWORD=changeme` started and logged a warning

## Verification Results

### SEC-001: Weak default password

Status: Fixed for production, with residual local-development risk.

- Evidence:
  - [`app.py`](/Users/guantou/Desktop/danmu-desktop/server/app.py#L40) defines `_weak_passwords = {"password", "changeme", "admin", "123456"}`.
  - [`app.py`](/Users/guantou/Desktop/danmu-desktop/server/app.py#L43) raises on weak passwords when `ENV` is `production` or `prod`.
  - [`app.py`](/Users/guantou/Desktop/danmu-desktop/server/app.py#L47) only logs a warning outside production.
  - [`server/.env`](/Users/guantou/Desktop/danmu-desktop/server/.env#L1) now sets `ADMIN_PASSWORD=changeme`.
- Dynamic verification:
  - Production config with `changeme` failed closed with:
    - `Refusing to start in production with a weak default admin password.`
  - Development config with `changeme` did not fail startup and emitted a warning instead.
- Assessment:
  - This closes the earlier trivial-production-takeover issue.
  - If someone exposes a development-mode instance as-is, the credential is still weak; that is now an operational misuse case rather than a production-default vulnerability.

### SEC-002: Fingerprint blocking

Status: Fixed.

- Evidence:
  - [`live.py`](/Users/guantou/Desktop/danmu-desktop/server/routes/admin/live.py#L31) now adds a rule with `"type": "fingerprint"`.
  - [`filter_engine.py`](/Users/guantou/Desktop/danmu-desktop/server/services/filter_engine.py#L170) now accepts `fingerprint` in `_build_rule`.
  - [`filter_engine.py`](/Users/guantou/Desktop/danmu-desktop/server/services/filter_engine.py#L218) performs exact-match fingerprint blocking.
  - [`test_admin.py`](/Users/guantou/Desktop/danmu-desktop/server/tests/test_admin.py#L686) verifies the UI route both returns `200` and actually blocks the targeted fingerprint.
  - [`test_filter_engine.py`](/Users/guantou/Desktop/danmu-desktop/server/tests/test_filter_engine.py#L90) adds exact-match and non-match regression coverage.
- Dynamic verification:
  - `pytest tests/test_admin.py -q -k live_block_fingerprint_success`: passed
  - `pytest tests/test_filter_engine.py -q -k fingerprint`: `4` tests passed

### SEC-003: Dedicated WebSocket exposure

Status: Partially fixed.

- Evidence for the fix:
  - [`config.py`](/Users/guantou/Desktop/danmu-desktop/server/config.py#L80) now sets `WS_HOST` default to `127.0.0.1`.
  - [`server.py`](/Users/guantou/Desktop/danmu-desktop/server/ws/server.py#L275) now binds `websockets.serve(...)` to `ws_host` instead of hardcoded `0.0.0.0`.
- Residual exposure:
  - [`docker-compose.yml`](/Users/guantou/Desktop/danmu-desktop/docker-compose.yml#L15) explicitly sets `WS_HOST=0.0.0.0`.
  - [`docker-compose.yml`](/Users/guantou/Desktop/danmu-desktop/docker-compose.yml#L25) still defaults `WS_REQUIRE_TOKEN` to `false`.
  - [`README.md`](/Users/guantou/Desktop/danmu-desktop/README.md#L179) says the default is `true`, but runtime config and container defaults still indicate otherwise.
- Assessment:
  - Native/local runs are now safer by default because the WS listener stays on loopback.
  - Default container deployment still exposes an unauthenticated WS service unless the operator sets `WS_REQUIRE_TOKEN=true` and provides `WS_AUTH_TOKEN`, or otherwise restricts network access.

## Conclusion

Two of the three fixes are confirmed in the current workspace:

1. Weak password handling is materially improved and now fails closed in production.
2. Fingerprint blocking is working again and covered by regression tests.

The WebSocket issue is only partially resolved:

1. Local default binding is fixed.
2. Docker default exposure/auth still needs tightening before I would call the issue fully closed.
