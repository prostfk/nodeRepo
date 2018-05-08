// first http project on node.js
var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request,response) {
	response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
	var content = fs.createReadStream(__dirname + "/index.html", "utf8");
	content.pipe(response);

});

server.listen(3001, '127.0.0.1');
console.log('port 3000 is using now');
