const express=require('express');

const router=express.Router();

router.get("/users",(req,res,next)=>{
    res.send('<h1>this is /users</h1>');
});



router.get("/",(req,res,next)=>{
    res.send('<h1>this is /</h1>');
});

module.exports=router;