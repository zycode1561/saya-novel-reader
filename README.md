# 沙耶的云端书库

Private Sites companion for the local Codex novel reader. This deployment is a **single-owner library**. Keep the Site owner-private: the local bridge uses Sites service access and shares this one library with the signed-in owner. Do not widen audience without first adding per-user storage authorization.

## Features

- Original TXT, Markdown, EPUB uploads up to 50 MB, addressed and verified by SHA-256.
- R2 stores original bytes; D1 stores the catalog and progress/bookmarks.
- Shared reader bundle from `../codex-novel-reader`, preserving chapter and paragraph parsing.
- IndexedDB caches opened originals and reader data; service worker caches only the reader shell. API data is never put in the HTTP cache. Offline copies remain on the device.
- Durable client progress journal, optimistic revision checks, explicit conflict choices, idempotent operation IDs.
- Quiet cloud status in the toolbar: optional sync details and retry, delayed activity animation, offline indicator, and explicit conflict resolution without resizing the reading area. Progress sends after one second of inactivity or within five seconds during continuous reading; leaving the page triggers a best-effort flush backed by the durable journal.
- Device-local navigation pinning in reading settings, enabled by default on phone-size viewports. Keeps the top navigation and bottom chapter display visible; turning it off restores center-tap immersive reading.
- Cloud books appear by their latest upload or reading time across devices, so a newly uploaded book goes first until another book is read more recently. Actual reader visits update a separate timestamp; existing saved positions provide a fallback for older books. Offline reading timestamps are queued for the next connection.
- Uploads show measured byte progress, server-save confirmation, per-file outcomes and retry controls. The upload queue survives in-site navigation; refresh/close still interrupts unfinished work and requires files to be reselected.
- Local bridge keeps its Site service token in a mode-0600 configuration outside source/browser bundles. Browser requests use same-origin routes only.

## Development

Run the Sites dependency installer, `npm run db:generate` for new schema changes, and the Sites build helper. Apply generated migrations to local D1 before `npm run dev`. Do not replay existing migrations. The local preview simulates sign-in; production authentication is enforced by Sites.

To refresh the reader bundle: build the sibling reader and run its `.code/build-cloud-reader.mjs`. Then rebuild this Site. Do not edit generated public/reader/reader.js directly.

API integration check: `node .code/api-check.mjs` against the local preview. It uses a synthetic TXT only. Reader sync unit tests live in the sibling reader `tests/cloud-sync.test.ts`.

## Device setup

Open the deployed URL on the phone and sign in with the owning ChatGPT account. Open each book online once to cache it for offline reading. Upload is explicit; no automatic scanning or upload of local books. Older local entries need their original file reselected for first upload. Reader display preferences remain device-local.

Keep the cloud server and local reader's parser versions aligned when changing parsing. This first release does not synchronize with third-party novel app accounts, delete cloud books, or offer shared libraries.
