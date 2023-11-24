/* FETCH POST (PROMISE)
Used to : get all the posts from db
NEEDS : import db to access sqlite3 methods
INPUT : none
OUTPUT : returns a Promise Array
*/

import { db } from "./admin_dbConnection.js"

const fetchPosts = () => {
    return new Promise((resolve, reject) => {
        db.all(
            'SELECT * FROM blogPost',
            (err, rows) => {
                if (err) {
                    console.log(err)
                    reject(err)
                } else {
                    resolve(rows)
                }
            }
        )
    }
)}

export { fetchPosts };