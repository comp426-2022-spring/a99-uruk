const express = require('express');
const router = express.Router();
const path = require('path')


router.route('/coviddata/').get(function (req, res, next) {
    res.sendFile(path.join(__dirname.slice(0,-11), 'public/coviddata/index.html'));
})

router.route('/coviddata/style.css').get(function (req, res, next) {
    res.sendFile(path.join(__dirname.slice(0,-11), 'public/coviddata/style.css'));
})

router.route('/coviddata/script.js').get(function (req, res, next) {
    console.log(req.session.email)
    res.sendFile(path.join(__dirname.slice(0,-11), 'public/coviddata/script.js'));
})

module.exports = router;