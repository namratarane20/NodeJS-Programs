var http=require('http')
var fs = require('fs')
var server= http.createServer(function(req,res){
    console.log('request made by'+ req.url)
    if(req.url === '/home' ||req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream('./index.html').pipe(res)
    }
    else if(req.url==='/contact'){
        res.writeHead(200,{'Content-Type':'text/html'})
        fs.createReadStream('./contact.html').pipe(res)
    }
    else if(req.url=== '/api/data'){
        res.writeHead(200,{'Content-Type':'text/html'})
        fs.createReadStream('./data.html').pipe(res)
    }
    else if(req.url === '/json'){
        var jsonData = {
            Name:'Namrata',
            Designation :'Developer',
            Salary :20000,
            Location :'Pune',
            Email:'namratrane33@gmail.com'
        }
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(jsonData))
    }
    else{
        res.writeHead(200,{'Content-Type':'text/html'})
        fs.createReadStream('./404.html').pipe(res)
    }

})
server.listen(3000, '127.0.0.1')
console.log('we are connected to server now !!!!')