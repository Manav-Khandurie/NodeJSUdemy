const express=require('express');

const rootPath=require('../util/path');

const path=require('path');

const router=express.Router();

router.get("/users",(req,res,next)=>{
    res.send('<h1>this is /users</h1>');
});



router.get("/",(req,res,next)=>{
    //res.contentType('content/html');
    res.sendFile(path.join(rootPath,'/views','shop.html'));
    //res.sendFile(path.join(__dirname,'../views','shop.html'));
    //here this path join enables cross os compatability
});

module.exports=router;