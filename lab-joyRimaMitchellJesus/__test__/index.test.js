'use strict';

const fs = require('fs');
const trans = require('../index.js');



describe('Index module', function(){
  describe('invert function', function(){
    describe('valid inputs', function(){
      test(
        'should be same data', () => {
          
        // get data of bitmap.bmp
        let bmpData = new trans.ReadBitmap(fs.readFileSync('__test__/asset/bitmap.bmp'));
        // get data of invert.bmp
        let invertData = new trans.ReadBitmap(fs.readFileSync('__test__/asset/invert.bmp'));
        // invert bitmap.bmp data
        let newInvertData = trans.invert(bmpData);

        expect(newInvertData).toEqual(invertData);
      });
    });
  });
});
