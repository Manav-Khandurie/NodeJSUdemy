const express=require('express');
const path=require('path');
const rootPath=require('../util/path');
const Router=express.Router();

Router.use("/add-product",(req,res,next)=>{
    res.sendFile(path.join(rootPath,'views','add-product.html'));
});

Router.post("/product",(req,res,next)=>{
    console.log(req.body);
    res.send("<h1>Hello express</h1>");
});

module.exports=Router;