var http = require('http');

var data = require('./moduletwo');

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write('Sum of the numbers 2,3 is : '+data.add(2,3)+'<br>');
    res.write('Sum of the numbers 2,3 is : '+data.sub(2,3)+'<br>');
    res.write('Sum of the numbers 2,3 is : '+data.multiplication(2,3)+'<br>');
    var div = data.division(12,0);

    res.write('Sum of the numbers 12,3 is : '+(div==-1?'Divide By Zero':div)+'<br>');
    res.end();
}).listen(9080);