const Database = require('better-sqlite3');
const user_db = new Database('users.db');

// Create database for user information
const user_stmt = user_db.prepare(`SELECT name FROM sqlite_master WHERE type = 'table' and name = 'userLoginInfo';`);

let user_row = user_stmt.get();

// If user DB doesn't exist than create the DB
if (user_row == undefined) {
    const sqlInit = `
        CREATE TABLE userLoginInfo (
            userId INTEGER PRIMARY KEY, 
            email TEXT, 
            password TEXT, 
            username TEXT
        );`
        user_db.exec(sqlInit);
} else {
    console.log('User DB exists.');
}

module.exports = user_db;