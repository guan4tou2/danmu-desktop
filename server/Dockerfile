# syntax=docker/dockerfile:1.6
#
# Build context: repository root (NOT server/).
# We need access to ../shared/ because server/static/css/tokens.css is a
# symlink to shared/tokens.css — a `./server` context drops the symlink
# target and style.css fails to resolve `var(--radius-pill)` etc, causing
# silent UI regressions (pill chips render as rectangles, status dots
# disappear because --color-success is undefined).

# ── Stage 1: dependency builder ──────────────────────────────────────────────
FROM python:3.11-slim AS builder

WORKDIR /app/server

# Copy uv from official image (no pip overhead).
# Pinned to a specific version to prevent supply-chain drift — bump
# deliberately when updating uv, so a compromised `:latest` tag can't
# silently replace the builder binary.
COPY --from=ghcr.io/astral-sh/uv:0.11.7 /uv /usr/local/bin/uv

# Install only production dependencies into an isolated venv
COPY server/pyproject.toml server/uv.lock ./
RUN uv sync --frozen --no-dev --no-install-project

# ── Stage 2: runtime ──────────────────────────────────────────────────────────
FROM python:3.11-slim AS runtime

LABEL maintainer="guan4tou2 <mole30608@gmail.com>"
LABEL org.opencontainers.image.source="https://github.com/guan4tou2/danmu-desktop"
LABEL org.opencontainers.image.description="Danmu Fire Server"

WORKDIR /app/server

# Runtime system dependency only
RUN apt-get update && apt-get install -y --no-install-recommends \
    libmagic1 \
    && rm -rf /var/lib/apt/lists/*

# Copy venv from builder (no uv, no pip, no dev packages)
COPY --from=builder /app/server/.venv /app/server/.venv

ENV VIRTUAL_ENV=/app/server/.venv
ENV PATH="$VIRTUAL_ENV/bin:$PATH"
ENV PYTHONPATH=/app
# Hardening: don't write .pyc cache files at runtime (smaller writable-dir
# footprint + marginally less disk I/O) and flush stdout/stderr without
# buffering so docker logs show errors immediately instead of at shutdown.
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Shared resources consumed by both server and (eventually) other
# packages. server/static/css/tokens.css is a symlink pointing here —
# copy shared/ BEFORE the server code so the symlink resolves.
COPY shared/ /app/shared/

# Copy application code — exclude tests, dev configs, and build artifacts
COPY server/app.py server/config.py server/logging_config.py \
     server/startup_warnings.py server/state.py server/utils.py server/ws_app.py ./
COPY server/effects/ effects/
COPY server/managers/ managers/
COPY server/routes/ routes/
COPY server/services/ services/
COPY server/static/ static/
COPY server/templates/ templates/
COPY server/themes/ themes/
COPY server/ws/ ws/

# Copy entrypoint
COPY server/entrypoint.sh /entrypoint.sh
RUN chmod 755 /entrypoint.sh

# Create runtime directories and non-root user
RUN mkdir -p user_fonts static/vendor static/sounds static/emojis plugins \
    && useradd -m -u 1000 appuser \
    && chown -R appuser:appuser /app /entrypoint.sh

USER appuser

EXPOSE 4000 4001

HEALTHCHECK --interval=30s --timeout=10s --start-period=15s --retries=3 \
    CMD python -c "import urllib.request; urllib.request.urlopen('http://localhost:4000/health').read()" || exit 1

ENTRYPOINT ["/entrypoint.sh"]
