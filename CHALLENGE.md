# Chapter 2 Challenges — Claude Code

---

## ⭐ Level 1 — Repeat it

**Test generation**
Ask Claude Code to look at a component that has no test yet and write a Playwright test for it.

**Debugging**
Break a test by changing a `data-testid` to something wrong. Run the test, then give Claude Code the error output and ask it to find and fix the cause.

**Refactoring**
Ask Claude Code to refactor your existing tests to use a Page Object for the board page.

---

## ⭐⭐ Level 2 — Variation

**Test generation**
Ask Claude Code to look at an existing test and generate additional edge case tests it thinks are missing — without you specifying what those cases are.

**Debugging**
Introduce a race condition by removing a `waitFor` or `expect`. Ask Claude Code to diagnose why the test is flaky and fix it properly.

**Coverage gap analysis**
Ask Claude Code to compare your test files against your components and produce a short report of untested interactions, then generate tests for two of them.

---

## ⭐⭐⭐ Level 3 — Go further

**CLAUDE.md**
Look up what a `CLAUDE.md` file does in Claude Code. Create one for this project that instructs Claude Code on your preferred test patterns, selector strategy, and file naming conventions. Verify it influences the output of a new test generation task.

**Headless CI run**
Find out how to run Claude Code non-interactively (without the chat loop). Write a shell script or `package.json` script that runs Claude Code in one-shot mode to generate a test for a given component, then immediately runs Playwright to verify the result.