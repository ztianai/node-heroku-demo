var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.send(req.url);
});

app.listen(port, function() {
	console.log('Our app is running on port: ' + port);
});