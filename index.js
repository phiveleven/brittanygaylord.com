/* node index.js &  */
var PORT = 1511,
	util = require('util'),
	path = require('path'),
	express = require('express');

var app = express();
app.configure(function(req, res, next) {
    app.use(express.static(__dirname));
});

app.listen(PORT);
util.log('Running server on localhost:'+PORT);
