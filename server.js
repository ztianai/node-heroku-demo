var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + '/html'));

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/api' function(req, res) {
	res.send(req.get('host'));
})

app.listen(port, function() {
	console.log('Our app is running on port: ' + port);
});