import express from "express";
const router = express.Router();


//all student route
router.get('/all',(req,res)=>{
    res.send('all student page');
});

router.post('/create',(req,res)=>{
    res.send('new studnet added');
}
);

router.put('/update',(req,res)=>{
    res.send('student updated');
});

router.delete('/delete',(req,res)=>{
    res.send('student deleted');
});

export default router;