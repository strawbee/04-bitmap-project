'use strict';

const fs = require('fs');
const bitmap = require('./bitmap');
const trans = require('./transform');
const reader = module.exports = {};

reader.read = (inputPath, outputPath, transformName) => {
  fs.readFile(inputPath, (err, data) => {
    if (err) console.error(err);

    // read BMP
    let bmp = new bitmap.bitmap(data);

    // setup and error validation for transform
    let transformBmp;
    if (transformName === 'invert' || transformName === 'inverse') transformBmp = trans.invert(bmp);
    else if (transformName === 'greyscale' || transformName === 'grayscale') transformBmp = trans.greyscale(bmp);
    else if (transformName === 'randomize' || transformName === 'random') transformBmp = trans.randomize(bmp);
    else {
      console.log('You have entered an invalid transform name. The parameters to this function are inputPath, outputPath, and transformName, where valid transform names are invert, greyscale, and randomize.');
      return;
    }

    // transform BMP
    fs.writeFile(outputPath, transformBmp.allData, (err) => {
      if (err) console.error(err);
      console.log(`Your bitmap at ${inputPath} has been modified using our ${transformName} function. The modified bitmap has been written to to ${outputPath}.`);
    });
  });
};