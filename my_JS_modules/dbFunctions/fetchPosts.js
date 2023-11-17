/* FETCH POST
Used to : get all the posts from db and load them ito an array
NEEDS : import db to access sqlite3 methods
INPUT : database
OUTPUT : returns an array
*/

import { db } from './dbConnection';

const generatePostObject = dbRow => {
    postObj = {
        id: dbRow.id,
        title: dbRow.title,
        content: dbRow.content,
        date: dbRow.content,
        author: dbRow.author
    };
    
    return postObj;
}


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