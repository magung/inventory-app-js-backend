require('dotenv').config()
var express =require('express');
var cors = require('cors');
var app = express();
var bodyParser=require('body-parser');
var logger = require('morgan');
const jwt = require('jsonwebtoken')
app.use(cors());
var port = process.env.SERVER_PORT || 5000;

//ALLOWED CORS

// var allowedOrigins = ['http://localhost:3000',
//                       '192.168.43.135:3000'];
// app.use(cors({
//   origin: function(origin, callback){
//     // allow requests with no origin 
//     // (like mobile apps or curl requests)
//     if(!origin) return callback(null, true);
//     if(allowedOrigins.indexOf(origin) === -1){
//       var msg = 'The CORS policy for this site does not ' +
//                 'allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   }
// }));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./src/routes/routes');
var routeProducts =require('./src/routes/products');
var routeCategories= require('./src/routes/categories');
var routeUsers = require('./src/routes/users');

app.use('/products', routeProducts);
app.use('/categories', routeCategories);
app.use('/user', routeUsers);
app.use('/', routes);


app.listen(port);
console.log("Started on server http://localhost:"+port);


// app.post('/login', (req, res) =>{
//     const user = {
//         id : 1,
//         username: 'agung',
//         email: 'agung@gmail.com'
//     }
//     jwt.sign({user}, 'secretkey', (err,token) => {
//         res.json({
//             token
//         })
//     });
// })
