#!/usr/bin/env node

// Polyfill for toReversed in Node.js < 20
if (!Array.prototype.toReversed) {
  Array.prototype.toReversed = function() {
    return [...this].reverse();
  };
}

console.log('🚀 Starting Metro server with polyfill...');

// Import and run the CLI
const { runCLI } = require('@react-native-community/cli');

const args = process.argv.slice(2);
if (args.length === 0) {
  args.push('start', '--host', '0.0.0.0', '--port', '8082');
}

runCLI(args).catch((error) => {
  console.error('Metro server error:', error);
  process.exit(1);
});