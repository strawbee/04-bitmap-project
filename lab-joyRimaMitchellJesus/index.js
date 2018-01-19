'use strict';

// const reader = require('./lib/reader');
// const transform = require('./lib/transform');
// const bitmap = require ('./lib/bitmap');
const fs = require('fs');

function ReadBitmap(buffer) {
  this.allData = buffer;
  this.sig = buffer.toString('utf-8', 0, 2);
  this.fileSize = buffer.readUInt32LE(2);
  this.offset = buffer.readUInt32LE(10);
  this.width = buffer.readUInt32LE(18);
  this.height = buffer.readUInt32LE(22);
  this.pixelArray = buffer.slice(54, this.offset);
}

function invert() {
  fs.readFile('./asset/bitmap.bmp', (err, data) => {
    if (err) console.error(err);

    let bmp = new ReadBitmap(data);

    for (let i = 0; i < bmp.pixelArray.length; i++) {
      bmp.pixelArray[i] = 255 - bmp.pixelArray[i];            
    }

    fs.writeFile('./asset/invert.bmp', bmp.allData, (err) => {
      if (err) console.error(err);
      console.log('invert written');
    });
  });
}
invert();

function greyscale() {
  fs.readFile('./asset/bitmap.bmp', (err, data) => {
    if (err) console.error(err);

    let bmp = new ReadBitmap(data);

    for (let i = 0; i < bmp.pixelArray.length / 4; i += 4) {
      let grey = (bmp.pixelArray[i] + bmp.pixelArray[i + 1] + bmp.pixelArray[i + 2]) / 3;
      bmp.pixelArray[i] = grey;
      bmp.pixelArray[i + 1] = grey;
      bmp.pixelArray[i + 2] = grey;
    }

    fs.writeFile('./asset/greyscale.bmp', bmp.allData, (err) => {
      if (err) console.error(err);
      console.log('greyscale written');
    });
  });
}
greyscale();

function randomize() {
  fs.readFile('./asset/bitmap.bmp', (err, data) => {
    if (err) console.error(err);

    let bmp = new ReadBitmap(data);

    for (let i = 0; i < bmp.pixelArray.length; i++) {
      bmp.pixelArray[i] = Math.floor(Math.random() * Math.floor(255));
    }
    
    fs.writeFile('./asset/randomize.bmp', bmp.allData, (err) => {
      if (err) console.error(err);
      console.log('randomize written');
    });
  });
}
randomize();