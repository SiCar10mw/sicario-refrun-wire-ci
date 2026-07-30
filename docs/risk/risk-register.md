# Risk Register

Track material security, privacy, compliance, operational, and AI/fleet risks.

| Risk ID | Status | Risk | Owner | Severity | Treatment | Evidence |
|---|---|---|---|---|---|---|
| RISK-001 | open | Bootstrap overwrites uncommitted user changes | Maintainers | Medium | Mitigated: dry-run, backups, --force guard | generated/sicario/gate-summary.json |
| RISK-002 | open | AI spec omits prompt-injection guardrails | Maintainers | High | Mitigated: verify rejects AI specs without guardrails | generated/sicario/gate-summary.json |
| RISK-003 | open | Hardcoded credentials shipped in governed repo | Maintainers | Critical | Mitigated: secret scan in verify gate | generated/sicario/gate-summary.json |
