# Threat Model

Status: draft

## Scope

Document the feature, system, or repository being assessed.

## Trust Boundaries

- Boundary 1: user input to application logic
- Boundary 2: application logic to external systems
- Boundary 3: generated/model output to tools or file writes

## Threats

| Threat | Impact | Control | Status |
|---|---|---|---|
| Prompt injection or unsafe generated output | High | Validate and sanitize before tool use | Planned |
| Broken access control | High | Explicit authorization checks and tests | Planned |
| Secret exposure | Critical | Secret scanning and runtime secret isolation | Planned |

## Approval Boundaries

High-impact writes, production changes, releases, and security exceptions require
human approval.
