 var express = require('express')
var bodyParser = require('body-parser')


var urlencoderParser = bodyParser.urlencoded({extended:false});
var app = express();
// app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/people', function (req, res) {
    var userName ='Namrata Rane'
    var people = {
        name: ['Namrata', 'Nikita', 'piyush', 'latiket', 'Tushar']
    }
    res.render('people', { people: people , userName:userName})

})


app.get('/contact', function (req, res) {
        var contacts = [
            {
            Name :'Namrata Rane',
            Email: 'namratarane33@gmail.com',
            Mob: 12345678,
            add: 'Bangalore',
            Designation: 'Developer'
            },
            {
                Name: 'Tushar Wankhede',
                Email:'tushaewankhede@gmail.com',
                Mob:9876543210,
                add:'Pune',
                Designation:'Data scientist'
            }
    ]
    var tusharData = {
        Name: 'Tushar Ratiram Wankhede',
        Designation: 'Data Scientist',
        Email: 'tusharw1995@gmail.com',
        Mob: 987654321,
        address: 'Mumbai'
    }
    var namrataData = {
       name:'Namrata Rane',
       Designation:'Developer',
       Email:'namratarane33@gmail.com',
       Mob:902625363,
       address:'Bangalore'
    }
    var hoby =['playing','dancing','gamming','travelling','Singing']
    var userName = 'Namrata Rane'
    res.render('contact', { userName: userName, cont: contacts, tushar: tusharData, namrata:namrataData,hoby:hoby})
    console.log(req.query)
})


app.get('/home/:user', function (req, res) {
    res.render('home', { userName: req.params.user })
})

app.get('/login',(req,res)=>{
    res.render('login',{userName:req.params.user})

})

app.post('/login',urlencoderParser,function(req,res){
 
    console.log(req.body)
    res.render('logedUser',{data:req.body, userName:req.params.user})
})

// var mysql = require("mysql")

// var con =mysql.createConnection({
//     host:"localhost",
//     user:"Namrata",
//     password:"Swamisamarth123@",
//     database:"employee"
// })

// con.connect(function(err){
//     if(err){
//         console.log('erroe ocured')
//     }
//     else{
//         console.log("connected successfully")
//     }
    
// })


