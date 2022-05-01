const express = require('express');
const router = express.Router();
const user_db = require("../services/user-database.js");
const interactions_db = require("../services/interactions-database.js");
const { request } = require('express');
const session = require('express-session');
const { validate } = require('email-validator');

// Sign up endpoint
router.route('/sign-up').post(function (req, res, next) {
    // Pass in account creation info through JSON
    // Create object to hold account info
    let user = {
        email: req.body.email,
        username : req.body.username,
        password: req.body.password,
    }

    // Check if email is already in DB
    let stmt = user_db.prepare("SELECT * FROM userLoginInfo WHERE email = ?");
    let insert = stmt.get(user.email);
    console.log(insert);

    // Check if email is valid and if it already exists in the DB
    if (validate(user.email)) {
        if (typeof insert == "undefined") {
            // Set session user details
            req.session.email = user.email;
            req.session.username = user.username;
            req.session.password = user.password;


            stmt = user_db.prepare("INSERT INTO userLoginInfo (email, password, username) VALUES (?, ?, ?)");
            insert = stmt.run(user.email, user.password, user.username);
            console.log("Accounted Created");
            res.redirect("http://localhost:5000/coviddata/");
        } else {
            console.log("Account Already Exists");
            res.redirect("http://localhost:5000/");
        }
    } else {
        console.log("Email is invalid.");
        res.redirect("http://localhost:5000/");
    }
});

// Sign in Endpoint
router.route('/sign-in').post(function (req, res, next) {
    // Pass in account creation info through JSON

    // Create object to hold account info
    let user = {
        email: req.body.email,
        username : req.body.username,
        password: req.body.password,
    }

    // Check if email is already in DB
    let stmt = user_db.prepare("SELECT * FROM userLoginInfo WHERE email = ?");
    let insert = stmt.get(user.email);
    console.log(insert);

    if (typeof insert == "undefined") {
        console.log("Account Doesn't Exist Yet")
        res.redirect("http://localhost:5000/");
    } else {
        if (user.username = insert.username && user.password == insert.password) {
            // Set session user details
            req.session.email = user.email;
            req.session.username = insert.username;
            req.session.password = user.password;
    
            console.log("Successfuly Logged In")
            res.redirect("http://localhost:5000/coviddata/");
        } else {
            console.log("Wrong Username/Password");
            res.redirect("http://localhost:5000/");
        }
    }
});

// Get use info endpoint
router.route('/get-user-info').get(function (req, res, next) {
    // Returns JSON with the user's email, username, and password
    res.status(200).json({"email" : req.session.email, "username" : req.session.username, "password" : req.session.password});
});


// Sign in Endpoint
router.route('/accountpage/change-email').post(function (req, res, next) {
    // Pass in account creation info through JSON
    // Create object to hold account info
    let user = {
        email: req.body.email,
    }

    let stmt = user_db.prepare("INSERTO INTO (email) (?) VALUESuserLoginInfo WHERE email = ?");
    let insert = stmt.run(user.email, req.session.email);
    next();
});

module.exports = router;