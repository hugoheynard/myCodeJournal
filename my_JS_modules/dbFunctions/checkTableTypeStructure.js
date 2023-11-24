/*
* By checking the structure of the columns, we build an object that will includes the types of data needed for a post
* INPUT : string : tablename
* OUTPUT : returns a Promise object
*/

import { db } from "./admin_dbConnection.js";


export const checkTableTypeStructure = (tableName) => {
    return new Promise((resolve, reject) => {
        try {
            if (typeof tableName !== 'string') {
                throw new Error('The table name must be a string.')
            }
            const tableStructure = {};
        
        db.all(
            `PRAGMA table_info(${tableName})`, (err, rows) => {
                if (err) {
                    console.error(err.message);
                    reject(err);
                    return;
                }
    
                // Fills the object with key:values (name:type of data)
                rows.forEach(row => {
                    
                    if (row.type === 'TEXT') {
                        tableStructure[row.name] = row.type;
                    }
                    
                });
    
                resolve(tableStructure); 
            });

        } catch(e) {
            console.log(e);
        }
        
        
    });
};

checkTableTypeStructure(23)