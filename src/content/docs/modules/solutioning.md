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

This module is distributed as a BMAD module. Install it with the BMAD method CLI:

```bash
npx bmad-method --install-module bmad-avanade-solutioning
```

After installation, the module's assets are placed in your project's `_bmad/` directory and are immediately available to BMAD agents.

## Related Modules

- [Core](/modules/core/) — shared agents and workflows that Solutioning builds on
