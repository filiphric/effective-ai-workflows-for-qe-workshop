#!/usr/bin/env node
const { execFileSync, spawnSync } = require('child_process');
const path = require('path');

const scriptsDir = path.join(__dirname, '..', 'scripts');
const args = process.argv.slice(2);
const command = args[0];
const isWindows = process.platform === 'win32';

const CHAPTERS = [
  '01-cursor-basics',
  '02-prompting-basics',
  '03-rules',
  '04-skills',
  '05-context-engineering',
  '06-workflow-building',
  '07-running-agents',
  '08-evaluations',
];

const bashCommands = {
  start:  { script: 'setup.sh',  args: ['start'] },
  reset:  { script: 'setup.sh',  args: ['reset'] },
  check:  { script: 'setup.sh',  args: ['check'] },
  verify: { script: 'setup.sh',  args: ['verify'] },
  setup:  { script: 'setup.sh',  args: [] },
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

function chapterUsage() {
  console.log('\n  Usage: workshop chapter <number>\n');
  console.log('  Available chapters:');
  CHAPTERS.forEach(ch => console.log(`    ${ch}`));
  console.log('\n  Example: workshop chapter 3\n');
  process.exit(1);
}

function runChapter(chapterArg) {
  if (!chapterArg) chapterUsage();

  const num = String(parseInt(chapterArg, 10)).padStart(2, '0');
  const chapter = CHAPTERS.find(ch => ch.startsWith(num));

  if (!chapter) {
    console.error(`  Chapter ${chapterArg} not found.`);
    chapterUsage();
  }

  const branch = `chapter/${chapter}`;

  const hasDiff       = spawnSync('git', ['diff',          '--quiet', 'HEAD'], { stdio: 'ignore' }).status !== 0;
  const hasCachedDiff = spawnSync('git', ['diff', '--cached', '--quiet', 'HEAD'], { stdio: 'ignore' }).status !== 0;

  if (hasDiff || hasCachedDiff) {
    console.log('  Stashing your uncommitted changes...');
    execFileSync('git', ['stash', 'push', '-m', `auto-stash before switching to ${branch}`], { stdio: 'inherit' });
  }

  console.log(`  Switching to ${branch}...`);
  execFileSync('git', ['checkout', branch], { stdio: 'inherit' });
  console.log(`  Ready! You're now on ${branch}\n`);
}

if (!command) usage();

if (command === 'chapter') {
  try {
    runChapter(args[1]);
  } catch (err) {
    process.exit(err.status || 1);
  }
  process.exit(0);
}

if (!bashCommands[command]) usage();

if (isWindows) {
  console.error(`  The '${command}' command is not supported on Windows via this CLI.`);
  console.error('  Please use setup.ps1 directly.\n');
  process.exit(1);
}

const { script, args: scriptArgs } = bashCommands[command];
const scriptPath = path.join(scriptsDir, script);

try {
  execFileSync('bash', [scriptPath, ...scriptArgs], { stdio: 'inherit' });
} catch (err) {
  process.exit(err.status || 1);
}
