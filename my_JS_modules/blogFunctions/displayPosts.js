/* DISPLAY POST 
Use to :  displays the post object properties
Input : 
    object  || callback function that generates object from db
    DOMparent : to indicate where the element created must bu inserted
*/

const displayPost = (obj, DOMparent) => {
    const blogPost = document.createElement(`div class='blogPost' id=${'postID' + obj.id}`)

    document.createElement(`h2 `)
    .innerHTML(`${'#' + obj.id}`);
    document.createElement(`h2 id=${'postID' + obj.id}`)
    .innerHTML(`${'#' + obj.id}`);
}

const parent = document.getElementById('blogContainer')
const test = {
    id: 1,
    title: 'le zob'
}



module.exports = { displayPost }


