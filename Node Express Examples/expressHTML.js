var express = require('express')
var app =  express();
app.set('view engine','ejs');

app.get('/contact',function(req, res){
    res.sendFile(__dirname +'/contact.html')
})
app.get('/people',function(req,res){
    var people= {name:['Namrata','Nikita','Piyush','Latiket']}
    // res.sendFile(__dirname+"/people.html")
    res.render('people',{peoplaData:people})
})
app.get('/contact/:name',function(req,res){
    // res.send('hii hello ---- welcome to noe js tutorials'+"    "+ "  "+ req.params.name)
    var data = {name:'namrata', job: 'Developer',salary:20000,hobies:['Dancing','Playing','Singing','studing','coding','nothing']}
console.log(data)
    res.render('profile',{personName:req.params.name, data:data});
})
app.listen(3000)
