/* FETCH POST
Used to : get all the posts from db and load them ito an array
NEEDS : import db to access sqlite3 methods
INPUT : database
OUTPUT : returns an array
*/

import { db } from './dbConnection.js';
import { generatePostObject } from './generatePostObject.js';



const fetchPost = () => {
    const postArray = [];
    db.each(
        'SELECT * FROM blogPosts',
        (err, row) => {
            if (err) {
                console.log(err)
            } else {
                postArray.push(generatePostObject(row));
            }
        }
    )
    return postArray;
}

export { fetchPost };

