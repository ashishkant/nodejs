var http = require('http');
var dt=require('./moduleone');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write('called Module data is : '+dt.hello());
    res.end();
}).listen(9080);