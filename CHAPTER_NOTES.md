# Chapter 7 — Skills Evaluation

## The problem with skills

Writing a `SKILL.md` is the easy part. Knowing whether it actually works is harder. How do you know it triggers when it should? How do you know an improved version is genuinely better, or that you haven't broken something that was working?

Gut feeling is not a test. This is the same problem software engineering solved with tests and benchmarks — and Skill Creator v2 applies that same discipline to agent skills.

---

## What is Skill Creator v2?

An installable agent skill from Anthropic, available at **skills.sh**. It guides you through the full skill development lifecycle:

1. **Intent capture and drafting** — clarifying questions about what the skill should do and what good output looks like
2. **Eval test case creation** — structured inputs paired with assertions
3. **Parallel benchmark runs** — with skill vs. without skill, across all test cases simultaneously
4. **Description optimization** — iterating the skill's description to improve trigger accuracy

---

## What's inside

Three built-in sub-agents handle the evaluation pipeline:

| Sub-agent | Role |
|---|---|
| **Analyzer** | Examines benchmark results, explains *why* a skill won, suggests improvements |
| **Comparator** | Blindly compares two outputs without knowing which produced them — avoids bias |
| **Grader** | Scores each output against pre-defined assertions |

Plus: eval scripts, a JSON schema, a Python benchmark runner, and an **HTML eval viewer** for side-by-side human review.

---

## Installation

```bash
npx skills add https://github.com/anthropics/skills --skill skill-creator
```

Choose your agent client target (`.agents/` for Cursor/Copilot). Symlink is recommended — a single source of truth that picks up updates automatically.

---

## How evals work

Each test case has:
- An **input prompt** — the trigger query
- **Assertions** — what the output must include or exclude

The benchmark runs both variants in parallel. Results appear in the HTML eval viewer with pass/fail per assertion and an overall score per test case.

Example results from evaluating `find-missing-testids`:

| Eval | With Skill | Without Skill |
|---|---|---|
| Generic scan | 71% (5/7) | 100% (7/7) |
| Test automation request | 100% (5/5) | 100% (5/5) |
| Testability audit | 100% (5/5) | 100% (5/5) |

A result like the Generic scan row — where the skill underperforms — is valuable information. It tells you the skill is over-constraining the model for that input type, or that the trigger condition is too broad. Evals surface this before it becomes a production problem.

---

## The description optimization loop

The `description` field in a `SKILL.md` is what the agent uses to decide whether to invoke the skill. A vague or too-narrow description causes missed invocations — or false triggers.

The optimization loop:
1. Generates 20 trigger / non-trigger queries
2. Displays them in the HTML viewer for human review and editing
3. Iterates the description up to 5 rounds, measuring accuracy each round

The result is a description that has been empirically validated, not just written by intuition.

---

## Key takeaway

Skills are becoming part of your automation infrastructure. Apply the same rigour you apply to test code: baselines, assertions, regression checks. A benchmarked skill is a reliable part of your pipeline. An untested one is a one-off hack.