---
title: QA Agent
description: Quality Assurance agent with Avanade testing frameworks and standards.
sidebar:
  order: 5
---

import { Badge, LinkButton } from '@astrojs/starlight/components';

<Badge text="Beta" variant="caution" /> &nbsp; <Badge text="BMAD Module" variant="note" />

The **QA Agent** is a BMAD Avanade module that gives your AI assistant the persona and knowledge of an experienced Avanade QA Engineer. It applies Avanade testing standards and frameworks to produce comprehensive, automated test suites.

<LinkButton href="https://github.com/Avanade-Region-Netherlands/bmad-avanade-qa-agent" icon="github" variant="primary" target="_blank">View on GitHub (Avanade employees only)</LinkButton>

---

## Purpose

The QA Agent helps delivery teams achieve and maintain high test coverage while following Avanade's testing standards. It bridges the gap between development and quality assurance by embedding testing expertise into the AI workflow.

## Key Capabilities

- **Test plan creation** — Generates structured test plans following Avanade QA standards
- **Test case writing** — Writes detailed test cases with clear steps and expected results
- **Automated test scripts** — Generates automated tests for unit, integration, and E2E layers
- **Defect reporting** — Creates well-structured defect reports with reproduction steps
- **Quality gate validation** — Checks deliverables against Avanade quality gates

## What's Included

```
bmad-avanade-qa-agent/
├── agents/
│   └── qa-agent.md              # Agent persona and instructions
├── tasks/
│   ├── create-test-plan.md      # Task: create a test plan
│   ├── write-test-cases.md      # Task: write test cases
│   └── generate-automation.md   # Task: generate automated test scripts
├── knowledge/
│   └── avanade-testing-standards.md
└── templates/
    ├── test-plan-template.md
    └── defect-report-template.md
```

## Usage

1. Clone or download the repository (Avanade employees only)
2. Follow the setup instructions in the repository's `README.md`
3. Configure your AI assistant to use the agent persona from `agents/qa-agent.md`

## Related Modules

- [Developer Agent](/modules/developer-agent/) — coordinate with the Developer Agent for full test coverage
- [PM Agent](/modules/pm-agent/) — use PM Agent user stories as input for test case generation
