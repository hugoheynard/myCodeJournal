import { express } from 'express';
import { fetchPosts } from '../my_JS_modules/dbFunctions/fetchPosts';

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Hello world !!');
});

app.listen(PORT, () => {
    console.log('Server app listening on port ' + port);
});

fetchPosts().then(postArray => postArray.forEach(post => console.log(post)));
