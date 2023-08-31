const express=require('express');

const rootPath=require('../util/path');

const path=require('path');

const router=express.Router();

const adminData=require('./admin');

router.get("/users",(req,res,next)=>{
    res.send('<h1>this is /users</h1>');
});



router.get("/",(req,res,next)=>{
    //res.contentType('content/html');

    //console.log(adminData.products);

    res.render('shop');//as we have shop as default render engine we just say pug
    //Now we change the respone to shop.pug for dynamic content support
    //res.sendFile(path.join(rootPath,'/views','shop.html'));
    //res.sendFile(path.join(__dirname,'../views','shop.html'));
    //here this path join enables cross os compatability
});

module.exports=router;