
import displayPost  from "./my_JS_modules/blogFunctions/displayPosts";
import db from "./my_JS_modules/dbFunctions/dbConnection";



const getArticle = () => {
    //db.each()  tous les posts
}

const divi = document.getElementById('main-divider')

const testclick = () => {
  document.getElementById('main-divider').innerHTML += '<div>ZOOOOB</div>'
}

const button = document.getElementById('loginButton')

button.addEventListener ("click", displayPost, divi)

