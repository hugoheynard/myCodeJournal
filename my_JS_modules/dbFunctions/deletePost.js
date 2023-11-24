/* DELETE POST
Used to : delete a post from db
INPUT : the id of post (INT)
OUTPUT : none 
*/

import { db } from "./admin_dbConnection.js"

export const deletePost = (id) => {
    try {
        if(!Number.isInteger(id)) {
            throw new Error ('id must be an integer')
        }
    
        db.run(
            'DELETE FROM blogPost WHERE id=$id',
            {
             $id: id 
            },
            err => {
                if (err) {
                    console.log(err);
                }
            }
        )
    } catch(e) {
        console.log(e);
    }   
}