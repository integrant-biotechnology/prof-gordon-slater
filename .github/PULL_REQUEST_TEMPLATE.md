## Summary

<!-- 1–3 bullets describing what changed and why. Reference any plan/audit/issue. -->

## What does NOT land

<!-- Things deliberately out of scope. Helps reviewer narrow the diff lens. -->

## Verified

- [ ] `npm run lint:tsc` — clean
- [ ] `npm run lint` — clean
- [ ] `npm run build` — clean
- [ ] `npm run preview` smoke-tested locally (or note why not)

## Bundle delta

<!-- Required for changes that touch components, routes, or data modules. -->

| Chunk | Before | After | Δ |
|---|---|---|---|
| main JS | KB / gz KB | KB / gz KB | |
| (other affected chunks) | | | |

## Test plan

- [ ] (route-specific click-through — what to visit + what to verify)
- [ ] (reduced-motion / keyboard / mobile checks where relevant)

## Notes for the reviewer

<!-- Anything surprising in the diff, decisions worth flagging, follow-ups deferred. -->
