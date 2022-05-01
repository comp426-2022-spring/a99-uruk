const express = require('express');
const router = express.Router();
const user_db = require("../services/user-database.js");
const interactions_db = require("../services/interactions-database.js");
const { request } = require('express');
const session = require('express-session');
const { validate } = require('email-validator');

// Sign up endpoint
router.route('/app/sign-up/').post(function (req, res, next) {
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
            console.log("Account Created");
            res.send({message: "Account created"});
        } else {
            res.send({message: "Account already exists"})
        }
    } else {
        res.send({message: "Email is invalid"})
    }
});

// Sign in Endpoint
router.route('/app/sign-in/').post(function (req, res, next) {
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
    console.log(user.username)
    if (typeof insert == "undefined") {
        // If account isn't already in DB prevent sign in
        res.send({message:"Account doesn't exist yet"})
    } else {
        if (user.username == insert.username && user.password == insert.password) {
            // If username and password are correct permit sign in

            // Set session user details
            req.session.email = user.email;
            req.session.username = insert.username;
            req.session.password = user.password;
    
            res.send({message:"Success"})
        } else {
            // If username or password are incorrect block sign in
            res.send({message:"Incorrect username/password"})
        }
    }
});

// Get use info endpoint
router.route('/app/get-user-info').get(function (req, res, next) {
    // Returns JSON with the user's email, username, and password
    res.status(200).json({"email" : req.session.email, "username" : req.session.username, "password" : req.session.password});
});



// Change username endpoint
router.route('/change-username').post(function (req, res, next) {
    let newUsername = req.body.username;
   
    console.log("Username changed");
    console.log(req.session.username);

    // Get user ID for insert
    let getRow = user_db.prepare("SELECT * FROM userLoginInfo WHERE email = ?");
    let row = getRow.get(req.session.email);
    let userId = row.userId;

    // Modify username based on userId
    let stmt = user_db.prepare("UPDATE userLoginInfo SET username = ? WHERE userId = ?");
    let insert = stmt.run(newUsername, userId);
    req.session.username = newUsername;
    res.redirect("/app/accountpage")
});


// Change email endpoint
router.route('/change-email').post(function (req, res, next) {
    let newEmail = req.body.email;
   
    console.log(req.session.email);

    // Get user ID for insert
    let getRow = user_db.prepare("SELECT * FROM userLoginInfo WHERE email = ?");
    let row = getRow.get(req.session.email);
    let userId = row.userId;

    // Check if desired email already exists in DB
    let getNewEmailRow = user_db.prepare("SELECT * FROM userLoginInfo WHERE email = ?");
    let newEmailRow = getNewEmailRow.get(newEmail);
    // If email doesn't exist in DB update the DB, otherwise go back to the account page
    if (typeof newEmailRow == "undefined" && validate(newEmail)) {
        console.log("Email is not being used.");
        console.log("Email changed");
        let stmt = user_db.prepare("UPDATE userLoginInfo SET email = ? WHERE userId = ?");
        let insert = stmt.run(newEmail, userId);
        req.session.email = newEmail;
        res.redirect("/app/accountpage")
    } else {
        console.log("Email is being used");
        res.redirect("/app/accountpage");
    }
});


// Change password endpoint
router.route('/change-password').post(function (req, res, next) {
    let newPassword = req.body.password;
   
    console.log("Password changed");
    console.log(req.session.password);

    // Get user ID for insert
    let getRow = user_db.prepare("SELECT * FROM userLoginInfo WHERE email = ?");
    let row = getRow.get(req.session.email);
    let userId = row.userId;

    // Modify password based on userId
    let stmt = user_db.prepare("UPDATE userLoginInfo SET password = ? WHERE userId = ?");
    let insert = stmt.run(newPassword, userId);
    req.session.password = newPassword;
    res.redirect("/app/accountpage")
});

// Delete account endpoint
router.route('/delete-account').get(function (req, res, next) {
    // Get user ID for insert
    let getRow = user_db.prepare("SELECT * FROM userLoginInfo WHERE email = ?");
    let row = getRow.get(req.session.email);
    let userId = row.userId;

    // Delete account based on userId
    let stmt = user_db.prepare("DELETE FROM userLoginInfo WHERE userId = ?");
    let insert = stmt.run(userId);
    // Send user back to login/signup page
    res.redirect("/app/")
});


// Logs frontend interaction for user
router.route('/app/log-frontend-interaction').post(function (req, res, next) {
    console.log("test");
    let stmt = interactions_db.prepare("INSERT INTO userInteractionInfo (email, username, time, interactiontype) VALUES (?, ?, ?, ?)");
    let insert = stmt.run(req.session.email, req.session.username, req.body.time, req.body.state);
});



module.exports = router;