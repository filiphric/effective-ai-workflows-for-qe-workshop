# Chapter 2: Claude Code

## What is Claude Code?
A terminal-based AI coding agent. Unlike Cursor, it operates autonomously across your whole repo — reading files, running commands, and iterating without you steering every step.

## Cursor vs. Claude Code
- **Cursor** — GUI, inline suggestions, best for focused in-editor edits
- **Claude Code** — CLI, agentic, best for whole-project tasks like test generation, migrations, and CI automation
- They're complementary. Use both. Claude Code also runs inside the Cursor terminal.

## Playwright automation patterns covered in demo
- **Plan mode** — start here; Claude lays out every step before touching any files
- **Test generation** from component source — reads your actual code, picks up `data-testid` attributes, iterates on failures automatically
- **Debugging** — paste failing test output, Claude finds the root cause, fixes it, and reruns
- **Permissions** — Claude asks before running commands; approve once and it's saved to `.claude/settings.json`
- **`/rewind`** — if an agent run goes sideways, roll back the code and conversation to any earlier turn
- **Screenshot-to-tests** — attach a browser screenshot; Claude maps visible interactions to selectors from the component source
- **CLI piping** — pipe test output directly into Claude: `npx playwright test | claude -p "debug this test"`

## Key commands
| Command | What it does |
|---|---|
| `/permissions` | Allowlist commands to skip approval prompts |
| `/rewind` | Roll back code and conversation to an earlier turn |
| `/compact` | Summarize a long session to free up context |
| `/new` | Start a fresh session |

## Controlling autonomy
- **Plan mode** (`Shift+Tab`) — Claude proposes a plan before acting. Good default, especially on unfamiliar codebases.
- **`--dangerously-skip-permissions`** — no prompts, no guardrails. For headless CI only. If you're unsure whether you need it, you don't.