// get the core http module
var http = require('http');

// create a new server object that takes a callback
// this callback is an event listener, called when the server object emits a particular event 
http.createServer(function(req, res){

    // create a response to send
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello world\n');

}).listen(1337, '127.0.0.1');