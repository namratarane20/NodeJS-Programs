var events = require('events');
var validator = require('validator')
var myEmiter = new events.EventEmitter();
myEmiter.on('someEvents', function(msg){
    console.log(msg)
})
myEmiter.emit('someEvents','the event was emmited here now')

var fs = require('fs')
const data = fs.readFileSync('myJson.json')
stringData = data.toString()
console.log(validator.contains('chi'))


console.log(stringData)
fs.readFile('myJson.json','utf8',function(err, data){
    console.log(data)
})
 console.log('test fo blocking')
 fs.appendFile('myJson.json','this the added text again using appending the text')

