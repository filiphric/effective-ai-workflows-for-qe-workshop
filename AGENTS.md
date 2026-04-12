# Effective AI workflows for QE - Workshop

This repository contains workshop materials for the Effective AI workflows for QE workshop. The workshop is split into chapters and contains an application that the participants will test. The application is a clone of Trello, a project management tool.

# setup.sh
This script serves as the entry point for the workshop. It will take care of the installation, check dependencies, and start the application. There are two versions, one for bash and other for powershell.

# Repository URLs
All setup scripts reference `github.com/filiphric/effective-ai-workflows-for-qe-workshop`. The Trello app (`trelloapp/`) intentionally uses a separate repo: `github.com/filiphric/trelloapp-workshop-app`.

# Sync scripts
These are service scripts for repository maintenance. `sync-chapters.sh` serves to synchronize all the changes of the main branch to all consecutive branches.