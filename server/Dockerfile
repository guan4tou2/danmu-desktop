# syntax=docker/dockerfile:1.6

FROM python:3.11-slim AS runtime

LABEL maintainer="guan4tou2 <mole30608@gmail.com>"
LABEL org.opencontainers.image.source="https://github.com/guan4tou2/danmu-desktop"
LABEL org.opencontainers.image.description="Danmu Desktop Server"

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    libmagic1 \
    && rm -rf /var/lib/apt/lists/*

# Install uv
RUN pip install --no-cache-dir uv

# Prepare application directory structure
RUN mkdir -p /app/server
WORKDIR /app/server

# Copy dependency files
COPY pyproject.toml uv.lock ./

# Install Python dependencies
RUN uv sync --frozen

# Use the virtual environment created by uv
ENV VIRTUAL_ENV=/app/server/.venv
ENV PATH="$VIRTUAL_ENV/bin:$PATH"
ENV PYTHONPATH=/app

# Copy application code
COPY . .

# Copy entrypoint and set permissions (still running as root)
COPY entrypoint.sh /entrypoint.sh
RUN chmod 755 /entrypoint.sh

# Create directories for fonts, static files, plugins, and runtime data
RUN mkdir -p user_fonts static/vendor static/sounds static/emojis plugins /tmp

# Create non-root user
RUN useradd -m -u 1000 appuser && \
    chown -R appuser:appuser /app /tmp

# Switch to non-root user
USER appuser

# Expose ports
EXPOSE 4000 4001

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD python -c "import urllib.request; urllib.request.urlopen('http://localhost:4000/health').read()" || exit 1

ENTRYPOINT ["/entrypoint.sh"]
