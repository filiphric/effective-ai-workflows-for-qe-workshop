#!/usr/bin/env bash
set -euo pipefail

# ── Colors ───────────────────────────────────────────────────────
if [ -t 1 ] && [ "${TERM:-dumb}" != "dumb" ]; then
  RED='\033[0;31m'
  GREEN='\033[0;32m'
  YELLOW='\033[1;33m'
  BOLD='\033[1m'
  RESET='\033[0m'
else
  RED='' GREEN='' YELLOW='' BOLD='' RESET=''
fi

BRANCHES=(
  "main"
  "chapter/01-cursor-basics"
  "chapter/02-prompting-basics"
  "chapter/03-rules"
  "chapter/04-skills"
  "chapter/05-context-engineering"
  "chapter/06-workflow-building"
  "chapter/07-running-agents"
  "chapter/08-evaluations"
)

# Save current branch to return to it later
ORIGINAL_BRANCH=$(git branch --show-current)

# Check for uncommitted changes
if ! git diff --quiet HEAD 2>/dev/null || ! git diff --cached --quiet HEAD 2>/dev/null; then
  printf "${RED}  You have uncommitted changes. Commit or stash them first.${RESET}\n"
  exit 1
fi

printf "\n${BOLD}  Syncing chapter branches...${RESET}\n\n"

for i in "${!BRANCHES[@]}"; do
  # Skip main — it's the root
  [ "$i" -eq 0 ] && continue

  CURRENT="${BRANCHES[$i]}"
  PARENT="${BRANCHES[$i-1]}"

  printf "  ${BOLD}%s${RESET} onto ${BOLD}%s${RESET} ... " "$CURRENT" "$PARENT"

  git checkout "$CURRENT" --quiet

  if git rebase "$PARENT" --quiet 2>/dev/null; then
    git push --force-with-lease --quiet
    printf "${GREEN}ok${RESET}\n"
  else
    printf "${RED}conflict!${RESET}\n"
    git rebase --abort 2>/dev/null
    printf "\n${YELLOW}  Rebase of %s onto %s has conflicts.${RESET}\n" "$CURRENT" "$PARENT"
    printf "  Fix manually:\n"
    printf "    git checkout %s\n" "$CURRENT"
    printf "    git rebase %s\n" "$PARENT"
    printf "    # resolve conflicts, then re-run this script\n\n"
    git checkout "$ORIGINAL_BRANCH" --quiet
    exit 1
  fi
done

git checkout "$ORIGINAL_BRANCH" --quiet

printf "\n${GREEN}  All chapters synced.${RESET}\n\n"
