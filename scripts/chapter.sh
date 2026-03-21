#!/usr/bin/env bash
set -euo pipefail

# ── Colors ───────────────────────────────────────────────────────
if [ -t 1 ] && [ "${TERM:-dumb}" != "dumb" ]; then
  RED='\033[0;31m'
  GREEN='\033[0;32m'
  YELLOW='\033[1;33m'
  BOLD='\033[1m'
  DIM='\033[2m'
  RESET='\033[0m'
else
  RED='' GREEN='' YELLOW='' BOLD='' DIM='' RESET=''
fi

CHAPTERS=(
  "01-cursor-basics"
  "02-prompting-basics"
  "03-rules"
  "04-skills"
  "05-context-engineering"
  "06-workflow-building"
  "07-running-agents"
  "08-evaluations"
)

usage() {
  printf "\n"
  printf "${BOLD}  Usage:${RESET} bash scripts/chapter.sh <number>\n"
  printf "\n"
  printf "  ${BOLD}Available chapters:${RESET}\n"
  for ch in "${CHAPTERS[@]}"; do
    printf "    ${DIM}%s${RESET}\n" "$ch"
  done
  printf "\n"
  printf "  ${BOLD}Example:${RESET} bash scripts/chapter.sh 3\n"
  printf "\n"
  exit 1
}

if [ -z "${1:-}" ]; then
  usage
fi

NUM=$(printf "%02d" "$1" 2>/dev/null) || usage

# Find matching chapter
BRANCH=""
for ch in "${CHAPTERS[@]}"; do
  if [[ "$ch" == "$NUM"* ]]; then
    BRANCH="chapter/$ch"
    break
  fi
done

if [ -z "$BRANCH" ]; then
  printf "${RED}  Chapter %s not found.${RESET}\n" "$1"
  usage
fi

# Stash any uncommitted changes
if ! git diff --quiet HEAD 2>/dev/null || ! git diff --cached --quiet HEAD 2>/dev/null; then
  printf "${YELLOW}  Stashing your uncommitted changes...${RESET}\n"
  git stash push -m "auto-stash before switching to $BRANCH"
fi

# Switch to the chapter branch
printf "  Switching to ${BOLD}%s${RESET}...\n" "$BRANCH"
git checkout "$BRANCH"

printf "${GREEN}  Ready! You're now on %s${RESET}\n" "$BRANCH"
printf "\n"
