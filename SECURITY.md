# Security policy

## Reporting a vulnerability

If you discover a security issue with **profgordonslater.com.au**, please report it
privately rather than opening a public issue.

**Contact:** `marketing@drgordonslater.com.au`

Please include:

- A description of the issue and the impact you observed
- Steps to reproduce
- Any proof-of-concept or exploit code
- Your name / affiliation if you'd like to be credited (optional)

We aim to acknowledge reports within **3 business days** and to provide a follow-up
status within **14 business days**. Coordinated disclosure is appreciated.

## Scope

This policy covers the static SPA hosted at <https://profgordonslater.com.au> and the
source code in this repository. It **does not** cover the practice site at
<https://orthopaedic-surgeon.com.au/>, which is operated separately.

## Out of scope

- Reports based on missing security headers when the site is fronted by a CDN/proxy
  that does not preserve them (the Vercel deployment carries the headers in
  [`vercel.json`](vercel.json))
- Reports on dependencies' own vulnerabilities — please file those upstream and link
  here if relevant
- Denial-of-service findings; the site is static and protected by Vercel's edge
- Self-XSS, social-engineering, and findings requiring physical access

## Supported versions

The site deploys from `main`. Only the currently deployed commit is supported.
Historical commits are not patched.
