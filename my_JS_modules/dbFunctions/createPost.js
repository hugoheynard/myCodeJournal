/* CREATE POST (PROMISE)
Used to : add an article to db with a sqlite3 method
NEEDS : - access to db
        - check object props
INPUT : object or function that validates and return object.
OUTPUT : none
*/

import { db } from "./admin_dbConnection.js"
import { validatePostObject } from "./validatePostObject.js";

const createPost = async (obj) => {
    //const obj = await validatePostObject(object)
    db.run(
        'INSERT INTO blogPosts (title, content, author) VALUES ($title, $content, $author)',
        {
            $title: obj.title,
            $content: obj.content,
            $author: obj.author
        },
        err => {
            if (err) {
                console.log(err)
            }
        }
    )
};

const testCreate = {
    title: 'title',
    content: 'content',
    author:'Hugo Heynard'
}


createPost((testCreate))