---
title: PM Agent
description: AI-powered Product Manager agent with Avanade delivery methodology built in.
sidebar:
  order: 2
---

import { Badge, LinkButton } from '@astrojs/starlight/components';

<Badge text="Stable" variant="success" /> &nbsp; <Badge text="BMAD Module" variant="note" />

The **PM Agent** is a BMAD Avanade module that gives your AI assistant the persona and knowledge of an experienced Avanade Product Manager. It combines the structured BMAD methodology with Avanade's delivery frameworks, templates, and best practices.

<LinkButton href="https://github.com/Avanade-Region-Netherlands/bmad-avanade-pm-agent" icon="github" variant="primary" target="_blank">View on GitHub (Avanade employees only)</LinkButton>

---

## Purpose

The PM Agent helps delivery teams rapidly produce high-quality project artefacts by guiding the AI through Avanade's standard PM processes. It ensures consistency across projects and reduces the time spent on documentation.

## Key Capabilities

- **Project Charter generation** — Creates structured project charters aligned with Avanade delivery standards
- **User Story writing** — Writes well-formed user stories with acceptance criteria following Avanade conventions
- **Roadmap planning** — Builds phased delivery roadmaps with milestones
- **Stakeholder analysis** — Identifies stakeholders and communication strategies
- **Risk & assumption logging** — Maintains RAID logs in Avanade format

## What's Included

```
bmad-avanade-pm-agent/
├── agents/
│   └── pm-agent.md          # Agent persona and instructions
├── tasks/
│   ├── create-charter.md    # Task: create a project charter
│   ├── write-user-story.md  # Task: write a user story
│   └── build-roadmap.md     # Task: build a delivery roadmap
├── knowledge/
│   └── avanade-pm-standards.md  # Avanade PM standards context
└── templates/
    ├── charter-template.md
    └── user-story-template.md
```

## Usage

1. Clone or download the repository (Avanade employees only)
2. Follow the setup instructions in the repository's `README.md`
3. Configure your AI assistant to use the agent persona from `agents/pm-agent.md`

## Related Modules

- [Architect Agent](/modules/architect-agent/) — works well after the PM Agent produces the project charter
- [Developer Agent](/modules/developer-agent/) — used once the architecture is defined
