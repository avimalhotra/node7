const express=require('express');
let router=express.Router();

router.get('/',(req,res)=>{
    res.status(200).send("Admin route");
});
router.get('/edit',(req,res)=>{
    res.status(200).send("Admin Edit Page");
});
router.get('/add',(req,res)=>{
    res.status(200).send("Admin Add Page");
});
router.get('/remove',(req,res)=>{
    res.status(200).send("Admin Remove Page");
});


module.exports=router;