var path = require('path');
var express = require('express');

var app = express();

app.use('/css', express.static('css'));
app.use('/src', express.static('src'));
app.use('/bower_components', express.static('bower_components'));

app.get('/', function (req, res) {
	res.sendFile(path.resolve('./index.html'));
});

app.listen(4000, function () {
	console.log('listening to port: 4000');
});
