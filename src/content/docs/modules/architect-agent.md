---
title: Architect Agent
description: Solution Architect agent trained on Avanade architecture patterns and Microsoft technology stack.
sidebar:
  order: 3
---

import { Badge, LinkButton } from '@astrojs/starlight/components';

<Badge text="Stable" variant="success" /> &nbsp; <Badge text="BMAD Module" variant="note" />

The **Architect Agent** is a BMAD Avanade module that gives your AI assistant the persona and knowledge of an experienced Avanade Solution Architect. It is trained on Avanade architecture patterns, Microsoft Azure best practices, and Avanade's technology standards.

<LinkButton href="https://github.com/Avanade-Region-Netherlands/bmad-avanade-architect-agent" icon="github" variant="primary" target="_blank">View on GitHub (Avanade employees only)</LinkButton>

---

## Purpose

The Architect Agent helps delivery teams produce consistent, high-quality architecture artefacts that meet Avanade and Microsoft standards. It accelerates the architecture phase of a project by providing structured guidance and ready-to-use templates.

## Key Capabilities

- **Architecture Decision Records (ADRs)** — Creates structured ADRs following Avanade conventions
- **System design documentation** — Produces C4 model diagrams and design documents
- **Tech stack recommendations** — Recommends technology choices based on Avanade's preferred technology stack
- **Azure architecture patterns** — Applies Well-Architected Framework principles
- **Non-functional requirements** — Helps define and validate NFRs (security, scalability, resilience)

## What's Included

```
bmad-avanade-architect-agent/
├── agents/
│   └── architect-agent.md       # Agent persona and instructions
├── tasks/
│   ├── create-adr.md            # Task: create an Architecture Decision Record
│   ├── design-system.md         # Task: produce a system design document
│   └── evaluate-tech-stack.md   # Task: evaluate and recommend a tech stack
├── knowledge/
│   └── avanade-architecture-standards.md
└── templates/
    ├── adr-template.md
    └── system-design-template.md
```

## Usage

1. Clone or download the repository (Avanade employees only)
2. Follow the setup instructions in the repository's `README.md`
3. Configure your AI assistant to use the agent persona from `agents/architect-agent.md`

## Related Modules

- [PM Agent](/modules/pm-agent/) — run the PM Agent first to produce the project charter
- [Developer Agent](/modules/developer-agent/) — developers use the architecture output as input
