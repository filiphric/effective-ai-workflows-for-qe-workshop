# Challenge — Code Governance

## ⭐ Level 1 — Repeat it

Set up Qodo on the workshop repo and trigger a review on a Playwright pull request.

1. Install the Qodo Git Plugin on your GitHub account: https://github.com/apps/qodo-gen
2. Create a feature branch in the workshop repo with a new test file that contains at least **two deliberate issues** from this list:
   - A `waitForTimeout` call
   - A class-based or ID-based selector (e.g. `page.locator('.btn-primary')`)
   - An assertion that only checks the URL (`toHaveURL`) with nothing else
   - A `locator()` call where `getByRole` or `getByLabel` would apply
3. Open a pull request from your branch into main
4. Trigger a Qodo review by commenting `@qodo-gen review` on the PR (or wait for auto-review if configured)
5. Screenshot or copy the review findings

**Goal:** Qodo identifies at least one of your deliberate issues and explains why it's a problem.

---

## ⭐⭐ Level 2 — Variations

Create a custom Playwright-specific rule in Qodo and verify it gets enforced on a new PR.

1. Navigate to the Qodo rules portal and create a new rule based on one of these:
   - **No raw waits** — flag any use of `waitForTimeout` and suggest a semantic alternative
   - **Prefer role-based selectors** — flag `locator()` calls that use CSS selectors or IDs
   - **Require content assertions** — flag tests that only use `toHaveURL` without a content-level assertion
2. Write the rule description clearly — include what the violation looks like and what the fix should be
3. Open a new PR that violates your rule
4. Confirm Qodo surfaces a finding that references your rule specifically

**Goal:** A custom rule you wrote enforces itself automatically on a real PR.

---

## ⭐⭐⭐ Level 3 — Go further

Audit your existing Playwright test suite through Qodo and produce a governance report.

1. If you have an existing Playwright test suite (from this workshop or your own project), open a PR that touches multiple test files
2. Review Qodo's findings across the PR — group them by issue type:
   - Flakiness risks
   - Selector quality
   - Assertion depth
   - Convention violations
3. Identify the **most common pattern** in the findings — this is a candidate for a standing rule
4. Create that rule in Qodo
5. Write a short governance report (`GOVERNANCE.md`) that includes:
   - The top 3 issues found in your test suite
   - The rule(s) you created to address them
   - An estimate of how many PRs per week this would have caught, based on your team's current velocity

**Goal:** A written governance report and at least one rule derived from real findings in your codebase.