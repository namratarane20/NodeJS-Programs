const {Pool,Client} = require('pg');
const connectionString = ' '
const client = new Client({
    connectionString:connectionString
})

client.connect(function(err){
    if(err){
        throw err;
    }
    else{
        console.log('You are connected to postgresql database')
    }
})

client.query('SELECT * FROM dummy', function(err, res){
    console.log('we are fetching data now wait a while min !!!')
    console.log(err, res.rows)
    client.end()
})