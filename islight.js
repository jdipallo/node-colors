// luminosity.js
// return luminosity given r g b cli arguments

var argv 	= process.argv;
var r 		= argv[2];
var rLumin	= 0.2126;
var g 		= argv[3];
var gLumin 	= 0.7152;
var b 		= argv[4];
var bLumin 	= 0.0722;

var lightCoef = 155;

// check to see if user passed in correct arguments to this script
if (r && g && b) {
	var lumin = luminosity(r, g, b);
	if (lumin > lightCoef) {
		console.log('light');
	}
	else {
		console.log('dark');
	}
}
else {
	console.log("ERROR: Expected: 'node luminosity.js r g b'");
}

function luminosity(r, g, b) {
	return (rLumin * r) + (gLumin * g) + (bLumin * b);
}