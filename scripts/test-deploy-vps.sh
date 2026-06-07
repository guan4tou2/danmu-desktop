#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

cat >"$TMP_DIR/git" <<'SH'
#!/usr/bin/env bash
if [[ "$1 $2" == "branch --show-current" ]]; then
  echo main
  exit 0
fi
exit 0
SH
chmod +x "$TMP_DIR/git"

cat >"$TMP_DIR/ssh" <<'SH'
#!/usr/bin/env bash
remote_cmd="${*: -1}"

case "$remote_cmd" in
  *"git pull origin main"*)
    echo "NAME         IMAGE                COMMAND            SERVICE   STATUS"
    echo "danmu-fire   danmu-server:local   \"/entrypoint.sh\"   server    Up (healthy)"
    ;;
  *"https://health.example.test/health"*)
    echo '{"service":"danmu-server","status":"healthy","source":"public"}'
    ;;
  *"docker inspect --format"*)
    echo '{"service":"danmu-server","status":"healthy","source":"docker"}'
    ;;
  *"127.0.0.1:4000/health"*)
    echo "FAIL"
    ;;
  *)
    echo "unexpected ssh command: $remote_cmd" >&2
    exit 9
    ;;
esac
SH
chmod +x "$TMP_DIR/ssh"

export PATH="$TMP_DIR:$PATH"
export DANMU_VPS_HOST="fake-e2"
export DANMU_VPS_PROJECT="/srv/danmu"
unset DANMU_VPS_KEY

run_verify() {
  set +e
  output="$("$ROOT_DIR/scripts/deploy-vps.sh" --branch main --no-build --no-restart --verify 2>&1)"
  status=$?
  set -e

  if [[ "$status" -ne 0 ]]; then
    printf '%s\n' "$output" >&2
    exit "$status"
  fi

  grep -q "Healthcheck passed" <<<"$output"
  grep -qv "unbound variable" <<<"$output"
}

export DANMU_PUBLIC_URL="https://health.example.test"
run_verify
grep -q '"source":"public"' <<<"$output"

unset DANMU_PUBLIC_URL
run_verify
grep -q '"source":"docker"' <<<"$output"
