# Data Classification

Use the highest applicable classification for each feature, dataset, evidence
artifact, log stream, model prompt, model output, queue message, and generated
document.

## Levels

| Level | Description | Examples | Minimum Handling |
|---|---|---|---|
| Public | Approved for public release | docs, public examples | Source review before publication |
| Internal | Internal project or operational data | backlog notes, internal diagrams | Repository access controls |
| Confidential | Business, customer, or security-sensitive data | customer config, private architecture | Need-to-know access and redaction |
| Restricted | Highly sensitive security, credential, or regulated data | secrets, tokens, vuln details | Do not commit; approved secure storage only |
| Regulated | Data under legal, contractual, or audit scope | PII, PHI, PCI, SOX evidence | Control mapping, retention, and reviewer approval |

## Register

| Asset / Flow | Owner | Classification | Regulated Data | Retention | Residency | Sharing / Egress | Redaction | Evidence |
|---|---|---|---|---|---|---|---|---|
| Initial project artifacts | Maintainers | Internal | none | Per release | N/A | Repository collaborators | Secrets redacted | generated/sicario/gate-summary.json |

## Rules

- Classification must be explicit before data storage, logging, telemetry,
  training/evaluation, external sharing, or release packaging.
- Restricted data and secrets must not enter git, logs, generated artifacts, or
  LLM context.
- Evidence that contains customer, tenant, vulnerability, credential, or audit
  details must carry the same or higher classification as the source data.
