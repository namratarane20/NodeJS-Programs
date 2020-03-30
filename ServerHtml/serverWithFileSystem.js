// const http = require('http')
// const fs = require('fs')

// // var myreadStream = fs.createReadStream('./myText.txt','utf8')
// // var mywriteStream = fs.createWriteStream('./writeText.txt')
// // myreadStream.pipe(mywriteStream)

var server = http.createServer(function(req, res){
    console.log('requested url is '+ req.url)
    res.writeHead(200, {'Content-Type':'text/plain'});
    var myReadStream = fs.createReadStream('./myText.txt','utf8')
    myReadStream.pipe(res)
    // res.end('welcome to node js server ')
})
server.listen(3000,'127.0.0.1')
console.log('connected to localhost on port 3000')
// console.log(__dirname)
 

//  var http = require('http')
//  var fs = require('fs')
// var server = http.createServer(function(req, res){
//     res.writeHead(200, {'Content-type':'text/plain'});
//     var read = fs.createReadStream('./myText.txt')
//     read.pipe(res)
// })
//  server.listen(3000,'127.0.0.1')
// console.log('we are connected now s!!!!!')