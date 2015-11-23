var express = require('express');
var http = require('http');
var app = express();

http.createServer(app.listen(8080));

app.get('/', function(req, res) {
	res.send("hello there...");
});

app.listen = function() {
	var server = http.createServer.(this);
	return server.listen.apply(server, arguments);
}