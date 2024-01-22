import express from "express";
const router = express.Router();


//all teacher route
router.get('/app',(req,res)=>{
    res.send('all teacher page');
});

router.post('/create',(req,res)=>{
    res.send('new studnet added');
}
);

router.put('/update',(req,res)=>{
    res.send('teacher updated');
});

router.delete('/delete',(req,res)=>{
    res.send('teacher deleted');
});

export default router;