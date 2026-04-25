# Chapter 6 Challenge: Workflow Building

## ⭐ Level 1 — Repeat It

Recreate the `find-missing-testids` skill from the demo.

1. Create the skill directory at `.claude/skills/find-missing-testids/`
2. Write the `SKILL.md` with:
   - `context: fork` and `agent: Explore` in the frontmatter
   - Instructions to scan for interactive elements missing a `data-testid`
   - Output format grouped by file with line numbers and suggested testid values
3. Trigger the skill in Claude Code and confirm:
   - The Explore subagent runs in isolation
   - The main thread receives a clean, structured report

**You're done when:** the skill runs and returns a list of elements missing `data-testid` in your project.

---

## ⭐⭐ Level 2 — Variations

Create your own skill of choice

### Suggestion: `find-hardcoded-waits`

Create a skill that scans the codebase for hardcoded waits that should be replaced with proper Playwright waiting strategies. The skill should:
- Search for `page.waitForTimeout`, `setTimeout`, `sleep`, or any fixed numeric delays
- Return results grouped by file with line numbers
- For each match, suggest the appropriate Playwright alternative (e.g. `waitForSelector`, `waitForResponse`, `expect(locator).toBeVisible()`)

Run it with `context: fork` and `agent: Explore`.

---

## ⭐⭐⭐ Level 3 — Go Further

Design and build a two-stage automated workflow that goes from app exploration to a working test file — with minimal manual input.

### The workflow

1. **Stage 1 — Explore:** Run the `playwright-explorer` sub-agent against the running app to produce an interaction report
2. **Stage 2 — Generate:** Use the report from Stage 1 as context to generate a complete Playwright test file covering at least one full user flow

### Requirements

- The sub-agent must use `browser_snapshot` (not screenshots) as its primary tool for element discovery — check the [Playwright MCP docs](https://github.com/microsoft/playwright-mcp) to understand why this produces better structured output
- The generated test file must use `data-testid` locators where available and fall back to accessible role selectors where not
- The test file must run without modification (`npx playwright test` passes)

### Stretch goal

Add a third stage: a second forked skill (`agent: Explore`) that reads the generated test file and checks it against the interaction report — flagging any flows that were documented but not covered by the generated tests. Return a coverage gap report.

**You're done when:** the full pipeline runs, the test file executes cleanly, and (if you attempted the stretch goal) the coverage gap report is accurate.