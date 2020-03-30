var http = require('http')
var fs= require('fs')

//logic to send html page to browser

var server = http.createServer(function(req, res){
    console.log('requested url is '+ req.url)
    res.writeHead(200, {'Content-Type':'text/html'});
    var myReadStream = fs.createReadStream('./index.html','utf8')
    myReadStream.pipe(res)
    // res.end('welcome to node js server ')
})

// logic to send json data to browser
// var server = http.createServer(function(req, res){
//     console.log('requested url is '+ req.url)
//     res.writeHead(200, {'Content-Type':'application/json'});
//     var myJsonObj = {
//         Name:' Namrata',
//         Age:24,
//         Designation :'Developer',
//         Salary:10000
//     }
//     res.end(JSON.stringify(myJsonObj))
    // res.end('welcome to node js server ')
// })
server.listen(3000,'127.0.0.1')
console.log('connected to localhost on port 3000')