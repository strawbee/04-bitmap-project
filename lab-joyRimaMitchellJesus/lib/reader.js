'use strict';

const fs = require('fs');
const bitmap = require('./bitmap');
const trans = require('./transform');
const reader = module.exports = {};

reader.read = function() {
  // read a file
  fs.readFile('./asset/bitmap.bmp', (err, data) => {
    if (err) console.error(err);

    // read BMP
    let bmp = new bitmap.bitmap(data);
    console.log('bmp -> ' + bmp);
    console.log('pixelArr length -> ' + bmp.pixelArray.length);

    // transform image
    // if inverse
    //let inverseBmp = trans.invert(bmp);
    // if greyscale
    //let gsBmp = trans.greyscale(bmp);
    // if randomize
    let randomBmp = trans.randomize(bmp);

    // write a new file
    fs.writeFile('./asset/randomizeTmp.bmp', randomBmp.allData, (err) => {
      if (err) console.error(err);
      console.log('written');
    });
  });
};
