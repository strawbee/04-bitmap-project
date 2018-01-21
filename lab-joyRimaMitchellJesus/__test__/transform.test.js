'use strict';

const fs = require('fs');
const bm = require('../lib/bitmap');
const trans = require('../lib/transform');



describe('Index module', function(){
  describe('invert function', function(){
    describe('valid inputs', function(){
      test(
        'should be same data', () => {
          
        // get data of bitmap.bmp
          let bmpData = new bm.bitmap(fs.readFileSync('__test__/asset/bitmap.bmp'));
          // get data of invert.bmp
          let invertData = new bm.bitmap(fs.readFileSync('__test__/asset/invert.bmp'));
          // invert bitmap.bmp data
          let newInvertData = trans.invert(bmpData);

          expect(newInvertData).toEqual(invertData);
        });
    });
  });
  describe('greyscale function', function(){
    describe('valid inputs', function(){
      test(
        'should be same data', () => {
          
        // get data of bitmap.bmp
          let bmpData = new bm.bitmap(fs.readFileSync('__test__/asset/bitmap.bmp'));
          // get data of greyscale.bmp
          let gsData = new bm.bitmap(fs.readFileSync('__test__/asset/greyscale.bmp'));
          // greyscale bitmap.bmp data
          let newGsData = trans.greyscale(bmpData);

          expect(newGsData).toEqual(gsData);
        });
    });
  });
  describe('randomize function', function(){
    describe('valid inputs', function(){
      test(
        'should be different data', () => {
          
        // get data of bitmap.bmp
          let bmpData = new bm.bitmap(fs.readFileSync('__test__/asset/bitmap.bmp'));
          // get data of randomize.bmp
          let randomizeData = new bm.bitmap(fs.readFileSync('__test__/asset/randomize.bmp'));
          // invert randomize.bmp data
          let newRandomizeData = trans.randomize(bmpData);

          expect(newRandomizeData).not.toEqual(randomizeData);
        });
    });
  });
});
