var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var port = process.env.PORT || 3000;

app.get('/', function(request, response) {
	response.render('pages/index');
});

app.get('/api/', function(req, res) {
	res.send(req.get('host'));
})

app.listen(port, function() {
	console.log('Our app is running on port: ' + port);
})

