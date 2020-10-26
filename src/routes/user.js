const express=require('express');
let router=express.Router();

router.get('/',(req,res)=>{
    res.status(200).send("User route");
});
router.get('/view',(req,res)=>{
    res.status(200).send("User View");
});


module.exports=(router);