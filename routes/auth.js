const express=require('express');
const path=require('path');
const User = require('../models/User');
const passport = require('passport');
const router=express.Router();

router.get('/register',(req,res,next)=>{
    res.render('auth/signup');
})

router.get('/login',(req,res,next)=>{
    res.render('auth/login');
})

router.post('/login',
passport.authenticate('local',{failureRedirect:'/login',failureMessage:true}),
(req,res)=>{
    res.redirect('/products')
})

router.post('/register',async(req,res)=>{
    let {email,password,username}=req.body;
    const user=new User({email,username})
    const newUser= await User.register(user , password);
    res.redirect('/login');
})

router.get('/logout',(req,res)=>{
    ()=>{
        req.logout();
    }
    res.redirect('/login');
})

module.exports=router;