# Chapter 6: Workflow Building

## What you'll learn

- What workflows are and why they matter for test automation
- How to build a skill that runs in a forked agent context
- How to build a sub-agent
- How sub-agents return findings back to the main thread

---

## Skills with `context: fork`

Adding `context: fork` to a skill's YAML frontmatter runs it in an **isolated subagent** rather than inline in your main conversation. The skill content becomes the task prompt for that agent. When it finishes, it returns a clean summary to your main thread — not every individual tool call.

Use `agent: Explore` for read-only investigation tasks. The Explore agent is a built-in Claude Code agent that:
- Uses Haiku (fast, cheap)
- Has only Read, Glob, and Grep tools available
- Cannot modify any files

Because the subagent starts with a **fresh context**, the SKILL.md must be self-contained — it needs to explain everything the agent needs to do its job without relying on any conversation history.

```yaml
---
name: find-missing-testids
description: Scan the application for interactive elements missing a data-testid attribute
context: fork
agent: Explore
---
```

**Why it matters for test automation:** exploration-heavy tasks like auditing an entire codebase for missing `data-testid` attributes can generate a lot of tool call noise. Running them in a forked agent keeps your main thread clean and preserves your context budget for writing the actual tests.

---

## Sub-agents with MCP

Sub-agents are defined as markdown files with YAML frontmatter in `.agents/agents/`. The key feature: the `mcpServers` field scopes an MCP server **only to that agent**, not to your whole session.

This is particularly useful for browser automation with Playwright MCP:
- The agent navigates, observes, and collects information in its own isolated context
- Browser tool call logs, screenshots, and DOM snapshots don't flood your main thread
- When done, the agent compresses everything into a structured report and returns it
- Your main thread receives the report with its full context budget still intact

```yaml
---
name: playwright-explorer
description: Use a real browser to navigate the app and return a structured report for writing Playwright tests
mcpServers:
  - playwright:
      type: stdio
      command: npx
      args: ["-y", "@playwright/mcp@latest"]
---
```

Scoping Playwright MCP to a sub-agent also means browser tools aren't available in every conversation — they're heavy, encourage browsing instead of reasoning, and consume context quickly.

---

## Demo highlights

### `find-missing-testids` skill (forked Explore agent)
- A skill that scans application source files for interactive elements (`button`, `input`, `select`, `textarea`, `a`, `onClick`, `onChange` handlers) missing a `data-testid` attribute
- Returns a markdown list grouped by file, with line numbers, element types, and suggested testid values in kebab-case
- All the scanning happens in the Explore agent's context — the main thread only receives the final report

### `playwright-explorer` sub-agent (Playwright MCP)
- A sub-agent that launches a real browser, navigates the running application, and documents all pages, interactive elements, and multi-step flows
- Returns a structured report (pages, element tables, flows discovered, missing `data-testid` flags) that the main thread can use directly to write Playwright tests
- Demonstrates why scoping Playwright MCP to a sub-agent is preferable to connecting it globally