const express=require('express');
const path=require('path');
const rootPath=require('../util/path');
const Router=express.Router();

const products=[];

Router.get("/add-product",(req,res,next)=>{
    res.sendFile(path.join(rootPath,'views','add-product.html'));
});

Router.post("/add-product",(req,res,next)=>{
    console.log(req.body);
    products.push({title : req.body.title});
    res.redirect("/");
});

Router.post("/product",(req,res,next)=>{
    console.log(req.body);
    res.send("<h1>Hello express</h1>");
});

// module.exports=Router;

exports.routes=Router;
exports.products=products;