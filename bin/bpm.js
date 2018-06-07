// #!/usr/bin/env node
// /**
//  * Calculate BPM on the command line
//  *
//  * Author: Dave Eddy <dave@daveeddy.com>
//  * License: MIT
//  */

// Requires and such
var BPM = require('../'),
    b = new BPM(),
    path = require('path'),
    util = require('util'),
    keypress = require('keypress'),
    version = require('../package.json').version,
    args = process.argv.slice(2);

/**
 * Usage
 *
 * return the usage message
 */
function usage() {
  return util.format([
    'Usage: %s',
    '',
    'Tap on the command line to calculate BPM',
    '',
    'Options',
    '  --help    | -h: Print this help message and exit',
    '  --version | -v: Print the version number and exit',
    ''
  ].join('\n'), path.basename(process.argv[1]));
}

// Command line arguments
switch (args[0]) {
  case '-h': case '--help':
    console.log(usage());
    process.exit(0);
    break;
  case '-v': case '--version':
    console.log(version);
    process.exit(0);
    break;
}

keypress(process.stdin);

console.log('Tap when ready... ctrl-c to break');
process.stdin.on('keypress', function(c, key) {
  if (key && key.ctrl && key.name == 'c') process.exit(0);
  console.log(b.tap());
});

if (process.stdin.setRawMode) process.stdin.setRawMode(true);
process.stdin.resume();
