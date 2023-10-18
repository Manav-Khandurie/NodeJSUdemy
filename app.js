const express=require('express');
const app=express();
const bodyParser = require('body-parser');
const path=require('path');


const error404Controller=require('./controllers/error');

const adminRoutes=require('./routes/admin.js');
const shopRoutes=require('./routes/shop.js');


app.set('view engine', 'ejs');//sets view-engine --> pug & express would use this pug engine to render dynamic content , later to handlebars
app.set('views','views');//directory where views are
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")));
// here the req is funneled through all the folders serverd static till req is hit


// app.use("/",(req,res,next)=>{
//     next();
// });


app.use('/admin',adminRoutes);// use filtring with '/admin'
app.use(shopRoutes);

// make sure req reaches 404 page if no req are handled

app.use(error404Controller.error404);



app.listen(3333,()=>{
    console.log("App runs at 3333");
});