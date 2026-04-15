---
layout: cover
---

Chapter #4:
# MCP Basics

---
layout: default
---

# What you’ll learn
- What is MCP and why it's important
- How to install MCP in Cursor
- Security considerations
- How to use Playwright MCP

---
layout: default
---

# What is MCP?

- Model Context Protocol
- standardized way to interact with AI applications
- mostly used for fetching data or triggering actions
- but will do so much more!

<!-- 
- MCP stands for model context protocol which is kind of a funny name, almost as if we called webpages "https"
- basically, it’s a stardard for creating AI applications (Claude, Cursor, ChatGPT, Goose,...) - the idea is that you build one MCP and it could be used in all these clients
- these days it is mostly used for fetching some data from some resource, or triggering an action
- but it will do so much more
- right now, you can have an MCP for Linear and fetch a task which AI can read and in Cursor you can implement it - almost like when an application makes an API call
- but if you go to MCP documentation, you’ll be able to see that there are various features, and not all the clients support them all - https://modelcontextprotocol.io/clients
- so MCPs will be able to ask you for approval to do a certain action, ask for details, prompt AI in the background, do an AI powered search 
- what’s probably most exciting to me is that there’s a team that’s working on mcp-ui - this is an MCP that will instead of a text response render a whole UI and return it back to you. for example you’ll ask "which of my recent tests were flaky?" and you’ll get back a graphical representation with all the important information
- or you can go to a shopify powered store, say you want to buy red shoes, and complete the whole flow in chatGPT or Claude, including payment
- I included some resources in the notes if you are interested in more details on mcp-ui
-->

---
layout: center
---

# Demo

<!-- 

## Installing MCP
> Demo: go to cursor docs and add playwright MCP
- there are actually two playwright MCPs, Cursor’s official page is a good source to trust
- when it comes to MCP server, they can be tricky when it comes to security. there are three ways MCPs servers can run
  - either they run on a remote server, which means that if they change, your AI might not figure out that it should not use the updated tools
  - they can run locally - you download and everything runs on your machine, but this also means that mcp might be allowed to go through your file system - cursor is intelligent enough to not give access to like env variables, but I’d be careful
  - the third way is usually through npx command, which is also not considered secure, because you are essentially running an executable on your machine that could do more than you want
- when you use an MCP make sure it is one that you trust

> Demo: Show MCP tools
- you can enable/disble mcp tools by clicking
- open new chat and open browser

> Demo: Convert test cases into tests by first running them with Playwright MCP

**Prompts:**
```
open browser and execute these test cases one by one. gather information along the way, about selectors, apis and data management.

after you go through all of these test cases, create a new spec file in the tests folder and implement these test cases. 

be mindful of the preconditions and split the tests into multiple describe blocks if any test requires a different setup.

use api calls to seed any data needed.

refer to @playwright.config.ts for more info about the project
```

> Demo: Debugging
- AI, like humans, is not perfect. sometimes it makes mistakes
- the really cool thing about Playwright MCP is that it can help you debug
- we used the playwright browser to explor the application and then write our test script
- now we can flip the order and use our test script to inform the browser what to do

**Prompt:**
```
this test is failing. run the browser and take snapshots and screenshots to identify the root cause. don’t implement it yet but give me a short explanation and ask me to confirm the test fix.

The app is already running, you can access it at http://localhost:3000
```

-->
