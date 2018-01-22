#Documentation

====================== BITMAP APP ======================
            By: Joy, Rima, Mitchell, & Jesus
               Code Fellows JavaScript 401

                       [ HOW TO ]
1. From the lab-joyRimaMitchellJesus folder:
    run npm install

2.  run node in your terminal

3.  In the node REPL run the following line:
    const reader = require('./lib/reader');

5. Transform bitmap images using the following format:

   reader.read(input-path, output-path, transform-name);

   All arguments should be strings.

              [ AVAILABLE TRANSFORM NAMES ]
              invert, greyscale, randomize

    example:> reader.read('./asset/bitmap.bmp', 'invert');

6. enjoy your transformed photo!

#Modules
reader.read(input-path, output-path, transform-name);
    -reads file, if there is an error the error is logged.
    -takes the data passes it to bitmap.bitmap to create an image object.
    -validates for valid transform name.
    -writes the file to the location determined by the user.
    -lets user know if the write was succesful and the location of their transformed image.

bitmap.bitmap(data)
    -takes in buffer data from the reader module and converts the data into an image object.
    -The image object has the following properties:
        *allData = raw buffer data from the image
        *sig = the bmp signature
        *fileSize = the file size in bytes
        *offset = Denotes the end location of the color table and where the pixel array begins.
        *pixelArray = creates a shortcut to directly modify the color table

transform.invert(data)
    -takes in the new image object and uses the color table data
    -modifies the color table data to its opposite in the color spectrum
    -returns the modified object

transform.greyscale(data)
    -takes in the new image object and uses the color table data
    -modifies the color table data make it all grey scale
    -returns the modified object

transform.randomize(data)
    -takes in the new image object and uses the color table data
    -modifies the color table one pixel at a time to a random number
    -returns the modified image object


#Tests
reader.test.js
    -Test 1: Checks to make sure the arguements are strings
    -Test 2: Checks for valid input paths
    -Test 3: Checks for a valid output path
    -Test 4: Checks for a valid transform name
    -Test 5: Checks checks that new file is written to the output path

bitmap.test.js
    -Test 1: Checks that bmp is not undefined
    -Test 2: Checks that bmp is not NULL
    -Test 3: Checks that bmp is an object
    -Test 4: Checks that bmp.allData is an object
    -Test 5: Checks that bmp.AllData.sig is a string
    -Test 6: Checks that bmp.fileSize is a number
    -Test 7: Checks that bmp.offset is a number
    -Test 8: Checks that bmp.width is a number
    -Test 9: Checks that bmp.height is a number
    -Test 10: Checks that bmp.pixelArray is an object

transform.test.js
    -Test 1: Checks to make sure  the invert method works correctly
    -Test 2: Checks to make sure the pixel array data is a bitmap
    -Test 3: Checks to throw error if bitmap has no pixel array
    -Test 4: Checks to make sure the grayscale method works correctly
    -Test 5: Checks to make sure the randomize method has valid inputs
    -Test 6: Checks to make sure the bitmap data has a pixel array


