// var fs = require('fs')
// fs.readFile('myJson.json','utf8',function(err,data){
// console.log(data)
// })
console.log('non blocking example')
// fs.mkdirSync('stuff')
// fs.rmdirSync('stuff')
// fs.mkdir('stuff', function(err){
//     console.log('directory created !!!!')
//     fs.readFile('myJsoan.json','utf8', function(err,data){
//      fs.writeFile('./stuff/myfile.txt',data);
//      console.log('data written successfully in file')
//     })

// })
// fs.readFile('myJson.json', 'utf8', function (err, data) {
//     fs.mkdir('stuff', function () {
//         console.log('directory created successfylly !!!!')
//         fs.writeFile('./stuff/myTextFile.txt', data, function () {
//             console.log('data written to file successfuly !!!!')
//         })

//     })
// })



var fs = require('fs')
var myReadStream = fs.createReadStream('./myText.txt','utf8')
console.log('This is  my read stream---'+myWriteStream)
var myWriteStream = fs.createWriteStream('./myWrite.txt')
console.log('Thsi is my write stream---'+myWriteStream)

myReadStream.on('data', function(chunks){
    myWriteStream.write(chunks);
})

// myReadStream.on('data',function(chunks){
//     console.log('new chunks recieved');
//     myWriteStream.write(chunks);
//     console.log('this is my chunks of data---'+chunks + "      "+typeof(chunks))
// })

// above comment code is similar to this pipe method
myReadStream.pipe(myWriteStream)