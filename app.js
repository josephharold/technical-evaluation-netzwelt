const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// import routes
const LoginRoute = require('./routes/login');
const IndexRoute = require('./routes/index');
const TreeRoute = require('./routes/tree');

// disables cors
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

// this will be used by lower level (nested files) to access the root directory 
global.__basedir = __dirname;


app.listen(8000, 'localhost');


// setup react 
app.use(express.static('client/build'));
// setup middleware to process request body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// use routes that were imported
app.use('/api', LoginRoute);
app.use('/api', TreeRoute);
app.use('*', IndexRoute);