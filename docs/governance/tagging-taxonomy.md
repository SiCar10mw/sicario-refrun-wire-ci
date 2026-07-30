# Tagging Taxonomy

Use stable tags so data handling, ownership, cost, evidence, risk, and exception
decisions can be found and enforced.

## Required Tags

| Tag | Required For | Accepted Values / Format | Purpose |
|---|---|---|---|
| owner | all artifacts/resources | team or person handle | accountability |
| system | all artifacts/resources | system or repo slug | grouping |
| environment | runtime resources/evidence | dev, test, staging, prod, shared, local | blast-radius context |
| data-classification | data, resources, evidence | public, internal, confidential, restricted, regulated | handling requirements |
| retention | data/evidence/logs | duration or policy name | deletion expectations |
| compliance-scope | scoped artifacts | none, sox, ccm, soc2, fedramp, bsi-c5, pci, hipaa, gdpr, ai-rmf, other | control mapping |
| cost-center | cloud/resources | org-approved value | cost accountability |
| source-repo | generated/runtime artifacts | owner/repo | traceability |
| managed-by | runtime resources | terraform, bicep, cloudformation, kubernetes, manual | drift ownership |
| expires-on | temporary resources/exceptions | YYYY-MM-DD or N/A | cleanup discipline |
| feature-id | feature evidence | specs/NNN-name | feature traceability |
| control-id | control evidence | framework control ID or N/A | audit traceability |
| risk-id | risk evidence | risk register ID or N/A | risk traceability |
| exception-id | exceptions | exception register ID or N/A | exception traceability |

## Discipline

- Do not invent one-off tag keys when an approved key exists.
- Temporary resources and exceptions require `expires-on`.
- Findings and evidence should carry `feature-id`, `control-id`, `risk-id`, or
  `exception-id` when applicable.
- Public examples must not contain real customer, tenant, credential, or private
  infrastructure values.
