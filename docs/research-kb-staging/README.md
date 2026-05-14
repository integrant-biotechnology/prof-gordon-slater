# Research-KB staging

A holding pen for research-KB artefacts that **aren't ready for the public website**.
Contents here are not built into the site (the build only reads from `public/` and
`src/`), so anything in this folder is safe-to-keep but invisible to visitors.

## What lives here

Drafts, scratch notes, KB index records with `[GAP]` fields, source-document
placeholders, and anything else that has been admitted to a research knowledge
base but hasn't yet been:

1. **Verified for content completeness** — every `[GAP]` filled in, every
   `[INACCESSIBLE]` resolved
2. **Reviewed for compliance** — anchored on `docs/voice-source-v0_1.md`, no
   walled / pre-IPO / investor-restricted material
3. **Tier-assigned** — i.e. is it a peer-reviewed paper for `SELECTED_PUBLICATIONS`,
   a conference abstract for a future "Conference work" surface, an internal
   memo that should never ship, etc.

Once an artefact clears those three gates, the relevant fields move into
`src/constants.ts` (the canonical content source) and the staged file is
either deleted or archived under `docs/`.

## Why not in `public/`

`public/*` is served at the URL root in production. A `/undated-slater-foo.md`
file accidentally in `public/` ships on every preview deploy and is
publicly accessible — which is the wrong default for unfinished research
material that may contain internal tooling references.

## Recovery

If you arrived here from a KB record with a `Recovery:` note that references
a script under `03_deliverables/memos/recover_*.sh`, run that script on the
macOS host filesystem (it uses `python-docx` to bypass sandbox FUSE locks
that block direct reads from sandboxed environments). Output replaces the
placeholder body here.
