# syntax=docker/dockerfile:1.6

# ── Stage 1: dependency builder ──────────────────────────────────────────────
FROM python:3.11-slim AS builder

WORKDIR /app/server

# Copy uv from official image (no pip overhead)
COPY --from=ghcr.io/astral-sh/uv:latest /uv /usr/local/bin/uv

# Install only production dependencies into an isolated venv
COPY pyproject.toml uv.lock ./
RUN uv sync --frozen --no-dev --no-install-project

# ── Stage 2: runtime ──────────────────────────────────────────────────────────
FROM python:3.11-slim AS runtime

LABEL maintainer="guan4tou2 <mole30608@gmail.com>"
LABEL org.opencontainers.image.source="https://github.com/guan4tou2/danmu-desktop"
LABEL org.opencontainers.image.description="Danmu Desktop Server"

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

# Copy application code — exclude tests, dev configs, and build artifacts
COPY app.py config.py extensions.py logging_config.py \
     startup_warnings.py state.py utils.py ws_app.py ./
COPY effects/ effects/
COPY managers/ managers/
COPY routes/ routes/
COPY services/ services/
COPY static/ static/
COPY templates/ templates/
COPY themes/ themes/
COPY ws/ ws/

# Copy entrypoint
COPY entrypoint.sh /entrypoint.sh
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
