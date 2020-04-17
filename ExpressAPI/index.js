const Joi = require('joi')
var express = require('express');
var app = express();

app.use(express.json());
var courses = [
    { id: 1, name: 'Namrata Rane' },
    { id: 2, name: 'Nikit Nanote' },
    { id: 3, name: 'Shreya Ghoshal' }
]

app.get('/report/v1/books', function (req, res) {
    res.send('hello world ---------------------- !!!!!!!')
})


app.get('/api/courses', function (req, res) {
    res.send(courses)
})

app.get('/api/courses/:id', function (req, res) {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) {
        res.status(400).send('The cource with the given ID not found !!!')

    }
    else {
        res.send(course)
    }
})

app.post('/api/courses', function (req, res) {

 const {error} =validateCourse(req.body)
    if ( error ) {
        res.status(400).send(result.error.details[0].message)
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
    console.log(courses)
})

app.put('/api/courses/:id', function (req, res) {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(400).send('the course with given id is not found !!!!')
    }

    const { error } = validateCourse(req.body)
    if ( error ) {
        res.status(400).send(result.error.details[o].message)
        return;
    }
    course.name = req.body.name;
    res.send(course);
})
app.delete('/api/courses/:id', function(req, res){
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(400).send('the course with given id is not found !!!!')
    }
    const data = courses.indexOf(course);
    courses.splice(data,1);
    res.send(course);
})


function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema)
}

// app.get('/api/posts/:year/:months', function(req, res){
//     res.send(req.query )
// })

app.listen(3000)
console.log('you are connected to serve rnow.............')