const app=require('express')();
const bodyParser = require('body-parser');
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop.js');

app.use(bodyParser.urlencoded({extended:false}))

app.use("/",(req,res,next)=>{
    next();
});


app.use('/admin',adminRoutes);// use filtring with '/admin'
app.use(shopRoutes);

// make sure req reaches 404 page if no req are handled

app.use((req,res,next)=>{
    res.status(404).send('<h1>404 Error Occured</h1>');
})



app.listen(3333,()=>{
    console.log("App runs at 3333");
});