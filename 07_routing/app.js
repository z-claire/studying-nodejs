var fs = require('fs');
var http = require('http');

http.createServer(function(req, res){
    // add some conditions for the routing
    // in the main page show the html file
    if (req.url == '/') {
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    // in the /api url show the json
    else if (req.url == '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' }); 
        var obj = {
            firstname: 'John',
            lastname: 'Doe'
        };
        res.end(JSON.stringify(obj));
    }
    // every other url will send error 404
    else {
        res.writeHead(404);
        res.end();
    }
}).listen(1337, '127.0.0.1');

