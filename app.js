require('dotenv').config()
var express =require('express');
var app = express();
var bodyParser=require('body-parser');
var logger = require('morgan');
var cors = require('cors');
const jwt = require('jsonwebtoken')

var port = process.env.SERVER_PORT || 5000;
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./src/routes/routes');
var routeProducts =require('./src/routes/products');
var routeCategories= require('./src/routes/categories');
var routeUsers = require('./src/routes/users');
//url
app.use('/', routes);
app.use('/products', routeProducts);
app.use('/categories', routeCategories);
app.use('/user', routeUsers);

app.post('/login', (req, res) =>{
    const user = {
        id : 1,
        username: 'agung',
        email: 'agung@gmail.com'
    }
    jwt.sign({user}, 'secretkey', (err,token) => {
        res.json({
            token
        })
    });
})


app.listen(port);
console.log("Started on server http://localhost:"+port);
