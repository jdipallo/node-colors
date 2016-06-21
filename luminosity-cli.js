// luminosity-cli.js
// 
// my first node app that will use require() to use the luminosity function in 
// color-util/colorutils.js

var colorutil = require('./color-utils/colorutil.js');

var argv 	= process.argv;
var r 		= argv[2];
var rLumin	= 0.2126;
var g 		= argv[3];
var gLumin 	= 0.7152;
var b 		= argv[4];
var bLumin 	= 0.0722;

// check to see if user passed in correct arguments to this script
if (r && g && b) {
	console.log(colorutil.luminosity(r, g, b));
}
else {
	console.log("ERROR: Expected: 'node luminosity.js r g b'");
}