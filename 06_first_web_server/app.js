// get the core http module and the file module
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){

    // create a response to send
    res.writeHead(200, { 'Content-Type': 'text/html' }); 
    // get the content to the file
    // I want to manipulate it as a string so I add utf-8
    var html = fs.readFileSync(__dirname + '/index.html', 'utf-8');
    var message = 'Web server here';
    html = html.replace('{message}', message);
    res.end(html);

}).listen(1337, '127.0.0.1');

