#!/usr/bin/env node
/* eslint-disable */

const path = require('path');
const decomposerize = require(path.join(__dirname, 'dist', 'decomposerize'));

var composeFile = '';
process.stdin.on('data', function(d) {
    composeFile += d;
}).on('end', function() {
	console.log(decomposerize(composeFile));
}).setEncoding('utf8');
