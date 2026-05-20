# Windows UI / Overlay Smoke Checklist

Use this checklist on a Windows host after the `v5.3.1` portable executable is
available from GitHub Releases. The goal is to confirm the Windows package stays
portable-only and that the desktop UI plus overlay behavior match the finalized
desktop/viewer contract.

## Package

- Download the Windows x64 portable `.exe` from the latest release.
- Confirm there is no NSIS installer artifact in the release.
- Launch the executable directly from a normal user directory.
- Confirm no installer wizard, installation directory prompt, Start Menu setup,
  or uninstall flow appears.

## Desktop UI

- Confirm first launch does not show a setup wizard.
- Confirm About title/product text is `Danmu Desktop`.
- Confirm the tray menu includes:
  - `偏好設定...`
  - `關於 Danmu Desktop`
  - `結束`
- Confirm `偏好設定...` opens the same preferences window as the main open action.
- Confirm the Connection tab exposes the server URL/token flow without legacy
  desktop concepts.

## Overlay

- Open the overlay from the desktop UI.
- Confirm the overlay appears on the primary display.
- Confirm transparent background and always-on-top behavior.
- Confirm click-through behavior does not block normal desktop/window clicks.
- If a second display is available, move/reopen the overlay and confirm it still
  renders without clipping or stale bounds.

## Viewer / Runtime

- Start a local or remote server with the current viewer.
- Connect the desktop client to the server WebSocket endpoint.
- Send a normal danmu message and confirm it appears in the overlay.
- Send a message with nickname/theme data and confirm viewer styling is applied.
- Trigger one effect message and confirm the overlay renders the effect.
- Disconnect and reconnect once; confirm status and overlay recovery are correct.

## Evidence To Record

- Windows version and display scale.
- Release tag and asset filename.
- Screenshot of About.
- Screenshot or short clip of overlay rendering a message.
- Any logs or console output if launch/update/connect fails.
