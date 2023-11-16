/* Connects to the database*/
import sqlite3 from 'sqlite3'

//const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('blogDB.sqlite');

export { db };