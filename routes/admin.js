const express=require('express');

const Router=express.Router();

Router.use("/add-product",(req,res,next)=>{
    res.send('<form action="/admin/product" method="post"><input type="text" name="title"><button type="submit">Add product</button></input></form>');
});

Router.post("/product",(req,res,next)=>{
    console.log(req.body);
    res.send("<h1>Hello express</h1>");
});

module.exports=Router;