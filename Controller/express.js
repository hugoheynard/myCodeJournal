import express from 'express';
import { fetchPosts } from '../my_JS_modules/dbFunctions/fetchPosts.js';


const app = express();
const PORT =  3000;


app.listen(PORT, () => {
    console.log('Server app listening on port ' + PORT);
});



app.get('/articles', (req, res) => {
  res.send(fetchPosts())
});



