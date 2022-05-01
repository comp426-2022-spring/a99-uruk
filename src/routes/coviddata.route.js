const express = require('express');
const router = express.Router();
const path = require('path')

// Serves index.html for coviddata page
router.route('/app/coviddata/').get(function (req, res, next) {
    res.sendFile(path.join(__dirname.slice(0,-11), 'public/coviddata/index.html'));
})

// Return style.css for coviddata page
router.route('/app/coviddata/style.css').get(function (req, res, next) {
    res.sendFile(path.join(__dirname.slice(0,-11), 'public/coviddata/style.css'));
})

// Returns script.js for coviddata page
router.route('/app/coviddata/script.js').get(function (req, res, next) {
    res.sendFile(path.join(__dirname.slice(0,-11), 'public/coviddata/script.js'));
})

module.exports = router;