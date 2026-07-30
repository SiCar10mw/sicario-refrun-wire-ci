# Claude Project Instructions

Use SicarioSpec guardrails for all non-trivial changes.

- Start with the spec.
- Keep AI out of authoritative decisions.
- Add threat model and abuse cases for meaningful features.
- Add well-architected review for meaningful features.
- Add negative/security tests when risk applies.
- Run `sicario verify` before handoff.
- Keep security exceptions owned, approved, time-bound, and evidenced.
- Keep data classification and tags current for specs, evidence, resources, and releases.
- Do not place secrets in files, logs, artifacts, or LLM context.
