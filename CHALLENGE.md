# Chapter 1 Challenges — Cursor Basics

---

## ⭐ Level 1 — Repeat it

**Tab completion**
Open an existing test file. Start typing a new test and let Cursor's tab completion finish it. Accept at least 3 suggestions.

**Chat: add a test**
Use the chat to add a test for creating a new list. Reference the relevant component files as context.

**Inline edit**
Select two or more tests and use inline edit to refactor them into a single test using test steps.

---

## ⭐⭐ Level 2 — Variation

**Tab completion**
Rename a `getByTestId` locator across multiple tests. Change the first occurrence manually and use tab completion to propagate the change.

**Chat: add a test**
Use the chat to write a test that deletes a card. Reference the relevant component to understand the interaction flow.

**Inline edit**
Select a test and use inline edit to add a `test.beforeEach` hook that navigates to the board before each test.

---

## ⭐⭐⭐ Level 3 — Go further

**Chat: fix a broken test**
Manually introduce a bug into one of your tests — wrong selector, missing step, or broken assertion. Then use only the Cursor chat to diagnose and fix it, referencing the component and the Playwright error output as context. Do not edit the test directly yourself.

**Inline edit: add error handling**
Pick a test that creates a new card. Use inline edit to add an assertion that verifies what happens when you attempt to submit the card form with an empty title — without looking at the component source first. Then reference the component (`CardCreateInput.tsx`) and use inline edit again to correct any assumptions you got wrong.