---
title: Core
description: Shared BMAD Avanade agents and workflows useful in every scenario — internal and external.
sidebar:
  order: 2
---

import { Badge, LinkButton } from '@astrojs/starlight/components';

<Badge text="Stable" variant="success" /> &nbsp; <Badge text="BMAD Module" variant="note" />

The **Core** module (`bmad-avanade-core`) provides the shared agents and workflows that are useful for every BMAD Avanade scenario — both internal and external. It is the foundation other modules build on.

<LinkButton href="https://github.com/Avanade-Region-Netherlands/bmad-avanade-core" icon="github" variant="primary" target="_blank">View on GitHub (Avanade employees only)</LinkButton>

---

## Purpose

Core packages the cross-cutting capabilities every team needs regardless of the engagement type. Today its headline capability is **Otto**, an onboarding agent that sets a repository up correctly for GitHub Copilot from day one.

## Agents

### Otto — Repo Onboarder

Otto (`goa-agent-onboarder`) is a meticulous onboarding specialist. It detects a repository's project type(s) — language, framework, repo shape, monorepo-aware — confirms that read with you, and then generates a complete, consistent set of GitHub Copilot customization files wired into exactly the places VS Code and GitHub Copilot read them:

- A small `.github/copilot-instructions.md` steering index
- One `*.instructions.md` per fixed process and per detected project type, with correct `applyTo` globs
- An `AGENTS.md`
- Invokable `.github/prompts/`

On a re-run Otto **reconciles rather than rewrites**: it diffs every file it owns and asks before touching anything a human edited, and it can rescan a growing repo to add newly-detected types. Every decision and file hash is persisted to a manifest so the next run remembers.

## What's Included

```
bmad-avanade-core/
└── skills/
    ├── goa-agent-onboarder/   # Otto — onboarding agent
    ├── goa-refresh-library/   # Refresh the frozen best-practice library
    ├── goa-setup/             # Install-time setup
    ├── goa-validate/          # Validate the generated Copilot kit
    └── reports/
```

## Installation

This module is distributed as a BMAD module. Install it with the BMAD method CLI:

```bash
npx bmad-method --install-module bmad-avanade-core
```

After installation, the module's assets are placed in your project's `_bmad/` directory and are immediately available to BMAD agents.

## Related Modules

- [Solutioning](/modules/solutioning/) — builds on Core for SoW, pricing, and sales-pitch workflows
