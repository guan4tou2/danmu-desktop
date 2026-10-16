#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TMP_DIR="$(mktemp -d)"
SERVER_PID=""
cleanup() {
  if [[ -n "$SERVER_PID" ]]; then
    kill "$SERVER_PID" 2>/dev/null || true
    wait "$SERVER_PID" 2>/dev/null || true
  fi
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT

TEST_PYTHON="$ROOT_DIR/server/.venv/bin/python"
if [[ ! -x "$TEST_PYTHON" ]]; then TEST_PYTHON="$(command -v python3)"; fi
REAL_CURL="$(command -v curl)"
REMOTE_REPO="$TMP_DIR/remote"
mkdir "$TMP_DIR/bin"

# Resolve the wrapper's actual targets against the repository before making
# fixtures, so an invented fixture cannot hide a stale production asset path.
"$TEST_PYTHON" - "$ROOT_DIR" "$TMP_DIR/probe-paths.json" <<'PY'
import ast
import json
import pathlib
import subprocess
import sys

root, paths_file = map(pathlib.Path, sys.argv[1:])
source = (root / "scripts/deploy-vps.sh").read_text()
assignment = next(line.removeprefix("paths = ") for line in source.splitlines() if line.startswith("paths = "))
paths = ast.literal_eval(assignment.replace(chr(92), ""))
assert len(paths) == 5
for url_path in paths:
    assert url_path.startswith("/static/"), url_path
    asset = root / "server" / url_path.lstrip("/")
    for tracked in {asset, asset.resolve(strict=True)}:
        subprocess.run(
            ["git", "-C", str(root), "ls-files", "--error-unmatch", "--", str(tracked.relative_to(root))],
            check=True, stdout=subprocess.DEVNULL,
        )
    assert asset.is_file() and asset.read_bytes().strip(), url_path
paths_file.write_text(json.dumps(paths))
PY
echo 'PASS: all five wrapper probes resolve to tracked, readable repository public assets'

# Use a real pull/checkout, rather than asserting that a command contains
# "umask 022". Newly tracked files start out absent from the remote repo.
git init -q -b main "$TMP_DIR/origin"
git -C "$TMP_DIR/origin" config user.name "Deployment wrapper test"
git -C "$TMP_DIR/origin" config user.email "deploy-test@example.invalid"
printf '.env\nserver/runtime/\n' > "$TMP_DIR/origin/.gitignore"
git -C "$TMP_DIR/origin" add .gitignore
git -C "$TMP_DIR/origin" -c commit.gpgsign=false -c core.hooksPath=/dev/null commit -qm initial
git clone -q "$TMP_DIR/origin" "$REMOTE_REPO"
mkdir -p "$TMP_DIR/origin/server/static/js" "$TMP_DIR/origin/server/static/css" "$TMP_DIR/origin/shared"
printf 'window.adminLoaded = true;\n' > "$TMP_DIR/origin/server/static/js/admin.bundle.js"
printf 'body { display: block; }\n' > "$TMP_DIR/origin/server/static/css/style.css"
printf ':root { --test-token: 1; }\n' > "$TMP_DIR/origin/shared/tokens.css"
printf '.viewer { display: block; }\n' > "$TMP_DIR/origin/server/static/css/viewer-base.css"
ln -s ../../../shared/tokens.css "$TMP_DIR/origin/server/static/css/tokens.css"
printf 'window.renderConfirmation = true;\n' > "$TMP_DIR/origin/server/static/js/overlay-render-confirmation.js"
git -C "$TMP_DIR/origin" add server shared
git -C "$TMP_DIR/origin" -c commit.gpgsign=false -c core.hooksPath=/dev/null commit -qm public-assets
(
  umask 077
  mkdir -p "$REMOTE_REPO/server/runtime"
  printf 'isolated-env-secret\n' > "$REMOTE_REPO/.env"
  printf 'isolated-runtime-secret\n' > "$REMOTE_REPO/server/runtime/secret"
)
printf '{}\n' > "$TMP_DIR/asset-state"

cat > "$TMP_DIR/http-fixture.py" <<'PY'
import json
import pathlib
import sys
from http.server import BaseHTTPRequestHandler, HTTPServer

root, state_file, port_file, request_log = map(pathlib.Path, sys.argv[1:])

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        with request_log.open("a") as log:
            log.write(self.path + "\n")
        state = json.loads(state_file.read_text())
        status = 200
        if self.path == "/health":
            body = b'{"service":"danmu-server","status":"healthy"}'
        else:
            target = root / "server" / self.path.lstrip("/")
            if not target.is_file():
                status, body = 404, b"missing"
            elif not target.stat().st_mode & 0o004:
                # Model the container UID reading another host UID's file.
                status, body = 500, b"public asset is not readable by container UID"
            else:
                body = target.read_bytes()
            if state.get("path") == self.path:
                status = state.get("status", 200)
                if state.get("empty"):
                    body = b""
        self.send_response(status)
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, *args):
        pass

server = HTTPServer(("127.0.0.1", 0), Handler)
port_file.write_text(str(server.server_port))
server.serve_forever()
PY
"$TEST_PYTHON" "$TMP_DIR/http-fixture.py" "$REMOTE_REPO" "$TMP_DIR/asset-state" "$TMP_DIR/port" "$TMP_DIR/requests" > "$TMP_DIR/http.log" 2>&1 &
SERVER_PID=$!
for attempt in {1..50}; do
  if [[ -s "$TMP_DIR/port" ]]; then break; fi
  sleep 0.05
done
if [[ ! -s "$TMP_DIR/port" ]]; then
  cat "$TMP_DIR/http.log" >&2
  exit 1
fi
TEST_HTTP_ORIGIN="http://127.0.0.1:$(cat "$TMP_DIR/port")"

cat > "$TMP_DIR/docker-python.py" <<'PY'
import os
import sys
import urllib.request

# Execute the wrapper's actual probe against a local HTTP fixture. Only
# translate the container-local address; HTTP status/body handling is real.
original_urlopen = urllib.request.urlopen
def urlopen(url, *args, **kwargs):
    return original_urlopen(url.replace("http://127.0.0.1:8080", os.environ["TEST_HTTP_ORIGIN"], 1), *args, **kwargs)
urllib.request.urlopen = urlopen
exec(sys.argv[1])
PY
cat > "$TMP_DIR/bin/ssh" <<'SH'
#!/usr/bin/env bash
exec bash -c "${*: -1}"
SH
cat > "$TMP_DIR/bin/docker" <<'SH'
#!/usr/bin/env bash
set -euo pipefail
case "$1" in
  compose) echo 'danmu-fire server Up (healthy)' ;;
  inspect) echo healthy ;;
  exec)
    # No --user override: the production probe must inherit the container UID.
    [[ "$#" -eq 5 && "$2" == danmu-fire && "$3" == python && "$4" == -c ]]
    exec "$TEST_PYTHON" "$TEST_DOCKER_PYTHON" "$5"
    ;;
  *) echo "unexpected docker invocation: $*" >&2; exit 9 ;;
esac
SH
cat > "$TMP_DIR/bin/curl" <<'SH'
#!/usr/bin/env bash
set -euo pipefail
url="${*: -1}"
if [[ "$TEST_HEALTH_SOURCE" == public && "$url" == https://health.example.test/health ]]; then
  "$REAL_CURL" -sf "$TEST_HTTP_ORIGIN/health"
  echo ' source=public'
elif [[ "$TEST_HEALTH_SOURCE" == http && "$url" == http://127.0.0.1:4000/health ]]; then
  exec "$REAL_CURL" -sf "$TEST_HTTP_ORIGIN/health"
else
  exit 22
fi
SH
chmod +x "$TMP_DIR/bin/ssh" "$TMP_DIR/bin/docker" "$TMP_DIR/bin/curl"

export PATH="$TMP_DIR/bin:$PATH"
export TEST_PYTHON REAL_CURL TEST_HTTP_ORIGIN
export TEST_DOCKER_PYTHON="$TMP_DIR/docker-python.py"
export DANMU_VPS_HOST=fake-e2 DANMU_VPS_PROJECT="$REMOTE_REPO"
unset DANMU_VPS_KEY

run_verify() {
  local expected="$1"
  if output="$(umask 077; "$ROOT_DIR/scripts/deploy-vps.sh" --branch main --no-build --no-restart --verify 2>&1)"; then
    status=0
  else
    status=$?
  fi
  if [[ "$expected" == success ]]; then
    if [[ "$status" -ne 0 ]]; then printf '%s\n' "$output" >&2; exit "$status"; fi
    grep -q 'Public asset verification passed: 5 assets' <<< "$output"
    grep -q 'Deploy finished' <<< "$output"
  else
    if [[ "$status" -eq 0 ]]; then printf 'Expected verification failure:\n%s\n' "$output" >&2; exit 1; fi
    grep -q 'Public asset verification failed' <<< "$output"
    ! grep -q 'Deploy finished' <<< "$output"
  fi
  grep -q 'Healthcheck passed' <<< "$output"
  ! grep -q 'unbound variable' <<< "$output"
}

export TEST_HEALTH_SOURCE=public DANMU_PUBLIC_URL=https://health.example.test
run_verify success
grep -q 'source=public' <<< "$output"
"$TEST_PYTHON" - "$REMOTE_REPO" "$TMP_DIR/requests" "$TMP_DIR/probe-paths.json" <<'PY'
import json
import pathlib
import stat
import sys

root, request_log, paths_file = map(pathlib.Path, sys.argv[1:])
paths = json.loads(paths_file.read_text())
requests = request_log.read_text().splitlines()
for url_path in paths:
    asset = root / "server" / url_path.lstrip("/")
    assert stat.S_IMODE(asset.stat().st_mode) == 0o644, url_path
    assert asset.read_bytes(), url_path
    assert url_path in requests, url_path
for path in ["server/static", "server/static/css", "server/static/js", "shared"]:
    assert stat.S_IMODE((root / path).stat().st_mode) == 0o755, path
for path, mode in [(".env", 0o600), ("server/runtime/secret", 0o600), ("server/runtime", 0o700)]:
    assert stat.S_IMODE((root / path).stat().st_mode) == mode, path
assert (root / ".env").read_text() == "isolated-env-secret\n"
assert (root / "server/runtime/secret").read_text() == "isolated-runtime-secret\n"
PY
echo 'PASS: real checkout under inherited umask 077 serves all five public assets; secret permissions stay private'

unset DANMU_PUBLIC_URL
export TEST_HEALTH_SOURCE=docker
run_verify success
grep -q '"source":"docker"' <<< "$output"
echo 'PASS: Docker health fallback plus readable public assets succeeds'

export TEST_HEALTH_SOURCE=http
for code in 500 403 404; do
  printf '{"path":"/static/css/style.css","status":%s}\n' "$code" > "$TMP_DIR/asset-state"
  run_verify failure
  echo "PASS: health HTTP 200 plus asset HTTP $code fails deployment verification"
done
printf '{"path":"/static/css/style.css","empty":true}\n' > "$TMP_DIR/asset-state"
run_verify failure
echo 'PASS: health HTTP 200 plus empty asset HTTP 200 fails deployment verification'
