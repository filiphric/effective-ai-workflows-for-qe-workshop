# Chapter 5 Challenge: Context Engineering

## ⭐ Level 1 — Repeat It

**Explore the context window playground.**

Visit the Claude Code context window explorer:
👉 https://code.claude.com/docs/en/context-window#explore-the-context-window

Use the interactive playground to observe how different inputs contribute to the total context size:

- Add a user message — how many tokens does it cost?
- Enable a tool — what does that add?
- Attach a file — how does size vary with content length?

**Goal:** build an intuition for what fills the context window and how quickly it adds up in a real agent session.

---

## ⭐⭐ Level 2 — Variations

**Audit a real conversation's context usage.**

Pick a previous conversation from either **Cursor** or **Claude Code** where you asked an agent to help with something non-trivial.

- In **Claude Code**: run `/context` to inspect what's currently loaded
- In **Cursor**: check the context indicator in the chat panel

Look at what made it into the context:
- How many tokens were used?
- What files, tools, or history were included?
- Were there things in context that weren't relevant to the task?

**Goal:** move from theory to observation — see exactly how a real session consumes context, and spot opportunities to have kept it leaner.

---

## ⭐⭐⭐ Level 3 — Go Further

**Build a context window progress bar using `/statusline`.**

Claude Code lets you customise the status line shown in your terminal via the `/statusline` command.

Your challenge: use it to display a **live progress bar** for your context window usage — so you can see at a glance how close you are to the limit while working.

Research the `/statusline` command in the Claude Code docs, figure out what data is available, and build something that gives you a useful at-a-glance signal before you drift out of the smart zone.

**Goal:** turn context awareness from a manual check into a passive, always-visible indicator in your workflow.