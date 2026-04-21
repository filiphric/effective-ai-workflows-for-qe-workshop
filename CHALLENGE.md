# Chapter 2 Challenges — Claude Code

---

## ⭐ Level 1 — Repeat it

**Test generation**
Ask Claude Code to look at a component that has no test yet and write a Playwright test for it. Start in plan mode (`Shift+Tab`) so you can review the approach before any files are written.

**Debugging**
Break a test by changing a `data-testid` to something wrong (or repair your previous test if it failed). Run the test, then give Claude Code the error output and ask it to find and fix the cause.

**Screenshot to tests**
Take a browser screenshot of the board view. Attach it to Claude Code and ask it to write Playwright tests for the interactions visible on screen.

---

## ⭐⭐ Level 2 — Variation

**Coverage gap analysis**
Ask Claude Code to compare your test files against your components and produce a short report of untested interactions, then generate tests for two of them.

**`/permissions`**
Set up an allowlist so Claude Code can run `npx playwright test` without asking for approval each time. Check `.claude/settings.json` to confirm the permission was saved correctly.

**CLI piping**
Run a failing test and pipe the output directly into Claude Code without copy-pasting:
```bash
npx playwright test tests/your-test.spec.ts --reporter=line | claude -p "debug this test"
```

---

## ⭐⭐⭐ Level 3 — Go further

**Headless CI run**
Find out how to run Claude Code non-interactively (without the chat loop). Write a shell script or `package.json` script that runs Claude Code in one-shot mode to generate a test for a given component, then immediately runs Playwright to verify the result.

**`--dangerously-skip-permissions` in a safe context**
Create a throwaway branch. Write a script that runs Claude Code with `--dangerously-skip-permissions` to generate and run a full test suite with zero prompts. Document what permissions it needed and what you'd have to lock down before using this in a real CI pipeline.