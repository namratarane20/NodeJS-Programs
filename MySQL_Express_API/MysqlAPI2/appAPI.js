const express = require('express')
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser')
 app.use(bodyParser.urlencoded({extended:false}))
 app.use(bodyParser.json())

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Swamisamarth123@',
    database:'databaseforapi'
})
// connection.connect(function(err){
//     if(err) throw err;
//     console.log('Connected to database')
// })

// connection.connect(function(err){
//     // var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//     var sql = "INSERT INTO employeedata (empid, name, add, des,email ) VALUES ('TC114','Nmarata Rane','Pune','Developer','nmaratarane33@gmail.com')";
//     if(err) throw err;
//     console.log('conncted to Mysql database');
//     connection.query(sql, function(err){
//         if(err) throw err;
//         console.log('datainserted successfulyy')
//     })
// })


app.get('/userlist', function(req, res){
    connection.connect(function(err){
        if(err) throw err;
        console.log('Successfulyy connected to database !!!!!!!!');
        const quesryString = "SELECT * FROM employee_details"
        connection.query(quesryString, function(err, rows, fields){
            if(err) throw err;
            console.log('data fetched successfull')
            console.log('====================================== Output =========================================')
            console.log(rows)
            res.json(rows)
        })
    })


})


app.get('/userlist/:id', function(req, res){
    connection.connect(function(err){
        if(err) throw err;
        console.log('Successfulyy connected to database !!!!!!!!');
        
        const id = req.params.id
        const quesryString = "SELECT * FROM employee_details WHERE username = ?"
        connection.query(quesryString,[id], function(err, rows, fields){
            // if(err) throw err;
            // console.log('data fetched successfull')
            // console.log('====================================== Output =========================================')
            // console.log(rows)
            // res.json(rows)

            if(err){
                console.log('we failed to fetched data', err)
                res.sendStatus(500)
                return
                // throw err
            }
            else{
                console.log('==============output =================');
                console.log(rows)
                res.json(rows)

                // const users = rows.map(function(row){
                //     return { FirstName: row.lastname}
                // })
                // res.json(users)

                
            }
        })
    })


})

app.post('/userlist/addUser', function(req, res){
    connection.connect(function(err){
        if(err) throw err;
        console.log('conncted to datatabse ');
        console.log(req.body)

        const id = req.body.id;
        const username = req.body.username;
        const lastname = req.body.lastname;

        const quesryString = "INSERT INTO employee_details (id, username, lastname) VALUES (?, ?, ?)";
        connection.query(quesryString,[id, username, lastname], function(err, rows, fields){
            if(err)  throw err;
            console.log('data added to database');
            // res.json(rows)
           res.send(rows)

        })

        
    })
})


app.put('/userlist/:id', function(req, res){
    connection.connect(function(err){
        if(err) throw err;
        console.log('conncted to datatabse ');
        console.log(req.body)

        const updatediD = req.params.id
        const username = req.body.username;
        const lastname = req.body.lastname;

        const quesryString = "UPDATE employee_details set username =? , lastname =?  WHERE id= ?";
        connection.query(quesryString,[username, lastname, updatediD], function(err, rows, fields){
            if(err)  throw err;
            console.log('data updated  to database');
            // res.json(rows)
           res.send(rows)

        })

        
    })
})






app.delete('/userlist/:id', function(req, res){
    connection.connect(function(err){
        if(err) throw err;
        console.log('conncted to datatabse ');
        console.log(req.body)

        const deleteId = req.params.id;

        const quesryString = "DELETE FROM employee_details WHERE id = ?";
        connection.query(quesryString,[deleteId], function(err, rows, fields){
            if(err)  throw err;
            console.log('data updated  to database');
            // res.json(rows)
           res.send(rows)

        })

        
    })
})

// app.delete('userlist/deleteUser', function(req, res){
//     const deleteId = req.body.id
//     connection.connect(function(err){
//         if(err) throw err;
//         console.log('we are connctd to atabase now!!!! ')
//         const quesryString =  "DELETE FROM employee_details WHERE id = ?";
//         connection.query(quesryString,[deleteId], function(err, rows, fields){
//             console.log('The user deleted successfully')
//             res.send(rows)
//         })
       
//     })
// })


app.listen('3000', function(){
    console.log('listening to port number 3000')
})