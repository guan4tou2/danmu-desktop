import logging
import secrets
import threading
import time
from collections import defaultdict, deque
from functools import wraps

import bcrypt
from flask import abort, current_app, request, session
from itsdangerous import BadSignature, BadTimeSignature, URLSafeTimedSerializer

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
        return True

    def reset(self):
        with self.lock:
            self.history.clear()


rate_limiter: BaseRateLimiter = InMemoryRateLimiter()


def configure_rate_limiter(limiter: BaseRateLimiter):
    global rate_limiter
    rate_limiter = limiter


class RedisRateLimiter(BaseRateLimiter):
    def __init__(self, redis_url: str):
        if redis is None:  # pragma: no cover
            raise RuntimeError("redis library is not installed")
        self.client = redis.Redis.from_url(redis_url)

    def allow(self, key: str, limit: int, window: int) -> bool:
        now = time.time()
        redis_key = f"ratelimit:{key}"
        pipe = self.client.pipeline()
        pipe.zremrangebyscore(redis_key, "-inf", now - window)
        pipe.zcard(redis_key)
        removed, count = pipe.execute()
        if count >= limit:
            return False
        pipe = self.client.pipeline()
        pipe.zadd(redis_key, {str(now): now})
        pipe.expire(redis_key, window)
        pipe.execute()
        return True

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
        if not token or not candidate or token != candidate:
            abort(403, description="Invalid CSRF token")
        return func(*args, **kwargs)

    return wrapper


def rate_limit(key_prefix: str, limit_key: str = "FIRE_RATE_LIMIT", window_key: str = "FIRE_RATE_WINDOW"):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            client_ip = request.remote_addr or "unknown"
            limit = current_app.config.get(limit_key, 20)
            window = current_app.config.get(window_key, 60)
            key = f"{key_prefix}:{client_ip}"
            if not rate_limiter.allow(key, limit, window):
                abort(429, description="Too Many Requests")
            return func(*args, **kwargs)

        return wrapper

    return decorator


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

