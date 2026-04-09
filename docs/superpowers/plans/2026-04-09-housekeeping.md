# Housekeeping Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the design tokens duplicate with a symlink (single source of truth) and document remaining undocumented env vars in `.env.example`.

**Architecture:** Two independent file-system changes. No new dependencies, no code logic changes. The existing CI `diff` check continues to work unchanged after the symlink.

**Tech Stack:** Git symlink, Makefile, Markdown

---

## File Map

| Action | Path |
|--------|------|
| Delete + replace with symlink | `server/static/css/tokens.css` |
| Modify | `Makefile` — `copy-tokens` target: `cp` → `ln -sf` |
| Modify | `.env.example` — add advanced data-path config keys |

---

### Task 1: Replace tokens.css with a symlink

**Files:**
- Modify: `server/static/css/tokens.css` (delete file, create symlink)
- Modify: `Makefile:91-92`

- [ ] **Step 1: Replace the file with a symlink**

```bash
cd server/static/css
rm tokens.css
ln -sf ../../../shared/tokens.css tokens.css
cd ../../..
```

- [ ] **Step 2: Verify symlink resolves correctly**

```bash
python3 -c "import os; print(os.path.realpath('server/static/css/tokens.css'))"
```

Expected output ends with `shared/tokens.css`.

```bash
diff shared/tokens.css server/static/css/tokens.css
```

Expected: no output, exit code 0.

- [ ] **Step 3: Update Makefile copy-tokens target**

In `Makefile`, replace line 92:

**Before:**
```makefile
copy-tokens: ## 將共用 design tokens 複製到 server static 目錄
	cp shared/tokens.css server/static/css/tokens.css
```

**After:**
```makefile
copy-tokens: ## 重建 server static tokens.css symlink 指向 shared/tokens.css
	ln -sf ../../../shared/tokens.css server/static/css/tokens.css
```

- [ ] **Step 4: Run tests to verify nothing broke**

```bash
make test 2>&1 | tail -5
```

Expected: `1 failed` (pre-existing overlay browser test), all other tests pass.

- [ ] **Step 5: Commit**

```bash
git add server/static/css/tokens.css Makefile
git commit -m "refactor(tokens): replace duplicate tokens.css with symlink to shared/"
```

---

### Task 2: Document advanced env vars in .env.example

**Files:**
- Modify: `.env.example`

The following env vars in `server/config.py` are not yet documented:

| Key | Default | Purpose |
|-----|---------|---------|
| `SCHEDULER_MAX_JOBS` | `20` | Max scheduled jobs stored |
| `FILTER_RULES_PATH` | `{tmp}/danmu_filter_rules.json` | Filter rules persistence path |
| `WEBHOOKS_PATH` | `{tmp}/danmu_webhooks.json` | Webhook config persistence path |
| `SOUNDS_DIR` | `server/sounds/` | Directory for uploaded sounds |
| `PLUGINS_DIR` | `server/plugins/` | Directory for plugins |
| `EMOJI_DIR` | `server/emojis/` | Directory for custom emojis |

- [ ] **Step 1: Append advanced data-path section to .env.example**

Add the following block at the end of `.env.example` (after the existing `# Server image` comment block):

```
# Advanced — data paths (defaults work for most deployments)
# SCHEDULER_MAX_JOBS=20        # Max stored scheduled jobs
# FILTER_RULES_PATH=           # Custom path for filter rules JSON
# WEBHOOKS_PATH=               # Custom path for webhooks JSON
# SOUNDS_DIR=                  # Custom directory for uploaded sounds
# PLUGINS_DIR=                 # Custom directory for plugins
# EMOJI_DIR=                   # Custom directory for custom emojis
```

- [ ] **Step 2: Verify no trailing newline issues**

```bash
python3 -c "
with open('.env.example', 'rb') as f:
    content = f.read()
assert content.endswith(b'\n'), 'Missing trailing newline'
print('OK')
"
```

Expected: `OK`

- [ ] **Step 3: Commit**

```bash
git add .env.example
git commit -m "docs: document advanced data-path env vars in .env.example"
```
