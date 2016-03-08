var mongoose = require('mongoose');

var Todo = require('server/db/db').Todo;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.send('Hello');
	// body...
});

module.exports = router;