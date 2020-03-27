const http = require('http')
 var server = http.createServer(function(req, res){
    
     res.writeHead(200,{'Content-Type':'text/plain'});
     res.end('welcome to node js now===========')
     console.log('requested now---- ' + req.url)
     
 })
 server.listen(3000,'127.0.0.1')
 console.log('hey  now you are connected to the server')  

//  const http = require('http')
//  var server = http.createServer(function(request, response){
//      response.writeHead(200,{'Content-Type':'text/plain'});
//      response.end('welsome to server with 3000 port')

//  })
//  server.listen(3000,'127.0.0.1')
//  console.log('you are connecte dto server')