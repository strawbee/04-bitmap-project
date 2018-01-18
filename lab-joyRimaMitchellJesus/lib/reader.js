'use strict';

const reader = module.exports = {};

reader.read = function() {
  fs.readFile('./assets/bitmap.bmp', (err, data) => {
    let bmp = new bmp(data);
    console.log(bmp)

    console.log(bmp.pixelArray.length);
  })
}