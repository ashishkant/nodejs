var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    res.end('<h1>Welcome</h1>');
}).listen(9080);