// npm install ejs: use ejs template engine
import { join } from 'path';
import express from 'express';
const app = express();
const port=process.env.PORT || 3000;
import web from './routes/web.js';


// setup diresctory where template files are located
//app.set('views','./views'); // non need to setup if foler name you keep is views

//setup template engine to use
app.set('view engine','ejs');

// setup for static files
app.use(express.static(join(process.cwd(),'public'))); // now you can access public folder files

//load router
app.use('/',web);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});