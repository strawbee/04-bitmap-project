'use strict';

const reader = require('./lib/reader');

console.log(`
====================== BITMAP APP ======================
            By: Joy, Rima, Mitchell, & Jesus
               Code Fellows JavaScript 401

                       [ HOW TO ]
1. From the lab-joyRimaMitchellJesus folder,
   run node in your terminal and enter the following line:
    const reader = require('./lib/reader');

2. Transform bitmap images using the following format:
    reader.read(input-path, output-path, transform-name);

   All arguments should be strings.

              [ AVAILABLE TRANSFORM NAMES ]
              invert, greyscale, randomize
`);