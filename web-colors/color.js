// color.js
//
// using the request node module, grab web colors in a JSON format 
// from github
// 
// then we will will call JSON.parse() to get the JSON in a workable
// javascript array
// 
// with this, we will take the argument passed into this module and
// search for a matching color returning the appropriate R, G, B corresponding
// value

var color = process.argv[2];

if (color) {
	var request = require('request');

	// create HTTP GET request to grab a JSON of all web colors from a github user
	request.get("https://gist.githubusercontent.com/raineorshine/10394189/raw/9b8b43edda19d7fa317a18018b0fa619b53c1e8f/webcolors.json", 
		function(err, response, body) {
			if (err) {
				console.log("Error : ", err)
				return;
			}
			else { 
				// call JSON.parse() to turn our response string into a javascript object
				// console.log(body);
				var json = JSON.parse(body);

				for (var i = 0; i < json.length; i++) {
					if (color.toLowerCase() === json[i].name.toLowerCase()) {
						console.log(json[i].rgb.r + ' ' + json[i].rgb.g + ' ' + json[i].rgb.b);
					}
				}
			}
		}
	);
}
else {
	console.log("ERROR: Expected: 'node color.js somewebcolor'");
}