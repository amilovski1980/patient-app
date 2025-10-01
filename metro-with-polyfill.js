#!/usr/bin/env node

// Polyfill for toReversed in Node.js < 20
if (!Array.prototype.toReversed) {
  Array.prototype.toReversed = function() {
    return [...this].reverse();
  };
}

console.log('🚀 Metro server with Node.js polyfill loaded');

// Execute the original CLI command
const { spawn } = require('child_process');
const args = process.argv.slice(2);

const child = spawn('npx', ['react-native', ...args], {
  stdio: 'inherit',
  shell: true
});

child.on('exit', (code) => {
  process.exit(code);
});

child.on('error', (error) => {
  console.error('Failed to start Metro:', error);
  process.exit(1);
});