---
allowed-tools: Bash(git checkout --branch:*), Bash(git add:*), Bash(git status:*), Bash(git push:*), Bash(git push --tags:*), Bash(git commit:*), Bash(git tag:*), Bash(npm version:*), Bash(gh pr create:*), Bash(gh release create:*), Bash(node:*)
description: Commit, push, and open a PR (with optional versioned release)
---

## Context

- Current git status: !`git status`
- Current git diff (staged and unstaged changes): !`git diff HEAD`
- Current branch: !`git branch --show-current`
- Current version: !`node -p "require('./package.json').version"`

## Your task

Before doing anything else, ask the user two questions (in a single message):
1. Should this commit include a versioned release? (yes/no)
2. If yes: should the version bump be patch, minor, or major?

Wait for their answer, then proceed:

**If no release:**
1. Create a new branch if on main
2. Create a single commit with an appropriate message
3. Push the branch to origin
4. Create a pull request using `gh pr create`

**If yes release:**
1. Create a new branch if on main
2. Bump the version in package.json using `npm version <patch|minor|major> --no-git-tag-version`
3. Create a single commit that includes the version bump, with message format: `chore: release v<new-version>`
4. Push the branch to origin
5. Create a git tag: `git tag v<new-version>`
6. Push the tag: `git push --tags`
7. Create a GitHub release: `gh release create v<new-version> --generate-notes`
8. Create a pull request using `gh pr create`

Do all steps for the chosen path in a single message after receiving the user's answers.
No newline at end of file
