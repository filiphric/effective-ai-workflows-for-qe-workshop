#!/usr/bin/env node
const { execFileSync } = require('child_process');
const path = require('path');

const scriptsDir = path.join(__dirname, '..', 'scripts');
const args = process.argv.slice(2);
const command = args[0];

const commands = {
  start: { script: 'setup.sh', args: ['start'] },
  reset: { script: 'setup.sh', args: ['reset'] },
  check: { script: 'setup.sh', args: ['check'] },
  verify: { script: 'setup.sh', args: ['verify'] },
  setup: { script: 'setup.sh', args: [] },
  chapter: { script: 'chapter.sh', args: args.slice(1) },
};

function usage() {
  console.log(`
  Usage: workshop <command>

  Commands:
    setup           Run the workshop setup
    start           Start the application
    reset           Reset the application (clear database)
    check           Check ports (3000 & 3001)
    verify          Verify setup
    chapter <n>     Switch to a chapter branch

  Examples:
    workshop setup
    workshop start
    workshop chapter 3
`);
  process.exit(1);
}

if (!command || !commands[command]) {
  usage();
}

const { script, args: scriptArgs } = commands[command];
const scriptPath = path.join(scriptsDir, script);

try {
  execFileSync('bash', [scriptPath, ...scriptArgs], { stdio: 'inherit' });
} catch (err) {
  process.exit(err.status || 1);
}
