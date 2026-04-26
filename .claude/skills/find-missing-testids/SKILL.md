---
name: find-missing-testids
description: Scan the trelloapp code for interactive elements that are missing a data-testid attribute. Use when preparing the app for test automation or auditing testability coverage.
context: fork
agent: Explore
---

Scan the trelloapp code for all interactive HTML elements.

Your job is to find every element that:
- Is interactive: button, input, select, textarea, a (anchor), or any element with an onClick / onChange handler
- Is missing a `data-testid` attribute

## How to search

1. Use Glob to find all component files: `src/**/*.{tsx,jsx,vue,html}`
2. Use Grep to find elements: search for `<button`, `<input`, `<select`, `<textarea`, `<a `, `onClick=`, `onChange=`
3. For each match, check whether `data-testid` appears on the same element
4. If `data-testid` is absent — record it

## What to return

Return a markdown list grouped by file. For each missing element include:
- The file path
- The line number
- The element type
- A suggested testid value (use kebab-case, derived from the element's visible label, aria-label, name, or surrounding context)

Example:

```
## src/components/LoginForm.tsx

- Line 24 — `<button>` — suggested: `data-testid="login-submit-button"`
- Line 31 — `<input type="email">` — suggested: `data-testid="login-email-input"`
```

Keep the output concise. Do not include elements that already have `data-testid`.