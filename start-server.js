#!/usr/bin/env node

// Polyfill for toReversed in Node.js < 20
if (!Array.prototype.toReversed) {
  Array.prototype.toReversed = function() {
    return [...this].reverse();
  };
}

// Polyfill for styleText in Node.js < 18.4.0
const util = require('util');
if (!util.styleText) {
  util.styleText = function(color, text) {
    // Simple color mapping for basic colors
    const colors = {
      red: '\x1b[31m',
      green: '\x1b[32m',
      yellow: '\x1b[33m',
      blue: '\x1b[34m',
      magenta: '\x1b[35m',
      cyan: '\x1b[36m',
      white: '\x1b[37m',
      gray: '\x1b[90m',
      grey: '\x1b[90m',
      black: '\x1b[30m',
      redBright: '\x1b[91m',
      greenBright: '\x1b[92m',
      yellowBright: '\x1b[93m',
      blueBright: '\x1b[94m',
      magentaBright: '\x1b[95m',
      cyanBright: '\x1b[96m',
      whiteBright: '\x1b[97m',
      dim: '\x1b[2m',
      bold: '\x1b[1m',
      reset: '\x1b[0m'
    };

    const reset = '\x1b[0m';
    const colorCode = colors[color] || '';

    return colorCode + text + reset;
  };
}

console.log('🚀 Starting Metro server with polyfills');

// Now start the React Native CLI
require('@react-native-community/cli');