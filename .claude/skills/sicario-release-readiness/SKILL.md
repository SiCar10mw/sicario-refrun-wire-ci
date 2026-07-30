---
name: sicario-release-readiness
description: Check SicarioSpec version, changelog, immutable tag, artifact classification, and release evidence before publishing.
---

# SicarioSpec Release Readiness

Use this skill before tagging or publishing a release.

1. Confirm version metadata is synchronized across package metadata, CLI
   version, presets, extensions, and control maps.
2. Confirm `CHANGELOG.md` describes the release.
3. Confirm release artifacts are classified for public release and contain no
   secrets, private evidence, tenant identifiers, customer data, or unpublished
   vulnerability details.
4. Confirm release workflow, tests, verifier, artifact upload, and provenance or
   attestation evidence are green.
5. Do not move, delete, or rewrite a published tag. Ship a new patch release
   instead.
