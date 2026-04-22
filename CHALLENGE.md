# Chapter #4: Skills — Challenge

## ⭐ Level 1 — Repeat it

Create the `summarize-failures` skill from the demo:

1. Create the skill file at `.agents/skills/summarize-failures/SKILL.md` with:
   - A `name` and `description` field (the description does the triggering — make it precise)
   - Instructions for summarising Playwright output: totals, per-failure breakdown, root cause grouping, next steps

2. Add a supporting script at `.agents/skills/summarize-failures/scripts/get-results.sh`:
   ```bash
   #!/bin/bash
   npx playwright test --reporter=json 2>/dev/null
   ```
   Reference it from your `SKILL.md` so Claude runs it automatically when no output is provided.

3. Verify it works — prompt your agent with just `"summarize my test failures"` without pasting any output. Claude should call the script and produce the summary on its own.

---

## ⭐⭐ Level 2 — Variations

**Build a different skill**
Create a new skill that solves a different Playwright pain point. Some ideas:
- `generate-selectors` — given a URL or a component, suggest robust `data-testid`-based selectors
- `flaky-test-detector` — analyse a test file and flag patterns known to cause flakiness (hard waits, missing `await`, time-dependent assertions)
- `test-coverage-report` — compare spec files against source components and list untested interactions

Make sure the `description` field is specific enough that the agent only loads the skill when it's genuinely relevant — not on every prompt.

**Install a skill from the registry**
Browse [skills.sh](https://skills.sh) and install one skill that looks useful for your workflow:
```bash
npx skills add <owner/repo>
```
Open the installed `SKILL.md`, read through its structure, and note what makes a well-written community skill. Try it out with a prompt that matches its description.

---

## ⭐⭐⭐ Level 3 — Go further

**Exploratory testing with playwright-cli**
Install the Microsoft playwright-cli skill if you haven't already:
```bash
npx skills add https://github.com/microsoft/playwright-cli --skill playwright-cli
```

Use it to run a full exploratory session against the app:
- Navigate to the board view
- Find all interactive elements on the page
- Interact with at least two of them (e.g. create a list, rename a card)
- Take a screenshot at each meaningful step

Once the session is complete, prompt Claude to generate a Playwright `.spec.ts` file based on everything it just explored — without you writing a single line of code.

**Close the loop**
Run the generated spec with `npx playwright test`. If it fails, paste the error back into the agent and ask it to fix it — using only the context it already has from the exploratory session. Document how many iterations it took to get a green run.