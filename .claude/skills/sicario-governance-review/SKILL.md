---
name: sicario-governance-review
description: Review a change for SicarioSpec security, data classification, tagging, evidence, risk, and approval gaps.
---

# SicarioSpec Governance Review

Use this skill before pull request handoff or when reviewing an AI-authored
change.

Check:

- Threat model and abuse cases are present and current.
- Data classification covers inputs, outputs, logs, evidence, artifacts, and
  release assets.
- Tagging discipline covers owner, system, environment, data classification,
  retention, evidence, risk, and exception records.
- Security exceptions are owned, approved, time-bound, and evidenced.
- AI/agent/tool-use changes include prompt injection, tool boundary, eval,
  memory, and human approval controls.
- Workflow/agent-fleet changes include retry, idempotency, dead-letter,
  observability, kill switch, and approval boundaries.
- PR summary includes verification commands and security/governance impact.
