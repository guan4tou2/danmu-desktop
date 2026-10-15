"""Password changes survive container replacement in the runtime volume."""

import stat

import pytest

from server import config


@pytest.fixture()
def hash_paths(tmp_path, monkeypatch):
    persisted = tmp_path / "runtime" / "admin_password.hash"
    legacy = tmp_path / "source" / ".admin_password.hash"
    monkeypatch.setattr(config, "_HASH_FILE", persisted)
    monkeypatch.setattr(config, "_LEGACY_HASH_FILE", legacy)
    return persisted, legacy


def test_default_hash_location_is_inside_the_compose_runtime_volume():
    from pathlib import Path

    root = Path(__file__).resolve().parents[2]
    source = (root / "server/config.py").read_text()
    compose = (root / "docker-compose.yml").read_text()
    assert 'Path(__file__).parent / "runtime" / "admin_password.hash"' in source
    assert "./server/runtime:/app/server/runtime" in compose


def test_missing_password_files_allow_environment_fallback(hash_paths):
    assert config.load_runtime_hash() == ""


def test_legacy_password_is_migrated_atomically_with_private_permissions(hash_paths):
    persisted, legacy = hash_paths
    legacy.parent.mkdir()
    legacy.write_text("legacy-bcrypt-hash\n")
    assert config.load_runtime_hash() == "legacy-bcrypt-hash"
    assert persisted.read_text() == "legacy-bcrypt-hash"
    assert stat.S_IMODE(persisted.stat().st_mode) == 0o600
    legacy.unlink()
    assert config.load_runtime_hash() == "legacy-bcrypt-hash"


def test_persisted_password_takes_priority_over_old_source_file(hash_paths):
    persisted, legacy = hash_paths
    legacy.parent.mkdir()
    legacy.write_text("obsolete-hash")
    config.save_runtime_hash("current-hash")
    assert config.load_runtime_hash() == "current-hash"
    assert persisted.read_text() == "current-hash"


def test_atomic_save_failure_preserves_previous_credentials_and_cleans_temporary_file(
    hash_paths, monkeypatch
):
    persisted, _ = hash_paths
    config.save_runtime_hash("previous-hash")

    def fail_replace(source, destination):
        assert stat.S_IMODE(source.stat().st_mode) == 0o600
        raise OSError("simulated disk replacement failure")

    # os.replace receives the temporary filename as a string.
    from pathlib import Path

    with monkeypatch.context() as patch:
        patch.setattr(
            config.os,
            "replace",
            lambda source, destination: fail_replace(Path(source), destination),
        )
        with pytest.raises(OSError, match="replacement failure"):
            config.save_runtime_hash("new-hash")
    assert config.load_runtime_hash() == "previous-hash"
    assert sorted(p.name for p in persisted.parent.iterdir()) == [persisted.name]


def test_empty_persisted_file_does_not_revive_environment_or_legacy_password(hash_paths):
    persisted, legacy = hash_paths
    persisted.parent.mkdir()
    persisted.write_text("")
    legacy.parent.mkdir()
    legacy.write_text("obsolete-hash")
    with pytest.raises(ValueError, match="Persisted admin password hash is empty"):
        config.load_runtime_hash()


def test_empty_new_hash_is_rejected_without_touching_live_file(hash_paths):
    config.save_runtime_hash("previous-hash")
    with pytest.raises(ValueError, match="must not be empty"):
        config.save_runtime_hash("  ")
    assert config.load_runtime_hash() == "previous-hash"
