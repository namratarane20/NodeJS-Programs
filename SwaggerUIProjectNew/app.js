const express =require('express');
const app = express();
const swaggerJsDoc =require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const port = process.env.PORT || 5000;

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Swagger Sample API',
            description: "This is the sample API using node js",
            version: "1.0.0", 
            contact: {
                email: 'namratarane33@gmail.com',
                name: 'Namrat Ashok Rane'
            },
            servers: ["http://localhost:5000"]
        }
    },
    apis: ["app.js"]
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
/**
 * @swagger
 * /customer:
 *  get:
 *      Description: Use to request all customer
 *      responses:
 *          '200':
 *              description: Asuccessfull response
 *          '400':
 *              description:Invalid token
 * 
 */
app.get('/customer',function(req, res){
    res.send('<h1> welcome to customer page here !!!!!!</h1>')
})


/**
 * @swagger
 * /updateCustomer:
 *  put:
 *      description: Use to  Update the customer now 
 *      responses:
 *          '201':
 *              description: Asuccessfull response
 * 
 */

app.put('/updateCustomer', function(req, res){
   res.status(200).send('Customer updated succesfully');

} )


/**
 * @swagger
 * /deleteCustomer:
 *  delete:
 *      description: Use todelete the customer now 
 *      responses:
 *          '201':
 *              description: Asuccessfull response
 * 
 */

 app.delete('/deleteCustomers',function(req, res){
     res.status(400).send('the customer is delted successfully')
 })

 /**
 * @swagger
 * /login:
 *   post:
 *     description: Login to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: Username to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: Enter password here
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 */




app.listen(port,() => {
    console.log(`server listening to port ${port}`)
})