# Challenge — Skills Evaluation

## ⭐ Level 1 — Repeat it

Run Skill Creator on the `find-missing-testids` skill from Chapter 6 or your own skill.

1. Install Skill Creator:
   ```bash
   npx skills add https://github.com/anthropics/skills --skill skill-creator
   ```
2. Open the trelloapp project and trigger Skill Creator:
   > "Use Skill Creator to evaluate and improve my find-missing-testids skill"
3. Follow the guided prompts — answer the clarifying questions about what the skill does and what good output looks like
4. Review the issues it flags and inspect the generated eval test cases
5. Open the HTML eval viewer and review the results

**Goal:** Successfully complete the Skill Creator workflow end-to-end and identify at least one issue flagged in your skill.

---

## ⭐⭐ Level 2 — Variations

Add a custom eval test case and rerun the benchmark.

1. After the initial Skill Creator run, add a new test case manually to your eval set:
   - **Input prompt:** *"Does the trelloapp have any elements missing testids?"* (a yes/no framed query, not an explicit audit request)
   - **Assertions:** should still return a grouped markdown list; should not return a plain yes/no answer; should not hallucinate testids for elements that already have them
2. Rerun the benchmark with your new test case included
3. Compare the "With Skill" vs "Without Skill" scores for your new case
4. If the skill underperforms on your new case, identify why — is it the description, the instructions, or the output format guidance?

**Goal:** A new eval test case that reveals something about the skill's behaviour that the original cases didn't.

---

## ⭐⭐⭐ Level 3 — Go further

Run the description optimization loop and reflect on what it changes.

1. After the benchmark, trigger the description optimizer:
   > "Run the description optimization loop for my find-missing-testids skill"
2. Review the generated trigger / non-trigger queries in the HTML viewer
3. Edit at least **3 queries** you disagree with — add context or correct the expected trigger outcome — then export
4. Let the optimizer run for up to 5 rounds
5. Compare the original description with the final one. Answer these questions in a short `EVAL_NOTES.md` file:
   - What was wrong with the original description?
   - What specific change did the optimizer make?
   - The current description hardcodes `trelloapp` — is that a problem? How would you fix it?
   - Would you have caught any of this without the tool?

**Goal:** A validated skill description and a written reflection that shows you understand *why* the description matters for triggering.