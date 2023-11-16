/* Connects to the database*/

const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('blogDB.sqlite')

module.exports = db;