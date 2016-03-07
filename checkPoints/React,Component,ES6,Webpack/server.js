var express = require('express');
var app = express();

app.all('/*', function (req, res) {
	res.send('\
			<!DOCTYPE html>\
			<html>\
			<head>\
				<title></title>\
			</head>\
			<body>\
			<div id="root"> </div>\
			<h1 class="nope__camel">Not The React Part of this app, but were using Webpack and Bable ES6 for structure. YAY!</h1>\
			<script src="bundle.js"></script>\
			</body>\
			</html>\
		');
});

var port = process.env.port || 3000;

app.listen(port, function() {
console.log('From server.js using', port);

});