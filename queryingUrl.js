var http= require('http');

var url = require('url');

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    var ql = url.parse(req.url,true).query;
    var txt = ql.year + ' '+ql.month;
    res.end(txt);
}).listen(9080);