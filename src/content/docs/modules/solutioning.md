---
title: Solutioning
description: Custom agents and workflows for creating Statements of Work, Sales Pitches, and Pricing Proposals from a technical solution.
sidebar:
  order: 3
---

import { Badge, LinkButton } from '@astrojs/starlight/components';

<Badge text="Beta" variant="caution" /> &nbsp; <Badge text="BMAD Module" variant="note" />

The **Solutioning** module (`bmad-avanade-solutioning`) provides custom agents and workflows used in the creation of Statements of Work, Sales Pitches, and Pricing Proposals based on a technical solution.

<LinkButton href="https://github.com/Avanade-Region-Netherlands/bmad-avanade-solutioning" icon="github" variant="primary" target="_blank">View on GitHub (Avanade employees only)</LinkButton>

---

## Purpose

Solutioning helps Solution Architects and Business Developers turn a technical offering into customer-ready, defensible commercial artefacts — from value proposition through pitch, contract, and price. Each agent is a focused persona with its own workflow.

## Agents

### The Resonance Facilitator — Value Proposition Canvas

`arc-agent-resonance-facilitator` coaches you from a vague customer ask to a versioned, per-customer **Value Proposition Canvas**. It reframes an Avanade cloud offering into a specific stakeholder's jobs, pains, and gains, then proves the story lands via an outcome-vs-technology **Resonance Check**.

### The Pitch Architect — Sales Pitch

`sps-agent-pitch-architect` turns a technical offering and an audience into a hook-first, benefit-led **sales pitch** — complete with spoken script, storyline, and slide deck. Use it to build, sharpen, or stress-test a pitch.

### Counsel — Statements of Work & MSAs

`offer-agent-counsel` produces unambiguous **Statements of Work** and **MSAs** from a technical solution. It interrogates the solution, hunts scope creep and naked assumptions, and hands back a contract that is hard to dispute.

### Sterling — Pricing

`price-agent-sterling` recommends a competitive, defensible **engagement price** from a Statement of Work — closing Avanade's price gap with structural levers before margin, and stress-testing the proposed team shape.

## What's Included

```
bmad-avanade-solutioning/
└── skills/
    ├── arc-agent-resonance-facilitator/  # Value Proposition Canvas coach
    ├── arc-setup/
    ├── sps-agent-pitch-architect/        # Sales pitch builder
    ├── sps-setup/
    ├── offer-agent-counsel/              # SoW & MSA drafting
    ├── offer-draft-sow/
    ├── offer-draft-msa/
    ├── offer-setup/
    ├── price-agent-sterling/             # Engagement pricing
    ├── price-setup/
    └── reports/
```

## Installation

### Prerequisites

The BMAD installer runs via `npx` and some skills use Python and `uv`:

- [Node.js](https://nodejs.org/) v20.12+ (bundles `npx`)
- [Python](https://www.python.org/) 3.10+
- [uv](https://docs.astral.sh/uv/getting-started/installation/)

Windows quick install:

```powershell
winget install OpenJS.NodeJS.LTS
winget install Python.Python.3.12
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

macOS / Linux quick install:

```bash
# Node.js & Python via Homebrew (macOS) or your package manager
brew install node python
# uv
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### Install the module

This module is distributed as a BMAD custom module hosted in its own Git repository. Install it with the BMAD method installer, pointing `--custom-source` at the repository and selecting **GitHub Copilot** as the tool:

```bash
npx bmad-method install \
  --custom-source https://github.com/Avanade-Region-Netherlands/bmad-avanade-solutioning \
  --tools github-copilot
```

The installer clones the repository, discovers the module's skills, and lets you select them. After installation, the module's assets are placed in your project's `_bmad/` directory and are immediately available to GitHub Copilot.

> Avanade employees only: the repository is internal, so you must be authenticated to GitHub with access to the `Avanade-Region-Netherlands` organisation for the clone to succeed.

## Related Modules

- [Core](/bmad-avanade/modules/core/) — shared agents and workflows that Solutioning builds on
