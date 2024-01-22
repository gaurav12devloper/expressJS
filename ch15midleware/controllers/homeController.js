import dotenv from 'dotenv';
dotenv.config();

const home_controller=(req,res)=>{
    res.render('index');
}

export {home_controller}