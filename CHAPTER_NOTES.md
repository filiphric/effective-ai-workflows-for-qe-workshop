# Chapter 4: Skills

## What are skills?

A skill is a folder containing a `SKILL.md` file, placed inside `.agents/skills/`. Unlike rules (which always apply), skills are loaded on demand — Claude reads the `description` field to decide when a skill is relevant and loads it only when needed.

```
.agents/skills/
└── my-skill/
    └── SKILL.md
```

## Anatomy of a skill

A `SKILL.md` file has two key parts:

- **Frontmatter** — `name` and `description` fields. The description does all the triggering work: make it precise and specific so Claude loads the skill at the right moment.
- **Body** — prose instructions telling Claude exactly what to do when the skill is active.

## Adding supporting scripts

For mechanical, reliable operations (running a command, parsing output), add a `scripts/` folder alongside `SKILL.md` and reference the scripts from the skill body. The script does the mechanical work; the skill does the reasoning.

```
my-skill/
├── SKILL.md
└── scripts/
    └── get-results.sh
```

## The skills registry — skills.sh

[skills.sh](https://skills.sh) is an open community registry for AI skills — think npm, but for agent skills. Skills are organized by `owner/repo` and work across agents (Claude Code, Cursor, Copilot, Cline, Windsurf, and more).

```bash
# Install a skill from the registry
npx skills add microsoft/playwright-cli

# Install a specific skill from a repo
npx skills add https://github.com/microsoft/playwright-cli --skill playwright-cli
```

Once installed, the skill folder lands in `.agents/skills/` and Claude picks it up immediately. Anthropic also publishes skills on the registry — `frontend-design`, `pptx`, `docx`, and `pdf` are all in the top 100.

## The playwright-cli skill

The `microsoft/playwright-cli` skill (~23k installs) gives Claude a CLI to control a real browser step by step — this is distinct from running `.spec.ts` files. Key commands:

```
playwright-cli open https://your-app.com
playwright-cli snapshot       # inspect the accessibility tree
playwright-cli click e5
playwright-cli fill e3 "user@example.com"
playwright-cli screenshot
```

### Why this matters for test automation

The skill turns Claude into an **exploratory testing agent**. You can prompt it in natural language ("find all forms on this page and check they have proper validation") and Claude will navigate, interact, and report — without writing a single line of code.

Crucially, once Claude has explored an app with `playwright-cli`, it can generate the actual Playwright spec from what it just did, closing the loop between exploration and test authoring.