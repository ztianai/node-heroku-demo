var express = require('express');
var app = express();

var port = 8080;

app.get('/', function(req, res) {
	res.send("hello there...");
});

app.listen(port, function() {
	console.log('Our app is running on port: ' + port);
});