const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// people > /people
//person/row > /people/person
// person/row/age > people/person/age

let peopleObject = {people :[{name:'Namrata'}]}

app.get('/people', function(req, res){
    // res.send('hellow world !!!!!! ')
    // res.json({name:['namrata', 'Nikita']})
    res.json(peopleObject)
    res.end();

})

app.post('/people',function(req, res){
    // console.log('Complete body --------',req.body)
    // console.log('Name of requested user ------',req.body.name)
    // console.log('Desination of requested user ------', req.body.des)
    
     if (req.body && req.body.name){
         peopleObject.people.push({name:req.body.name})
         peopleObject.people.push({age:req.body.age})
     }

    res.json(peopleObject)
    res.end();
})

 app.get('/people/:personName', function(req , res){
     res.json({name: req.params.personName})
     res.end
 })
 app.get('/people/:personName/:age', function(req , res){
    res.json({name: req.params.personName, age: req.params.age})
    res.end
})

// app.delete('/people', function(req, res){
//     console.log(req.body.name)
// })
// app.put('/people', function(req, res){
//     console.log(req.body.name)
// })

app.listen('3000', function(){
    console.log('You are listening to port 3000')
})