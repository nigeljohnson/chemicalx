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
			<h1 class="nope__camel">Not Angular App just angular, so far</h1>\
			<script src="bundle.js"></script>\
			</body>\
			</html>\
		');
});

var port = process.env.port || 3000;

app.listen(port, function() {
console.log('From server.js using', port);

});