# Chapter #3: Rules — Challenge

## ⭐ Level 1 — Repeat it

Create a project rule for your Playwright test suite:

1. Create a rule file at `.agents/rules/e2e/playwright.mdc` (or `.claude/rules/e2e/playwright.mdc` if using Claude Code)
2. Set the rule type to **Auto Attached** with a glob pattern that targets spec files
3. Include at least the following conventions in your rule:
   - Selector strategy (use `data-testid`, avoid CSS classes and XPath)
   - Timing strategy (no `waitForTimeout()`)
4. Create a symlink so both Cursor and Claude Code share the same rules:
   ```bash
   ln -s ../../.agents/rules/ .claude/rules/
   ```
5. Prompt your AI agent to write a new test and verify the rule is being respected

---

## ⭐⭐ Level 2 — Variations

Do all of the above, then extend your rules setup:

1. Create an `AGENTS.md` file in the root of your project. Include:
   - A short project overview
   - Commands to run and develop the app
   - Test structure description
   - Code style guidelines
   
   > 💡 Try generating a first draft with your AI agent, then trim and refine it — notice how much redundant or irrelevant content gets generated.

2. Create a second rule file — this time with type **Agent Requested** — that covers something more situational (e.g. accessibility checks, API mocking conventions, or database reset behaviour)

3. Prompt your agent with a task that should trigger each rule and confirm they are being applied correctly

---

## ⭐⭐⭐ Level 3 — Go further

1. Set up a **User Rule** (in Cursor settings, or via `CLAUDE.local.md` / `~/.claude/CLAUDE.md`) that changes the agent's default communication style across all your projects (e.g. always respond concisely, always explain reasoning, always ask clarifying questions before writing code)

2. Explore the four rule types and create one of each:
   - **Always** — a universal rule applied to every conversation
   - **Auto Attached** — triggered by a glob pattern of your choice
   - **Agent Requested** — an opt-in rule the agent pulls in based on context
   - **Manual** — a rule you explicitly `@mention` when needed

3. Intentionally break one of your rules (e.g. write a test using a CSS selector) and prompt the agent to review it. Does it catch the violation? If not, refine your rule until it does.

4. Reflect: which rules feel like useful abstractions, and which feel like noise?