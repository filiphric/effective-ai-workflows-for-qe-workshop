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
bash <(curl -fsSL https://raw.githubusercontent.com/filiphric/effective-ai-workflows-for-qe-workshop/main/setup.sh)
```

**Windows (Git Bash):**

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/filiphric/effective-ai-workflows-for-qe-workshop/main/setup.sh)
```

> Windows users: run this inside **Git Bash** (installed with [Git for Windows](https://git-scm.com/download/win)). PowerShell and CMD are not supported.

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
bash setup.sh start
```

The app runs at **http://localhost:3000** with the API on **http://localhost:3001**.

## Workshop chapters

The workshop is split into chapters. Each chapter is a git branch that builds on the previous one.

| # | Chapter | Branch | What you'll learn |
|---|---------|--------|-------------------|
| 1 | Cursor Basics | `chapter/01-cursor-basics` | Navigate Cursor IDE, write your first AI-assisted tests |
| 2 | Prompting Basics | `chapter/02-prompting-basics` | Craft effective prompts for test generation |
| 3 | Rules | `chapter/03-rules` | Configure project rules to guide AI behavior |
| 4 | Skills | `chapter/04-skills` | Create reusable AI skills and commands |
| 5 | Context Engineering | `chapter/05-context-engineering` | Optimize context with docs, examples, and references |
| 6 | Workflow Building | `chapter/06-workflow-building` | Build end-to-end testing workflows |
| 7 | Running Agents | `chapter/07-running-agents` | Run AI agents autonomously on test tasks |
| 8 | Evaluations | `chapter/08-evaluations` | Evaluate and score AI-generated test quality |

### Switching chapters

To jump to a chapter, run:

```bash
npm run chapter <number>
```

For example, to start chapter 3:

```bash
npm run chapter 3
```

This will automatically stash any uncommitted changes and switch to the correct branch. Each chapter branch contains the completed state of all previous chapters, so you can jump in at any point.

## Script commands

Use the setup script throughout the workshop:

| Command | What it does |
|---|---|
| `bash setup.sh` | Full setup + interactive menu |
| `bash setup.sh start` | Start the application |
| `bash setup.sh reset` | Reset the database to a clean state |
| `bash setup.sh check` | Check if ports 3000 & 3001 are free |
| `bash setup.sh verify` | Verify that everything is set up correctly |

## Troubleshooting

**Node.js version is too old**
Upgrade to v20+. Using `nvm`: `nvm install 20 && nvm use 20`. On Windows: download from [nodejs.org](https://nodejs.org) or run `winget install OpenJS.NodeJS.LTS`.

**Network checks fail (VPN / proxy)**
Your corporate network may be blocking `github.com` or `registry.npmjs.org`. Ask IT to allowlist these domains, or try from a personal network.

**Port 3000 or 3001 is already in use**
Run `bash setup.sh check` to see what's using the ports. The script can kill the conflicting processes for you, or you can stop them manually.

**npm install fails**
Delete `trelloapp/node_modules` and run `bash setup.sh` again. Behind a proxy? Configure npm: `npm config set proxy http://your-proxy:port`.

**Still stuck?**
Reach out to the workshop instructor — we'll get you sorted before the session.
