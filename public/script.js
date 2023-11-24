
import { API_ENDPOINT } from "../API/endpoint.js";
import { displayPost } from "../my_JS_modules/blogFunctions/displayPost.js";




//const button = document.getElementById('loginButton')
//button.addEventListener ("click", console.log, 'he')





window.addEventListener("load", async (event) => {
  
  
  
});

const test = async () => {
  try {
    const response = await fetch('http://127.0.0.1:3000/data');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

test();

