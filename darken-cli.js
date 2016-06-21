// darken-cli.js
// 
// calls darken from the colorutil.js to get rgb values
// back 20% darker

var colorutil = require('./color-utils/colorutil.js');

var argv 	= process.argv;
var r 		= argv[2];
var g 		= argv[3];
var b 		= argv[4];

// check to see if user passed in correct arguments to this script
if (r && g && b) {
	console.log(colorutil.darken(r, g, b));
}
else {
	console.log("ERROR: Expected: 'node luminosity.js r g b'");
}