
//import { db } from "./my_JS_modules/dbFunctions/dbConnection.js"
import { displayPost } from "./my_JS_modules/blogFunctions/displayPost.js"


const getArticle = () => {
    //db.each()  tous les posts
}




const button = document.getElementById('loginButton')
button.addEventListener ("click", displayPost)

const testObjPost = {
  id:'01',
  title: 'testTitle1',
  content: 'this is a test article written in an object sometimes it can be longer. this is a test article written in an object sometimes it can be longer',
  date: '21/11/2023',
  author: 'Hugo Heynard'
}

displayPost(testObjPost)
displayPost(testObjPost)
displayPost(testObjPost)

