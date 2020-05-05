"use strict"
const express = require('express');
let router = express.Router();

router.use(function(req, res, next){
    console.log(req.url, "@", Date.now());
    next();
})


router
    .route("/cars")
    .get(function (req, res) {
        // this is dealing with  /things/carss
        res.send('Hii   get form /things/cars')
    })
    .post(function (req, res) {
        res.send('hiii post from /thing/cars')
    });

router
    .route("/cars/:carid")
    .get(function (req, res) {
        res.send('Hiiii get from /things/cars/'+ req.params.carid);


    })
    .put(function (req, res) { 
        res.send('Hiiiii put from /things/cars/'+ req.params.carid);
    });


module.exports = router;

