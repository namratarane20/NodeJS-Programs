const Redshift = require('node-redshift');
var client = {
    user: '',
    database: '',
    password: '',
    port: ,
    host: ''
}


const redshiftClient = new Redshift(client, { rawConnection: true });
redshiftClient.connect(function (err, res) {
    if (err) {
        throw err;

    }
    else {
       redshiftClient.query('SELECT * FROM new_users_h', function(err, result){
           if(err){
               throw err;
           }
           else{
               console.log('================================================')
               console.log(result)
           }
       })
    }
})
