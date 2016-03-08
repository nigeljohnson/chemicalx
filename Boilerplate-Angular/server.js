var express = require('express');
var app = express();

// require routes

var routes = require('server/routes')
routes(app);

app.all('/*', function (req, res) {
	res.send('\
			<!DOCTYPE html>\
			<html>\
			<head>\
				<title></title>\
				<base href="/">\
				<meta name="viewport" content="width=device-width, initial-scale=1.0">\
			</head>\
			<body>\
				<div ui-view></div>\
			<h1 class="nope__camel">From Server.js</h1>\
			<script src="bundle.js"></script>\
			</body>\
			</html>\
		');
});

var port = process.env.port || 3000;

app.listen(port, function() {
console.log('From server.js using', port);

});