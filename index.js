// Require NPM packages
const express = require('express');
const minimist = require('minimist');
const bodyParser = require("body-parser");
const fs = require('fs');
const user_db = require("./src/services/user-database.js");
const interactions_db = require("./src/services/interactions-database.js");
const morgan = require('morgan');
const path = require('path')
const session = require('express-session');
var validator = require("email-validator");

// Create Express app
const app = express()

// Session Express can use to store username, email, and password
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

// Allows epxress to use body-parser as middle-ware
// Needed to transmit data across POST
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Extract arguments from run command
const argv = (minimist)(process.argv.slice(2));

// Set valid arguments
argv["port"];

// Get port from argument, if not argument exists set to 5000
const HTTP_PORT = argv.port || 5000;

// Listen on port
const server = app.listen(HTTP_PORT, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%',HTTP_PORT))
});

// accountpage + coviddata routes
app.use(require("./src/routes/accountpage.route"))
app.use(require("./src/routes/coviddata.route"))

// Signup & signin endpoints route
app.use(require("./src/routes/login.route"))

// Startup route
app.use(require("./src/routes/startup.route"))


// Endpoint that lets you view all user accounts
// Should be removed before final submission
app.get('/view-user-db', (req, res) => {
    const select_statement = user_db.prepare('SELECT * FROM userLoginInfo').all();
    res.status(200).json(select_statement);
});


// Endpoint that lets you view all user interactions
// Should be removed before final submission
app.get('/view-interactions-db', (req, res) => {
    const select_statement = interactions_db.prepare('SELECT * FROM userInteractionInfo').all();
    res.status(200).json(select_statement);
});

// Default endpoint request
app.use(function(req, res){
    res.status(404).send('404 NOT FOUND')
});


