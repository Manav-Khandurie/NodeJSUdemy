const express=require('express');
const app=express();
const bodyParser = require('body-parser');
const adminData=require('./routes/admin');
const shopRoutes=require('./routes/shop.js');
const path=require('path');
const expressHbs=require('express-handlebars');

// app.engine('hbs' , expressHbs());
app.set('view engine', 'ejs');
//sets view-engine --> pug & express would use this pug engine to render dynamic content , later to handlebars
app.set('views','views');//directory where views are
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
    res.status(404).render('404',{ pageTitle:'Page Not Found!!!'});
})



app.listen(3333,()=>{
    console.log("App runs at 3333");
});