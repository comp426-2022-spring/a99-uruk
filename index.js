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
const { isArgumentsObject } = require('util/types');

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
argv["port", "debug"];

// Get port from argument, if not argument exists set to 5000
const HTTP_PORT = argv.port || 5000;

// Listen on port
const server = app.listen(HTTP_PORT, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%',HTTP_PORT))
});

// Accountpage and coviddata routes
app.use(require("./src/routes/accountpage.route"))
app.use(require("./src/routes/coviddata.route"))

// Signup and signin endpoints route
app.use(require("./src/routes/login.route"))

// Startup route
app.use(require("./src/routes/startup.route"))


// Endpoints for debug mode only
if (argv.debug){
    // Returns user login database
    app.get('/app/view-user-db', (req, res) => {
        const select_statement = user_db.prepare('SELECT * FROM userLoginInfo').all();
        res.status(200).json(select_statement);
    });

    // Returns user interactions database
    app.get('/app/view-interactions-db', (req, res) => {
        const select_statement = interactions_db.prepare('SELECT * FROM userInteractionInfo').all();
        res.status(200).json(select_statement);
    });
}

// Default endpoint request
app.use(function(req, res){
    res.status(404).send('404 NOT FOUND')
});