
const express =require ('express');
const mongoose=require('mongoose');
const path=require('path');
const seedDB=require('./seed');
const ejsMate=require('ejs-mate');
const methodoverride=require('method-override');
const session=require("express-session");
const flash=require("connect-flash");
const LocalStrategy=require('passport-local');
const passport = require('passport');
const User=require('./models/User')

const productrouter=require('./routes/product')
const reviewrouter=require('./routes/review')
const authrouter=require('./routes/auth');


const app=express();


let configSession={
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }
app.use(express.urlencoded({extended:true}));
app.engine('ejs',ejsMate);
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,'public')))
app.use(methodoverride('_method'))
app.use(flash());
app.use(session(configSession));

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());





app.use((req,res,next)=>{
    res.locals.success=req.flash('success','successful');
    res.locals.error=req.flash('error','error found');
    next();
})

//passpoort
passport.use(new LocalStrategy(User.authenticate()));


mongoose.connect('mongodb://127.0.0.1:27017/E-commerce')
.then(()=>{
    console.log("succesful connect db");
})
.catch((err)=>{
    console.log(err)
})



// seedDB()          //when delete in db then run one time because if run again save again

app.use(productrouter);
app.use(reviewrouter); //so that hr product le lya path check kia jya
app.use(authrouter);

app.listen(4000,()=>{
    console.log("4000 port")
})

