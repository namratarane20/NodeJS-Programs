'use strict'
var mysql = require('mysql');
 var connection = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: 'Swamisamarth123@',
     database: 'firstDatabse'
 });
  connection.connect(function(err){
      if(err) throw err;
      
  })

  module.exports = connection