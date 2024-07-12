const express=require('express');
const path=require('path');
const Product=require('../models/Product')
const router=express.Router();
const validateProduct=require('../middleware');
const Review = require('../models/Review');

//to show all prducts
router.get('/products',async(req,res)=>{
    let products=await Product.find({});
    res.render('products/index',{products});
})

//to add new product
router.get('/product/new',(req,res)=>{
    // req.flash('msg','new product edited succesfully');
    res.render('products/new');
    
})


//acutal save
router.post('/products',async(req,res)=>{
    let {img,name,about}=req.body;
    await Product.create({img,name,about});
    res.redirect('/products')
})

//show particular product
router.get('/products/:id',async(req,res)=>{
    let {id}=req.params;
    let found= await Product.findById(id).populate('reviews');
    res.render('products/show',{found,msg:req.flash('msg')});
})


//edit
router.get('/products/:id/edit',async(req,res)=>{
    let {id}=req.params;
    let previousdata= await Product.findById(id)
    res.render('products/edit',{previousdata});
})

//to actual edit in database

router.patch('/products/:id',async(req,res)=>{
    let {id}=req.params;
    let {img,name,about}=req.body;
    await Product.findByIdAndUpdate(id,{img,name,about})
    req.flash('success','edited succesfully')
    res.redirect(`/products/${id}`)
})

router.delete('/products/:id',async(req,res)=>{
    let {id}=req.params;
    const product=await Product.findById();

    // for (let i of product.reviews){
    //     await Review.findByIdAndDelete(id);           //first delete reviews then product
    // }
    await Product.findByIdAndDelete(id);
    res.redirect('/products')
})

module.exports=router;