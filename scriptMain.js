const db = require("./my_JS_modules/dbConnection");

db.serialize(() => {
    db.run('DROP TABLE IF EXISTS Average', error => {
        if (error) {
          throw error;
        }
      })
      db.run('CREATE TABLE Average (id INTEGER PRIMARY KEY, year INTEGER NOT NULL, temperature REAL NOT NULL)');
    
})
