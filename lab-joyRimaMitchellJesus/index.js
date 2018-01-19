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

function WriteBitmap(buffer) {

}

function joy() {
  fs.readFile('./asset/bitmap.bmp', (err, data) => {
    if (err) console.error(err);

    function transform() {
      let bmp = new ReadBitmap(data);
      let pixelsArray = Object.values(bmp.pixelArray);

      for (let i = 0; i < pixelsArray.length; i++) {
        if (i % 1 === 0) bmp.pixelArray[i] = 140;
        if (i % 2 === 0) bmp.pixelArray[i] = 122;
        if (i % 3 === 0) bmp.pixelArray[i] = 255;
        if (i % 4 === 0) bmp.pixelArray[i] = 100;        
      }
      fs.writeFile('./asset/joy.bmp', bmp.allData, (err) => {
        if (err) console.error(err);
        console.log('transform written');
      });
    }
    transform();
  });
}
joy();


function rima() {
  fs.readFile('./asset/bitmap.bmp', (err, data) => {
    if (err) console.error(err);

    function transform() {
      let bmp = new ReadBitmap(data);
      let pixelsArray = Object.values(bmp.pixelArray);

      for (let i = 0; i < pixelsArray.length; i++) {
        if (i % 1 === 0) bmp.pixelArray[i] = 140;
        if (i % 2 === 0) bmp.pixelArray[i] = 122;
        if (i % 3 === 0) bmp.pixelArray[i] = 255;
        if (i % 4 === 0) bmp.pixelArray[i] = 100;
      }
      fs.writeFile('./asset/rima.bmp', bmp.allData, (err) => {
        if (err) console.error(err);
        console.log('transform written');
      });
    }
    transform();
  });
}
rima();


function mitchell() {
  fs.readFile('./asset/bitmap.bmp', (err, data) => {
    if (err) console.error(err);

    function transform() {
      let bmp = new ReadBitmap(data);
      let pixelsArray = Object.values(bmp.pixelArray);

      for (let i = 0; i < pixelsArray.length; i++) {
        if (i % 1 === 0) bmp.pixelArray[i] = 140;
        if (i % 2 === 0) bmp.pixelArray[i] = 122;
        if (i % 3 === 0) bmp.pixelArray[i] = 255;
        if (i % 4 === 0) bmp.pixelArray[i] = 100;
      }
      fs.writeFile('./asset/mitchell.bmp', bmp.allData, (err) => {
        if (err) console.error(err);
        console.log('transform written');
      });
    }
    transform();
  });
}
mitchell();

function jesus() {
  fs.readFile('./asset/bitmap.bmp', (err, data) => {
    if (err) console.error(err);

    function transform() {
      let bmp = new ReadBitmap(data);
      let pixelsArray = Object.values(bmp.pixelArray);

      for (let i = 0; i < pixelsArray.length; i++) {
        if (i % 1 === 0) bmp.pixelArray[i] = 140;
        if (i % 2 === 0) bmp.pixelArray[i] = 122;
        if (i % 3 === 0) bmp.pixelArray[i] = 255;
        if (i % 4 === 0) bmp.pixelArray[i] = 100;
      }
      fs.writeFile('./asset/jesus.bmp', bmp.allData, (err) => {
        if (err) console.error(err);
        console.log('transform written');
      });
    }
    transform();
  });
}
jesus();