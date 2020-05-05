"use strict";
const express = require('express');
const app = express();
const port =process.env.port || 4444;
app.get("/", function(req, res){

});
app.get("/things/cars", function(req, res){

});

app.post("/things/cars", function(req, res){

});

app.get("/things/cars/:carid", function(req, res){

});

app.put("/things/cars/:carid" ,function(req, res){

})

app.listen(port, err =>{
    if(err){
        return console.log("ERROR", err);
    }
    console.log(`listeing to port ${port}`);
})