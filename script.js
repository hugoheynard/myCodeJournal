
//import { db } from "./my_JS_modules/dbFunctions/dbConnection.js"
import { displayPost } from "./my_JS_modules/blogFunctions/displayPost.js"
import { fetchPost } from "./my_JS_modules/dbFunctions/fetchPosts.js"


const getArticle = () => {
    //db.each()  tous les posts
}


fetchPost().forEach(post => displayPost(post))


const button = document.getElementById('loginButton')
button.addEventListener ("click", displayPost)




