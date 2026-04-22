# Chapter 3: Rules

## Types of rules
- AGENTS.md / CLAUDE.md
- Project rules
- User (local) rules

---

## AGENTS.md and CLAUDE.md
- purpose is to define project intent (like a README for AI)
- covers: how to run tests, seed the database, code style guidelines
- attached to every conversation automatically
- naming differs by tool: Claude uses `CLAUDE.md`, Cursor uses `AGENT.md`
- `AGENTS.md` is an effort to unify conventions across tools (Cursor, Windsurf, etc.)
- can create symlinks so both tools share the same file

---

## Project rules
- markdown files saved in `.cursor/rules` or `.claude/rules`
- four types:
  - **Always** — always included in context
  - **Auto Attached** — triggered by glob patterns (e.g. `**/*.spec.ts`)
  - **Agent Requested** — AI decides when to pull them in, based on the description field
  - **Manual** — only added when explicitly `@mentioned`

---

## User rules
- Cursor: defined through settings UI, applied across all projects
- Claude Code: `CLAUDE.local.md` or `~/.claude/CLAUDE.md`

---

## Recommendations
- don't download rules from the internet — becomes alchemy fast
- don't generate rules with `/init` — output tends to be bloated
- don't try to define all rules upfront — build them as you go
- if the agent makes a mistake, define a rule
- rules are abstractions — apply them when they earn their place
- **AGENTS define intent, RULES define boundaries, SKILLS define execution**