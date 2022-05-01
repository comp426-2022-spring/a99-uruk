const express = require('express');
const router = express.Router();
const path = require('path')

// Reroutes http://localhost:5000/ to http://localhost:5000/app/
router.route('//').get(function (req, res, next) {
    res.redirect("http://localhost:5000/app/")
});

// Serves html
router.route('/app/').get(function (req, res, next) {
    res.sendFile(path.join(__dirname.slice(0,-11), 'public/login/index.html'));
});

// Return css
router.route('/app/style.css').get(function (req, res, next) {
    res.sendFile(path.join(__dirname.slice(0,-11), 'public/login/style.css'));
})

// Returns js
router.route('/app/script.js').get(function (req, res, next) {
    console.log(req.session.email)
    res.sendFile(path.join(__dirname.slice(0,-11), 'public/login/script.js'));
})

module.exports = router;