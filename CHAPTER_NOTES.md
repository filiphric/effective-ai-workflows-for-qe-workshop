# Chapter 8 — Code Governance

## The new problem

AI coding tools increase velocity dramatically — but that velocity creates a review bottleneck. When developers write 3× the code, the same human review process can't keep up. In test automation this is especially costly: poorly written tests are often worse than no tests at all. They're flaky, they test implementation details, and they don't follow team conventions. AI will generate all of that if left unchecked.

---

## What code governance means

Code governance is a system that captures, enforces, and evolves your team's coding standards. It's not a linter, not a style guide doc, and not a one-time review. It's a living process that scales with the team — one that externalises the institutional knowledge that usually lives only inside senior engineers' heads.

---

## The AI code review gap

Standard linters catch syntax and style, not intent. They can't tell you that a test will be flaky, that a locator strategy is fragile, or that an assertion is too shallow. Human reviewers can catch all of that — but only if they have time. At AI velocity, they don't.

---

## Qodo

Qodo is an AI Code Review Platform that fills this gap. It combines two things that work together:

**Rules system** — where team coding standards live. Rules can be written manually, but Qodo also discovers them automatically from codebase patterns and PR history. Recurring reviewer comments become candidates for new rules.

**Review agents** — AI reviewers with access to the full codebase (not just the diff), enabling reasoning about architecture, duplication, dependencies, and rule compliance.

Qodo integrates directly into GitHub, GitLab, Bitbucket, and Azure DevOps.

---

## The closed loop

```
  Codebase patterns          Review agents
  PR history         →  →  → enforce standards
        ↑                          |
        |                          ↓
  Rules evolve   ←  ←  ←   Recurring comments
                            suggest new rules
```

Rules feed the review. Review data feeds the rules. The result is a standards system that gets smarter over time without constant manual maintenance.

---

## What Qodo catches in Playwright test code

- **Flakiness risks** — `waitForTimeout`, time-dependent assertions
- **Fragile selectors** — class or ID-based locators that break on markup changes
- **Missing assertions** — tests that navigate but don't assert meaningful state
- **Convention violations** — any pattern defined as a team rule
- **Duplication** — test logic that already exists in a page object or fixture (only catchable with full codebase context)

---

## Practical Playwright rules to define

| Rule | Why it matters |
|---|---|
| Prefer `getByRole`, `getByLabel`, `getByTestId` | Resilient to markup changes |
| No `waitForTimeout` | Replace with semantic waits (`waitForSelector`, `waitForResponse`) |
| Assertions must verify content, not just URL | URL checks don't prove the page rendered correctly |
| Selectors live in page objects, not inline | Enforces page object model consistency |
| Flag tests that share state or depend on order | Prevents intermittent failures from test coupling |

---

## The shift

| Before | After |
|---|---|
| Standards live in docs and people's heads | Standards live in Qodo's rules portal |
| Inconsistent review depending on who reviews | Every PR gets the same review |
| Senior engineers review boilerplate | Senior engineers review architecture |
| Flaky tests slip through | Flakiness patterns flagged before merge |

The goal is not to replace human reviewers — it's to change what they spend time on. Qodo handles the systematic, automatable review. Humans focus on what requires judgement: architecture, edge case coverage, test strategy.