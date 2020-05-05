const express = require('express');
const app = express(); 
const port =process.env.port || 4444;
const things = require('./routes/things');
app.use(express.json())
app.use("/things", things);
 //use the things.js file to handle endpoints starts with /things

app.get("/", function(req, res){
res.send('hiii hello welcome to root here !!!!!!! ')
});




app.listen(port, err =>{
    if(err){
        return console.log("ERROR", err);
    }
    console.log(`listeing to port ${port}`);
})
 