const app=require('express')();
const bodyParser = require('body-parser');
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop.js');
const path=require('path');

app.use(bodyParser.urlencoded({extended:false}))

app.use("/",(req,res,next)=>{
    next();
});


app.use('/admin',adminRoutes);// use filtring with '/admin'
app.use(shopRoutes);

// make sure req reaches 404 page if no req are handled

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"views","404.html")); 
})



app.listen(3333,()=>{
    console.log("App runs at 3333");
});