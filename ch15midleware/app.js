import express from 'express';
const app = express();
const port=process.env.PORT || 3000;
import {join} from 'path'; // to join path
import web from './routes/web.js';
import logger from './middlewares/logger-middleware.js';

// setup diresctory where template files are located
//app.set('views','./views'); // non need to setup if foler name you keep is views

//setup template engine to use
app.set('view engine','ejs');

// setup for static files
app.use(express.static(join(process.cwd(),'public'))); // now you can access public folder files


//aplication level middleware
//app.use(logger);  // it will be called for every request

app.use('/about',logger); // it will be called for only about request


//load router
app.use('/',web);


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
