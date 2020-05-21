const express = require('express');
const app = express();

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Swamisamarth123@",
    database: 'databaseforapi'
});

connection.connect(function(err){
    if(err) throw err;
    console.log('conncted to Mysql database');
    connection.query("CREATE DATABASE dttttttt ", function(err){
        if(err) throw err;
        console.log('database created success fully')
    })
})

// app.get('/emp', function (req, res) {
//     connection.connect(function (err) {
//         if (err) throw err;
//         console.log('we are connected to databse now !!!!!S');
//         connection.query("SELECT * FROM employee_details", function (err, rows, field) {
//             if (err) throw err;
//             console.log('fetched data here---')
//             console.log('all rows ----', rows);
//             console.log('all fileds-----', field)
//             res.json(rows)
//         })
//     })

// })


// app.get('/emp/:id', function (req, res) {
//     connection.connect(function (err) {
//         const id = req.params.id
//         if (err) throw err;
//         console.log('connected to databse !!!');
//         connection.query(`SELECT * FROM employee_details WHERE ID = ${id}`, function (err, rows, field) {
//             if (err) throw err;
//             console.log('data fetched  with the id')
//             console.log('fetched row', rows, typeof (rows))
//             res.json(rows)
//             console.log(iddata)
//         })
//     })
// })


// app.get('/emp/:username', function (req, res) {
//     connection.connect(function (err) {
//         const uname = req.params.username
//         if (err) throw err;
//         console.log('connected to database');
//         connection.query(`SELECT * FROM employee_details WHERE username = '${uname}'`, function(err, rows, field){
//             if(err) throw err;
//             console.log('fetched data now !!!!!!!')
//             console.log(rows)
//             res.send(rows)
//         })

//     })
// })
app.listen('5000', function (err) {
    if (err) throw err;
    console.log('listening to port 5000')
})

// connection.connect(function(err){
//     if(err)throw err;
//     console.log('connected successfully !!!');
//     connection.query("SELECT * FROM employee_details", function(err,rows, field){
//         if(err) throw err;
//         console.log('data fetched successfully')
//         console.log(rows, typeof(rows))

//     })
// })

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query("CREATE DATABASE apidb", function (err, result) {
//       if (err) throw err;
//       console.log("Database created");
//     });
//   });