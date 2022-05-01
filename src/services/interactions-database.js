const Database = require('better-sqlite3');
const interactions_db = new Database('interactions.db');


// Create database for user interactions
const interactions_stmt = interactions_db.prepare(`SELECT name FROM sqlite_master WHERE type = 'table' and name = 'userInteractionInfo';`);

let interactions_row = interactions_stmt.get();


// If interactions DB doens't exist then create the DB
if (interactions_row == undefined) {
    const sqlInit = `
        CREATE TABLE userInteractionInfo (
            userInteractionId INTEGER PRIMARY KEY, 
            email TEXT,
            username TEXT,
            time TEXT,
            interactiontype TEXT
        );`
        interactions_db.exec(sqlInit);
} else {
    console.log('Interactions DB exists.');
}

module.exports = interactions_db;