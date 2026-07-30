---
name: sicario-verify
description: Run and interpret SicarioSpec verification gates before handoff, pull request, release, or when governance files change.
---

# SicarioSpec Verify

Use this skill when a change needs deterministic SicarioSpec validation.

1. Inspect the working tree and identify changed specs, plans, tasks, docs,
   workflows, release files, cloud/IaC files, and agent instructions.
2. Run the best available verifier:
   - `sicario verify .`
   - or `python3 -m sicario_cli.cli verify .`
3. If verification fails, summarize each finding by severity, code, path, and
   required remediation.
4. If verification passes, report the command and result.
5. Do not claim security or compliance approval from a passing verifier alone;
   human review is still required for high-impact changes.
