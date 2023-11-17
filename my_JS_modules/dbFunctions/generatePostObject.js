/* GENERATE POST OBJECT
Used to : generate an object from a db row
INPUT : a row of database
OUTPUT : an object
*/

const generatePostObject = dbRow => {
    return {
        id: dbRow.id,
        title: dbRow.title,
        content: dbRow.content,
        date: dbRow.content,
        author: dbRow.author
    }
}

export { generatePostObject };