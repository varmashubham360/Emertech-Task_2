var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("Request receive at Server" + req.url + "<br />");
    res.write("Hello !!!");
    res.end();
      
}).listen(8000);