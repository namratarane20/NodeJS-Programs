const express = require('express');
const app = express();
// app.use(middleware2)
app.use(middleware1)//globle function that can execute always
app.use(middleware2)


function standardExpressCallback(reqObject, resObject, nextMiddleware) {
    console.log('I am the stanadrd callback function')
    resObject.send('<h1>helllo</h1> ')
}

function middleware1(req, res, next) {
    console.log('I am from Middleware #1 ');
    const errObject = new Error('I am a Eroorr')
    // res.send('I am from middleware 1')
    next(errObject);
}
function middleware2( req, res, next){
    console.log('I am from Middleware #2');
    // middleware3();
    next();
}

function middleware3(req, res, next){
    console.log('I am from mMiddleware #3');
    next()
}

function errorHandler(err, req, res, next){
    if(err){
        res.send('<h1>Thare is an error, please try again </h1>')
    }
}

app.get('/',middleware3, standardExpressCallback);




// app.get('/', (req, res ,next)=>{
//     res.send('helllo')
// })

app.listen("3000", (err) => {
    if (err) throw err;
    console.log('You are now connected to port 3000')
});