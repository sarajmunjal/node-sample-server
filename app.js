var express = require('express');
var json = require('./response.json');
var app = express();

app.get('/dummyApi/', function (req, res) {
	res.status(json.status);
	var headersObject = json.headers;
	var headerKeys = Object.keys(headersObject);
	for (var i = headerKeys.length - 1; i >= 0; i--) {
		var key = headerKeys[i];
		var obj = headersObject[key];
		res.append(key,JSON.stringify(obj));
	};
  	res.json(json.data);
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});