---
layout: cover
---

Chapter #3:
# Rules and workflows

---
layout: default
---

# What you’ll learn
- What types of rules there are
- How to create and generate rules
- Recommendations
- How to create and use workflows

---
layout: default
---

# Types of rules

- User rules
- Project rules
- AGENT.md

<!-- 
- rules are attached to the context window, so they are basically another set of instructions that get added everytime you prompt Cursor
- User rules are set in settings, applied across all projects
- project rules are saved in `.cursor/rules` folder, applied only to the project, but there are different ways of how these rules can be applied - these are saved as `.mdc` files
- AGENT.md is sort of like a README file. It covers the basic information about a project, so stuff like how to run how to run your tests, how to seed your database, code style guidelines and so on 
- it is an effort to unify basic instructions for users so that if within your team some people use Cursor, some use Windsurf, they can all have a common starting point

-->

---
layout: center
---

# Demo

<!-- 
## Rules
- there are rules on the internet that you can download, but same as prompt engineering, it can turn into a little bit of an alchemy
- my suggestion is to always reverse-engineer your rules + experiment
- so build your rules based on what you know works
- rules are basically abstractions - you want to not repeat yourself when you prompt AI to do something - and as with all abstractions, you don’t want to start to apply them before they make sense

### Demo
- go to settings and show user rules
- go to project rules
- describe types of rules
```
---
globs: **/*.spec.ts
alwaysApply: false
---
Locator Strategy
Priority Order:

1. data-testid attributes (preferred)
2. role with accessible names
3. Stable CSS selectors
4. Text content (only for unique, stable text)
```
> Demo: apply rule to 03_rules_and_workflows.spec.ts and then do it again but delete data-id from Emptylist.vue component

## Workflows
- workflows are similar to rules, but they are more of an step by step set of instructions for AI to follow
- they make more sense when you have a specific task ahead of you - remember, you don’t want to push too much irrelevant information into your context window
- workflows are a great way to force AI into repeat a certain pattern, but also have some leeway to adjust to the task at hand
- playwright has a very nice doc on fixtures: https://playwright.dev/docs/test-fixtures
- we can generate a worflow file according to this, let’s use claude

**Prompt:**
```
Create a markdown file that will serve as a blueprint for creating a page object model file in Playwright e2e test. This will be an instruction for an AI coding agent such as Cursor or Claude Code. I want you to implement page objects model files as a fixtures as described on this page https://playwright.dev/docs/test-fixtures
```

> Demo: rewrite the test once again to use the workflow file
-->