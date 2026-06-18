---
title: Developer Agent
description: Developer agent with Avanade coding standards and best practices.
sidebar:
  order: 4
---

import { Badge, LinkButton } from '@astrojs/starlight/components';

<Badge text="Beta" variant="caution" /> &nbsp; <Badge text="BMAD Module" variant="note" />

The **Developer Agent** is a BMAD Avanade module that gives your AI assistant the persona and knowledge of an experienced Avanade software developer. It enforces Avanade coding standards, naming conventions, and development best practices across your codebase.

<LinkButton href="https://github.com/Avanade-Region-Netherlands/bmad-avanade-developer-agent" icon="github" variant="primary" target="_blank">View on GitHub (Avanade employees only)</LinkButton>

---

## Purpose

The Developer Agent ensures that AI-generated code meets Avanade's quality standards from the start. It reduces the back-and-forth of code reviews by building Avanade conventions directly into the AI's output.

## Key Capabilities

- **Code generation with Avanade standards** — Generates clean, production-ready code following Avanade guidelines
- **Code review assistance** — Reviews code against Avanade standards and highlights issues
- **Refactoring guidance** — Suggests and performs refactoring aligned with Avanade best practices
- **Story implementation** — Breaks down user stories into implementation tasks and generates the code
- **Documentation generation** — Produces inline documentation and README files to Avanade standards

## What's Included

```
bmad-avanade-developer-agent/
├── agents/
│   └── developer-agent.md       # Agent persona and instructions
├── tasks/
│   ├── implement-story.md       # Task: implement a user story
│   ├── code-review.md           # Task: perform a code review
│   └── write-tests.md           # Task: write unit and integration tests
├── knowledge/
│   └── avanade-coding-standards.md
└── templates/
    └── pull-request-template.md
```

## Usage

1. Clone or download the repository (Avanade employees only)
2. Follow the setup instructions in the repository's `README.md`
3. Configure your AI assistant to use the agent persona from `agents/developer-agent.md`

## Related Modules

- [Architect Agent](/modules/architect-agent/) — review the architecture before implementing
- [QA Agent](/modules/qa-agent/) — use the QA Agent to validate the developer's output
