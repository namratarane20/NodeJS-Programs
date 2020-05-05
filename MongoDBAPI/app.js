const express = require('express');

require('dotenv/config')
const app = express();

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// const postRoutes = require('./routes/posts')
// app.use('/posts', postRoutes)
app.use('/posts',require('./routes/posts'))



app.get('/', function(req, res){
    res.send('We are from home ')
    
})

mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    function(){
    console.log('Connected to db')
})

app.listen(3000)