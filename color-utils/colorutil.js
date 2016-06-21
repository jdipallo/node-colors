var rLumin		= 0.2126;
var gLumin 		= 0.7152;
var bLumin 		= 0.0722;
var darkenCoef 	= 0.20;

function luminosity(r, g, b) {
	return (rLumin * r) + (gLumin * g) + (bLumin * b);
}

function darken(r, g, b) {
	var rDark = r - (r * darkenCoef);
	var gDark = g - (g * darkenCoef);
	var bDark = b - (b * darkenCoef);

	return rDark + ' ' + gDark + ' ' + bDark;
}

module.exports = {
	luminosity: luminosity,
	darken    : darken
}