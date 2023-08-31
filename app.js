const express=require('express');
const app=express();
const bodyParser = require('body-parser');
const adminData=require('./routes/admin');
const shopRoutes=require('./routes/shop.js');
const path=require('path');

app.set('view engine', 'pug');//sets view-engine --> pug & express would use this pug engine to render dynamic content

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")));
// here the req is funneled through all the folders serverd static till req is hit


// app.use("/",(req,res,next)=>{
//     next();
// });


app.use('/admin',adminData.routes);// use filtring with '/admin'
app.use(shopRoutes);

// make sure req reaches 404 page if no req are handled

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"views","404.html")); 
})



app.listen(3333,()=>{
    console.log("App runs at 3333");
});