# 沙耶的云端书库

Private Sites companion for the local Codex novel reader. This deployment is a **single-owner library**. Keep the Site owner-private: the local bridge uses Sites service access and shares this one library with the signed-in owner. Do not widen audience without first adding per-user storage authorization.

## Features

- Original TXT, Markdown, EPUB uploads up to 50 MB, addressed and verified by SHA-256.
- R2 stores original bytes; D1 stores the catalog and reading progress, with legacy bookmark data retained for sync compatibility.
- Toolbar separates the library (cloud files and local import), chapter directory, online source search, in-book search and settings. The globe opens online search; the library icon owns uploaded cloud data.
- The library uses a compact study header, a continue-reading card based on actual reading activity, and responsive typography covers. The page retains the existing light/dark backgrounds. File-name acquisition suffixes are hidden only in display titles; the per-book details keep the full original file name and download. Reopening the active book preserves its current reading position.
- Online search, TOCs, chapter content and source management run on this Site without a desktop bridge. Source settings use D1 with revision checks; temporary search results, reading sessions and rule-test handles use D1 metadata and R2 payloads so requests can run on different Workers.
- Online search uses a reading-room layout with the existing page background: a unified search field, enabled-source hint, initial/loading empty states, and collapsible third-party usage notes with visible attribution links.
- Adding a search result to the cloud library fetches chapters on the current page, shows progress/cancellation, validates the 50 MB limit and uploads the assembled TXT through the existing SHA-256 file route. Keep that page open while fetching; leaving cancels unfinished work.
- Shared reader bundle from `../codex-novel-reader`, preserving chapter and paragraph parsing.
- IndexedDB caches opened originals and reader data; service worker caches only the reader shell. API data is never put in the HTTP cache. Offline copies remain on the device.
- Durable client progress journal, optimistic revision checks, explicit conflict choices, idempotent operation IDs.
- Quiet cloud status appears only while reading, including immersive mode, in the lower-left corner. Library, search, TOC and settings views hide the icon and details while background progress sync continues: a green check inside the cloud confirms synchronization, arrows show pending/syncing work, and an alert marks offline/conflict states. Click for sync details, retry, and explicit conflict resolution without resizing the reading area. Progress sends after one second of inactivity or within five seconds during continuous reading; leaving the page triggers a best-effort flush backed by the durable journal.
- The corner cloud and its details move above the chapter footer when it is visible, and return to the bottom-left when it is hidden, following the page counter's available reading area.
- Device-local navigation pinning in reading settings, enabled by default on phone-size viewports. Keeps the top navigation and bottom chapter display visible; turning it off restores center-tap immersive reading.
- File/cloud books pre-paginate the previous, current, and next two chapters in one bounded native scroll track. Crossing a chapter boundary advances one page without replacing the article. Settled progress records the visible paragraph directly; rapid reverse gestures continue from their logical target rather than a temporary chapter-start position. Reflow retains a semantic text anchor. Online-only chapter loads retain their loading transition.
- Compact chapter openings show only the chapter title at 1.15× body size, with 18px before the text. Duplicate chapter counts and decorative rules are removed; long titles wrap naturally and paged titles appear only on their chapter's first page.
- Website controls omit native full screen. Search fields use 16px text on touch/narrow screens to avoid mobile focus zoom, while preserving manual zoom.
- Cloud books appear by their latest upload or reading time across devices, so a newly uploaded book goes first until another book is read more recently. Actual reader visits update a separate timestamp; existing saved positions provide a fallback for older books. Offline reading timestamps are queued for the next connection.
- Uploads show measured byte progress, server-save confirmation, per-file outcomes and retry controls. The upload queue survives in-site navigation; refresh/close still interrupts unfinished work and requires files to be reselected.
- Local bridge keeps its Site service token in a mode-0600 configuration outside source/browser bundles. Browser requests use same-origin routes only.

## Development

Run the Sites dependency installer, `npm run db:generate` for new schema changes, and the Sites build helper. Apply generated migrations to local D1 before `npm run dev`. Do not replay existing migrations. The local preview simulates sign-in; production authentication is enforced by Sites.

To refresh the reader bundle: build the sibling reader and run its `.code/build-cloud-reader.mjs`. For online engine changes, also run `node .code/build-cloud-online.mjs` in the sibling reader. Then rebuild this Site. Do not edit generated public/reader/reader.js directly.

API integration check: `node .code/api-check.mjs` against the local preview. It uses a synthetic TXT only. Reader sync unit tests live in the sibling reader `tests/cloud-sync.test.ts`.

## Device setup

Open the deployed URL on the phone and sign in with the owning ChatGPT account. Open each book online once to cache it for offline reading. Upload is explicit; no automatic scanning or upload of local books. Older local entries need their original file reselected for first upload. Reader display preferences remain device-local.

Keep the cloud server and local reader's parser versions aligned when changing parsing. This first release does not synchronize with third-party novel app accounts, delete cloud books, or offer shared libraries.

Online route integration tests: `../codex-novel-reader/node_modules/.bin/vitest run --config .code/online-tests.config.ts`. They use an in-memory database and synthetic source responses; they do not touch the live library.
