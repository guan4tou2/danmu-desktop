import hmac
import json
import logging
import math
import secrets
import threading
import time
import urllib.parse
import urllib.request
from collections import defaultdict, deque
from functools import wraps
from typing import Dict, List, Optional

import bcrypt
from flask import abort, current_app, make_response, request, session
from itsdangerous import BadSignature, BadTimeSignature, URLSafeTimedSerializer

from .ip import get_client_ip as _get_client_ip

try:
    import redis  # type: ignore
except Exception:  # pragma: no cover
    redis = None

logger = logging.getLogger(__name__)


class BaseRateLimiter:
    def allow(self, key: str, limit: int, window: int) -> bool:
        raise NotImplementedError

    def reset(self):
        raise NotImplementedError


class InMemoryRateLimiter(BaseRateLimiter):
    def __init__(self):
        self.history = defaultdict(deque)
        self.lock = threading.Lock()

    def allow(self, key: str, limit: int, window: int) -> bool:
        now = time.time()
        with self.lock:
            dq = self.history[key]
            while dq and now - dq[0] > window:
                dq.popleft()
            if len(dq) >= limit:
                return False
            dq.append(now)
            # Periodic cleanup: prune empty entries to prevent unbounded growth
            if len(self.history) > 1000:
                empty_keys = [k for k, v in self.history.items() if not v]
                for k in empty_keys:
                    del self.history[k]
        return True

    def reset(self):
        with self.lock:
            self.history.clear()


rate_limiter: BaseRateLimiter = InMemoryRateLimiter()


def configure_rate_limiter(limiter: BaseRateLimiter):
    global rate_limiter
    rate_limiter = limiter


# ─── Rate-limit counters (cumulative hits/violations + recent violator IPs) ──
#
# Counters are process-local and reset on restart (no disk persistence). The
# /admin/metrics endpoint reads them through get_rate_limit_stats() on every
# poll, so the implementation is designed to be cheap (<1ms).

_RATE_STATS_VIOLATOR_WINDOW = 300  # seconds — "recent" violator IP window

# Per-prefix 24h history of allowed-request counts, bucketed at 5-min intervals
# (300s × 288 buckets = 86_400s = 24h). Used by `get_rate_limit_suggestion()`
# to derive a P95 sustained req/s value and recommend an appropriate limit.
_RATE_BUCKET_SECONDS = 300
_RATE_BUCKET_RETENTION = 24 * 60 * 60  # keep last 24h
_RATE_BUCKET_MAX = _RATE_BUCKET_RETENTION // _RATE_BUCKET_SECONDS  # 288

_rate_stats_lock = threading.Lock()
_rate_stats_hits: "defaultdict[str, int]" = defaultdict(int)
_rate_stats_violations: "defaultdict[str, int]" = defaultdict(int)
# Each entry is a deque of (timestamp, client_ip) pairs for that prefix.
_rate_stats_violators: "defaultdict[str, deque]" = defaultdict(deque)
# Per-prefix list of (bucket_start_unix_ts, allowed_count) tuples, oldest first.
# Bucket boundary aligned to floor(now / _RATE_BUCKET_SECONDS) * _RATE_BUCKET_SECONDS.
_rate_buckets: "Dict[str, List[List[float]]]" = defaultdict(list)


def _record_rate_event(key_prefix: str, client_ip: str, allowed: bool) -> None:
    """Record a rate-limit check outcome for later aggregation.

    Called once per `rate_limiter.allow()` invocation inside the `rate_limit`
    decorator. Cheap (O(1) amortised); holds a single module-level lock so it
    is safe to call from any request thread.
    """
    now = time.time()
    with _rate_stats_lock:
        if allowed:
            _rate_stats_hits[key_prefix] += 1
            _bump_bucket_locked(key_prefix, now)
        else:
            _rate_stats_violations[key_prefix] += 1
            dq = _rate_stats_violators[key_prefix]
            dq.append((now, client_ip))
            # Opportunistic prune: drop events older than the window so the
            # deque stays bounded in size even under sustained pressure.
            cutoff = now - _RATE_STATS_VIOLATOR_WINDOW
            while dq and dq[0][0] < cutoff:
                dq.popleft()


def _bump_bucket_locked(key_prefix: str, now: float) -> None:
    """Increment the current 5-min bucket for ``key_prefix``.

    Caller MUST hold ``_rate_stats_lock``. Drops buckets older than the 24h
    retention window so the list is bounded to ``_RATE_BUCKET_MAX`` entries.
    """
    bucket_start = math.floor(now / _RATE_BUCKET_SECONDS) * _RATE_BUCKET_SECONDS
    buckets = _rate_buckets[key_prefix]
    if buckets and buckets[-1][0] == bucket_start:
        buckets[-1][1] += 1
    else:
        buckets.append([float(bucket_start), 1])
    # Drop buckets older than retention window (oldest first).
    cutoff = now - _RATE_BUCKET_RETENTION
    while buckets and buckets[0][0] < cutoff:
        buckets.pop(0)
    # Hard cap (defensive — retention should already bound this).
    if len(buckets) > _RATE_BUCKET_MAX:
        del buckets[: len(buckets) - _RATE_BUCKET_MAX]


def _percentile(values: List[float], p: float) -> float:
    """Compute the p-th percentile via nearest-rank on a sorted copy.

    Returns 0.0 for empty input. ``p`` is in [0, 100]. Uses the C = 1 method
    (NumPy default ``method='linear'`` would over-estimate for short series).
    """
    if not values:
        return 0.0
    s = sorted(values)
    if len(s) == 1:
        return float(s[0])
    # Nearest-rank: idx = ceil(p/100 * N) - 1, clamped to [0, N-1]
    idx = max(0, min(len(s) - 1, math.ceil((p / 100.0) * len(s)) - 1))
    return float(s[idx])


def _bucket_p95_per_second(key_prefix: str, now: float) -> float:
    """Return P95 sustained req/s across the last 24h of 5-min buckets.

    Each bucket value = allowed_count / bucket_seconds. Caller does NOT need
    to hold the lock — we snapshot under the lock.
    """
    with _rate_stats_lock:
        buckets = list(_rate_buckets.get(key_prefix, []))
    if not buckets:
        return 0.0
    cutoff = now - _RATE_BUCKET_RETENTION
    rates = [count / _RATE_BUCKET_SECONDS for (ts, count) in buckets if ts >= cutoff]
    return _percentile(rates, 95)


def get_rate_limit_suggestion(
    key_prefix: str,
    current_limit: int,
    current_window: int,
) -> Optional[Dict[str, float]]:
    """Compute a sizing suggestion for one rate-limit scope.

    Returns ``None`` when the current limit is comfortably above observed P95
    AND violations are <5% of total requests. Otherwise returns:

        {
          "p95_per_second": float,    # P95 of last-24h 5-min bucket rates
          "suggested_limit": int,     # ceil(p95 × current_window × 1.5)
          "suggested_window": int,    # = current_window (we don't change it)
        }

    Trigger conditions (either sufficient):
      * ``current_limit < suggested_limit * 0.7`` — undersized vs traffic
      * ``violations / hits > 0.05`` — sustained violator pressure
    """
    if current_limit <= 0 or current_window <= 0:
        return None

    now = time.time()
    p95 = _bucket_p95_per_second(key_prefix, now)
    suggested_limit = max(1, math.ceil(p95 * current_window * 1.5))

    with _rate_stats_lock:
        hits = _rate_stats_hits.get(key_prefix, 0)
        violations = _rate_stats_violations.get(key_prefix, 0)

    total = hits + violations
    violation_ratio = (violations / total) if total > 0 else 0.0

    undersized = current_limit < suggested_limit * 0.7
    pressured = violation_ratio > 0.05

    if not undersized and not pressured:
        return None

    return {
        "p95_per_second": round(p95, 3),
        "suggested_limit": int(suggested_limit),
        "suggested_window": int(current_window),
    }


def get_rate_limit_bucket_history(key_prefix: str, granularity_minutes: int = 60) -> List[int]:
    """Return a 24-element list of allowed-request counts per granularity bucket.

    Aggregates the 5-min bucket history (288 buckets × 5min = 24h) up to the
    requested ``granularity_minutes`` resolution. The returned list is always
    24 elements long, oldest first; missing slots are zero-padded so the admin
    sparkline always renders 24 columns regardless of uptime.

    Default granularity is 60 minutes (hourly), which sums 12 of the 5-min
    buckets together → 24h × 1h-per-bar. Pass ``granularity_minutes=10`` for
    a 4h × 10min view, etc. Granularity must be a multiple of 5.
    """
    if granularity_minutes < 5 or granularity_minutes % 5 != 0:
        granularity_minutes = 60

    granularity_seconds = granularity_minutes * 60
    now = time.time()
    # Align "now" to the granularity boundary so we get full buckets.
    end_bucket = math.floor(now / granularity_seconds) * granularity_seconds
    start_bucket = end_bucket - 24 * granularity_seconds

    out = [0] * 24
    with _rate_stats_lock:
        buckets = list(_rate_buckets.get(key_prefix, []))
    for ts, count in buckets:
        if ts < start_bucket or ts >= end_bucket:
            continue
        idx = int((ts - start_bucket) // granularity_seconds)
        if 0 <= idx < 24:
            out[idx] += int(count)
    return out


def _locked_sources_for(prefix: str, now: float) -> int:
    dq = _rate_stats_violators.get(prefix)
    if not dq:
        return 0
    cutoff = now - _RATE_STATS_VIOLATOR_WINDOW
    # Prune expired entries in-place while we're holding the lock.
    while dq and dq[0][0] < cutoff:
        dq.popleft()
    return len({ip for _, ip in dq})


def get_rate_limit_stats() -> dict:
    """Return a snapshot of rate-limit counters for /admin/metrics.

    Shape:
        {
          "fire":  {"hits": int, "violations": int, "locked_sources": int},
          "api":   {...},
          "admin": {...},
          "login": {...},
          "totals": {"hits": int, "violations": int, "locked_sources": int},
        }

    `locked_sources` is the number of distinct client IPs that violated the
    limit in the last 300 seconds. Thread-safe, cheap (<1ms).
    """
    prefixes = ("fire", "api", "admin", "login")
    now = time.time()
    out: dict = {}
    total_hits = 0
    total_violations = 0
    all_ips: set = set()
    with _rate_stats_lock:
        for p in prefixes:
            hits = _rate_stats_hits.get(p, 0)
            violations = _rate_stats_violations.get(p, 0)
            dq = _rate_stats_violators.get(p)
            if dq:
                cutoff = now - _RATE_STATS_VIOLATOR_WINDOW
                while dq and dq[0][0] < cutoff:
                    dq.popleft()
                ips = {ip for _, ip in dq}
            else:
                ips = set()
            out[p] = {
                "hits": hits,
                "violations": violations,
                "locked_sources": len(ips),
            }
            total_hits += hits
            total_violations += violations
            all_ips |= ips
        out["totals"] = {
            "hits": total_hits,
            "violations": total_violations,
            "locked_sources": len(all_ips),
        }
    return out


def reset_rate_limit_counters() -> None:
    """Clear all counter state. Intended for tests."""
    with _rate_stats_lock:
        _rate_stats_hits.clear()
        _rate_stats_violations.clear()
        _rate_stats_violators.clear()
        _rate_buckets.clear()


def recent_violations(limit: int = 30) -> List[dict]:
    """Return the most recent rate-limit violations across all scopes.

    Powers the Ratelimits page 近期違規 feed. Each entry::

        {"ts": float, "scope": "fire"|"api"|"admin"|"login", "ip": str}

    Newest first. Capped at ``limit``. Pulls from
    ``_rate_stats_violators`` which the rate_limit decorator populates on
    every 429.
    """
    prefixes = ("fire", "api", "admin", "login")
    out: List[dict] = []
    now = time.time()
    cutoff = now - _RATE_STATS_VIOLATOR_WINDOW
    with _rate_stats_lock:
        for p in prefixes:
            dq = _rate_stats_violators.get(p)
            if not dq:
                continue
            for ts, ip in dq:
                if ts < cutoff:
                    continue
                out.append({"ts": ts, "scope": p, "ip": ip})
    out.sort(key=lambda e: e["ts"], reverse=True)
    return out[:limit]


class RedisRateLimiter(BaseRateLimiter):
    _ALLOW_SCRIPT = """
local key = KEYS[1]
local now = tonumber(ARGV[1])
local limit = tonumber(ARGV[2])
local window = tonumber(ARGV[3])
local member = ARGV[4]

redis.call('ZREMRANGEBYSCORE', key, '-inf', now - window)
local count = redis.call('ZCARD', key)
if count >= limit then
    return 0
end
redis.call('ZADD', key, now, member)
redis.call('EXPIRE', key, window)
return 1
"""

    def __init__(self, redis_url: str):
        if redis is None:  # pragma: no cover
            raise RuntimeError("redis library is not installed")
        self.client = redis.Redis.from_url(redis_url)

    def allow(self, key: str, limit: int, window: int) -> bool:
        now = time.time()
        redis_key = f"ratelimit:{key}"
        member = f"{now}:{secrets.token_hex(8)}"
        allowed = self.client.eval(
            self._ALLOW_SCRIPT,
            1,
            redis_key,
            now,
            limit,
            window,
            member,
        )
        return bool(allowed)

    def reset(self):
        # not implemented for redis backend
        pass


def _get_serializer():
    secret_key = current_app.config["SECRET_KEY"]
    return URLSafeTimedSerializer(secret_key, salt="font-download")


def generate_font_token(filename: str) -> str:
    serializer = _get_serializer()
    return serializer.dumps({"filename": filename})


def verify_font_token(token: str, filename: str) -> bool:
    serializer = _get_serializer()
    max_age = current_app.config.get("FONT_TOKEN_EXPIRATION", 900)
    try:
        data = serializer.loads(token, max_age=max_age)
        return data.get("filename") == filename
    except (BadSignature, BadTimeSignature):
        return False


def issue_csrf_token():
    return secrets.token_hex(32)


def require_csrf(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        token = session.get("csrf_token")
        candidate = (
            request.headers.get("X-CSRF-Token")
            or request.form.get("csrf_token")
            or (request.get_json(silent=True) or {}).get("csrf_token")
        )
        if not token or not candidate or not hmac.compare_digest(token, candidate):
            abort(403, description="Invalid CSRF token")
        return func(*args, **kwargs)

    return wrapper


def require_login(func):
    """Decorator that returns 401 JSON if user is not logged in.

    Use on API routes. The admin page view (GET /admin/) handles
    unauthenticated users differently (renders with limited data),
    so it does NOT use this decorator.
    """

    @wraps(func)
    def wrapper(*args, **kwargs):
        if not session.get("logged_in"):
            return make_response(
                json.dumps({"error": "Unauthorized"}),
                401,
                {"Content-Type": "application/json"},
            )
        return func(*args, **kwargs)

    return wrapper


def rate_limit(
    key_prefix: str,
    limit_key: str = "FIRE_RATE_LIMIT",
    window_key: str = "FIRE_RATE_WINDOW",
):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            client_ip = _get_client_ip()
            limit = current_app.config.get(limit_key, 20)
            window = current_app.config.get(window_key, 60)
            key = f"{key_prefix}:{client_ip}"
            allowed = rate_limiter.allow(key, limit, window)
            _record_rate_event(key_prefix, client_ip, allowed)
            if not allowed:
                abort(429, description="Too Many Requests")
            return func(*args, **kwargs)

        return wrapper

    return decorator


def is_fire_admin() -> bool:
    """Return True when the request carries a matching X-Fire-Token header.

    Admin requests bypass public /fire rate limits and captcha. Returns
    False (public client) when no admin token is configured or the header
    is missing/mismatched. Uses secrets.compare_digest to resist timing
    attacks.
    """
    expected = (current_app.config.get("FIRE_ADMIN_TOKEN") or "").strip()
    if not expected:
        return False
    provided = (request.headers.get("X-Fire-Token") or "").strip()
    if not provided:
        return False
    try:
        return secrets.compare_digest(expected, provided)
    except Exception:
        return False


def enforce_fire_rate_limits(fingerprint: str | None, is_admin: bool) -> None:
    """Apply the full /fire rate-limit chain. Aborts 429 if any is exceeded.

    - Admin lane: one generous per-IP ceiling, no captcha, no per-fingerprint,
      no global cap. Stops buggy extensions from runaway-looping without
      blocking organizers behind a public surge.
    - Public lane: per-IP (existing), per-fingerprint (new), global (new).
      Any of the three tripping is enough to reject.
    """
    cfg = current_app.config
    client_ip = _get_client_ip()

    if is_admin:
        limit = int(cfg.get("FIRE_ADMIN_RATE_LIMIT", 200))
        window = int(cfg.get("FIRE_ADMIN_RATE_WINDOW", 60))
        if limit > 0 and not rate_limiter.allow(f"fire_admin:{client_ip}", limit, window):
            abort(429, description="Too Many Requests")
        return

    # Per-IP ceiling (mirrors the pre-v4.9.1 decorator behaviour).
    ip_limit = int(cfg.get("FIRE_RATE_LIMIT", 20))
    ip_window = int(cfg.get("FIRE_RATE_WINDOW", 60))
    if ip_limit > 0 and not rate_limiter.allow(f"fire:{client_ip}", ip_limit, ip_window):
        abort(429, description="Too Many Requests")

    fp_limit = int(cfg.get("FIRE_FINGERPRINT_RATE_LIMIT", 0))
    fp_window = int(cfg.get("FIRE_FINGERPRINT_RATE_WINDOW", 60))
    if fp_limit > 0 and fingerprint:
        if not rate_limiter.allow(f"fire_fp:{fingerprint}", fp_limit, fp_window):
            abort(429, description="Too Many Requests")

    global_limit = int(cfg.get("GLOBAL_FIRE_RATE_LIMIT", 0))
    global_window = int(cfg.get("GLOBAL_FIRE_RATE_WINDOW", 60))
    if global_limit > 0:
        if not rate_limiter.allow("fire_global:all", global_limit, global_window):
            abort(429, description="Too Many Requests")


def verify_captcha(token: str | None) -> bool:
    """Verify a Turnstile / hCaptcha token.

    Returns True when:
      - no provider is configured (feature disabled)
      - provider is configured but secret is missing (misconfig -> fail open
        so server doesn't become unusable on typo; logged at WARNING)
      - provider verifies the token successfully

    Returns False only when the provider actively rejects the token or
    the HTTP call errors. Caller translates False → 400.
    """
    cfg = current_app.config
    provider = (cfg.get("CAPTCHA_PROVIDER") or "none").lower()
    if provider == "none":
        return True
    secret = (cfg.get("CAPTCHA_SECRET") or "").strip()
    if not secret:
        logger.warning(
            "CAPTCHA_PROVIDER=%s set but CAPTCHA_SECRET empty — skipping verification",
            provider,
        )
        return True
    if not token:
        return False

    if provider == "turnstile":
        url = "https://challenges.cloudflare.com/turnstile/v0/siteverify"
    elif provider == "hcaptcha":
        url = "https://hcaptcha.com/siteverify"
    else:
        logger.warning("Unknown CAPTCHA_PROVIDER=%s — skipping verification", provider)
        return True

    try:
        data = urllib.parse.urlencode(
            {
                "secret": secret,
                "response": token,
                "remoteip": _get_client_ip() or "",
            }
        ).encode()
        req = urllib.request.Request(url, data=data, method="POST")
        with urllib.request.urlopen(req, timeout=5) as resp:
            payload = json.loads(resp.read().decode("utf-8") or "{}")
        return bool(payload.get("success"))
    except Exception as exc:
        logger.warning("captcha verify error (%s): %s", provider, exc)
        return False


def hash_password(password: str) -> str:
    """雜湊密碼"""
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")


def verify_password(password: str, hashed: str) -> bool:
    """驗證密碼"""
    try:
        return bcrypt.checkpw(password.encode("utf-8"), hashed.encode("utf-8"))
    except Exception:
        return False


def init_security(app):
    backend = app.config.get("RATE_LIMIT_BACKEND", "memory").lower()
    if backend == "redis":
        url = app.config.get("REDIS_URL")
        if not url:
            raise RuntimeError("REDIS_URL must be set for redis rate limiter")
        configure_rate_limiter(RedisRateLimiter(url))
    else:
        configure_rate_limiter(InMemoryRateLimiter())
