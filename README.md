# Effective AI Workflows for QE — Workshop

A hands-on workshop on writing effective tests using AI-powered workflows. You'll be working with a Trello clone application as the system under test.

## Prerequisites

Make sure you have the following installed before the workshop:

- **Git** — [git-scm.com](https://git-scm.com/downloads)
- **Node.js v20 or later** — [nodejs.org](https://nodejs.org)
- **npm** (comes bundled with Node.js)

## Installation

Run this command in your terminal:

**macOS / Linux:**

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/filiphric/effective-ai-workflows-for-qe-workshop/main/scripts/setup.sh)
```

**Windows PowerShell (experimental):**

```powershell
irm https://raw.githubusercontent.com/filiphric/effective-ai-workflows-for-qe-workshop/main/scripts/setup.ps1 | iex
```

**Windows Git Bash:**

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/filiphric/effective-ai-workflows-for-qe-workshop/main/scripts/setup.sh)
```

> Windows users running PowerShell: if script execution is blocked, run `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` first.

The installer will:
1. Check that `git`, `node` (v20+), and `npm` are installed
2. Check network connectivity (flags VPN/proxy issues)
3. Clone the workshop repository
4. Install application dependencies
5. Set up the environment configuration

Once done, you'll see a menu to start the application.

## Starting the application

After setup, navigate to the project folder and run:

```bash
cd effective-ai-workflows-for-qe-workshop
npx workshop start
```

The app runs at **http://localhost:3000** with the API on **http://localhost:3001**.

## Workshop chapters

The workshop is split into chapters. Each chapter is a git branch that builds on the previous one.

| # | Chapter | Branch | What you'll learn |
|---|---------|--------|-------------------|
| 1 | Cursor Basics | `chapter/01-cursor-basics` | Navigate Cursor IDE, write your first AI-assisted tests |
| 2 | Claude Code | `chapter/02-claude-code` | Craft effective prompts for test generation |
| 3 | MCP | `chapter/03-mcp` | Connect AI to external tools via Model Context Protocol |
| 4 | Rules and Skills | `chapter/04-rules-and-skills` | Configure project rules and create reusable AI skills |
| 5 | Context Engineering | `chapter/05-context-engineering` | Optimize context with docs, examples, and references |
| 6 | Workflow Building | `chapter/06-workflow-building` | Build end-to-end testing workflows |
| 7 | Skills evaluation | `chapter/07-skills-evaluation` | Test create and evaluate skills |
| 8 | AI code governance | `chapter/08-ai-code-governance` | Use AI to review and improve test quality |

### Switching chapters

To jump to a chapter, run:

```bash
npx workshop chapter <number>
```

For example, to start chapter 3:

```bash
npx workshop chapter 3
```

This will automatically stash any uncommitted changes and switch to the correct branch. Each chapter branch contains the completed state of all previous chapters, so you can jump in at any point.

## Script commands

Use the setup script throughout the workshop:

| Command | What it does |
|---|---|
| `npx workshop setup` | Full setup + interactive menu |
| `npx workshop start` | Start the application |
| `npx workshop reset` | Reset the database to a clean state |
| `npx workshop check` | Check if ports 3000 & 3001 are free |
| `npx workshop verify` | Verify that everything is set up correctly |
| `npx workshop chapter <n>` | Switch to a chapter branch |

## Troubleshooting

**Node.js version is too old**
Upgrade to v20+. Using `nvm`: `nvm install 20 && nvm use 20`. On Windows: download from [nodejs.org](https://nodejs.org) or run `winget install OpenJS.NodeJS.LTS`.

**Network checks fail (VPN / proxy)**
Your corporate network may be blocking `github.com` or `registry.npmjs.org`. Ask IT to allowlist these domains, or try from a personal network.

**Port 3000 or 3001 is already in use**
Run `npx workshop check` to see what's using the ports. The script can kill the conflicting processes for you, or you can stop them manually.

**npm install fails**
Delete `trelloapp/node_modules` and run `npx workshop setup` again. Behind a proxy? Configure npm: `npm config set proxy http://your-proxy:port`.

**Still stuck?**
Reach out to the workshop instructor — we'll get you sorted before the session.
