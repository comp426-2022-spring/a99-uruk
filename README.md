# Team Uruk COVID-19 Dashboard

## Introduction
COVID-19 dashboard that allows you to to view COVID information and statistics for any state in the USA, along with country-wide data. Notably some of the data that is displayed, include case count information, outcome statistics (ICU, ventilator, etc), and testing statistics.

## Installation Requirements
* Node.js LTS (16.3.X or greater)

## Installation Instructions
* Clone repository
* Run `npm install` inside cloned directory


## Team Structure/Planning
* [Team Structure](docs/roles.md)
* [Team Meetings](docs/meetings.md)

## API Documenation
* [API Documenation ](docs/api-endpoints.md)

## Run Instructions
* Run either `npm test` (opens up DB information endpoints) or `npm start` or `npm run run`
* Go to [localhost:5000/app/](http:localhost:5000/app/)

## Dependencies

Dependency | Version 
--- | ---
better-sqlite3 | 7.5.1
body-parser | 1.20.0
email-validator | 2.0.4
express | 4.18.1
express-session | 1.17.2
minimist | 1.2.6
nodemon | 2.0.16
