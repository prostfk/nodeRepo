// first http project on node.js
var http = require('http');
var server = http.createServer(function(request,response) {
	response.writeHead(200, {'Content-Type':'text/plan; charset=utf-8'});
	response.end('Hello, http');
});
server.listen(3001, '127.0.0.1');
console.log('port 3000 is using now');
