const express = require('express');
const app = express();
const mysql = require('mysql')

const morgan = require('morgan')
app.use(morgan('combined'));

app.get('/', function (req, res) {
    console.log('responding to the route')
    res.send('hello from roooot')
});

app.get('users/:id', function (req, res) {

    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Swamisamarth123@",
        database: 'databaseforapi'
    });


    connection.connect(function (err) {
        if (err) throw err;
        console.log('connected successfully !!!');
        connection.query("SELECT * FROM employee_details", function (err, rows, field) {
            if (err) throw err;
            console.log('data fetched successfully')
            console.log(rows, typeof (rows))
            res.json(rows)

        })
    })
    // console.log('fetching use with the use rid '+ req.params.id);
    // res.end()
})
app.get('/users', function (req, res) {
    var userlist = {
        firsname: "namrata",
        lastname: "Rane"
    }
    const user2 = {
        firsname: 'Tushar',
        lastname: 'wankhede'
    }
    res.json([userlist, user2])
    //  res.send('I am from nodemon update dwhen I was this file')
})


app.listen(3003, function () {
    console.log("serve listenig to port 3003")
})