---
layout: cover
---

Chapter #5:
# Claude Code

---
layout: default
---

# What you’ll learn
- What is Claude Code
- How to use Claude Code with Cursor
- How to build your own Claude agent
- How to use Claude to debug your GitHub pipeline

---
layout: default
---
# What is Claude Code?
- CLI coding agent
- Built by Anthropic
- can be integrated with Cursor
- Claude Code !== Claude Desktop

<!-- 
- CLI coding agent from Anthropic
- it is a separate thing from cursor, but it can be integrated really nicely - they are actually kind of competitors, but I find myself switching between them depending on the task
 -->

---
layout: center
---

# Demo

<!-- 

### Installation
```
npm install -g @anthropic-ai/claude-code
```

### Run Claude Code
- @ for referencing files
- / for commands
- ctrl + v to paste images
- CLAUDE.md similar to AGENTS.md that we talked about in the cursor chapter 
- Claude has these two modes, executing and planning, and you can use shift-tap to switch between them.
- I think the biggest difference between Cursor and Claude is that with Cursor, the IDE is at the center of the experience, and you have an Agent that can help you complete certain tasks. With Claude code, you have an agent that you can program to perform anything you need, I’ll show you what I mean in a second.

### Add MCP

```
claude mcp add playwright npx @playwright/mcp@latest
```

### Creating agents

```
expert software engineer specializing in debugging Playwright end-to-end test failures. You have deep expertise in web automation, browser testing, and test debugging methodologies.
```

**Prompt:**
Always run Playwright MCP to run the test. Check `playwright.config.ts` for configuration settings and information about baseUrl. Check if the application under test is running and debug the test. Prioritize fixing the test file. If the solution is more efficient to fix in the source code, check with the user first.
 

### Debugging test
```
npx playwright test tests/05_claude_code.example.spec.ts --reporter=line | claude -p "debug this test"
```

### Debugging latest GitHub pipeline
> Note: run the app and delete database
I also have GitHub MCP installed, and have a failed pipeline: https://github.com/filiphric/cursor-course/actions/runs/17519475632

```
look into the latest test run on github. in the annotations you will find list of all the failed tests. run the failed tests locally and use the playwright-test-debug agent to find the root cause and fix the test  
```

-->