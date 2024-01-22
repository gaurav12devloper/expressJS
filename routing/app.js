import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const app=express();
const port=process.env.PORT || 3000;
import {join} from 'path';


//routes
app.get('/',(req,res)=>{
    //res.render('index');
    res.sendFile(join(process.cwd(),'views','index.ejs'));
});

app.post('/',(req,res)=>{
    const Name = req.body.name;
    console.log(Name);
    res.render('index', { Name });
});

app.all('/gaurav',(req,res)=>{
    res.send('All method');
});


//string path
app.get('/about',(req,res)=>{
    res.send('about page');
});

// string pattern ..



app.get('/cbexample2',(req,res,next)=>{
    console.log('first callback');
    next();
},(req,res,next)=>{
    console.log('second callback');
    next();
},(req,res)=>{  
    res.send('third callback');
});

app.get('/contact',(req,res)=>{
    // res.send('contact page');
    res.json({
        name:'gaurav',
        age:20
    });
    });

// if path not math above then it will execute below, keep it at last
app.all('*' ,(req,res)=>{
    res.send('page not found');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});