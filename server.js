var http = require('http');
var app = require('./app')
http.createServer(app.handleRequest).listen(process.env.PORT || 1337);