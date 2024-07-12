const express=require('express');
const path=require('path');
const Product = require('../models/Product');
const Review = require('../models/Review');
const router=express.Router();

router.post('/products/:id/review',async(req,res)=>{
    let {id}=req.params;
    let {rating,comment}=req.body;
    const product=await Product.findById(id);
    const review= new Review({rating,comment})

    product.reviews.push(review);
    await review.save();
    await product.save();
    req.flash('msg', 'thanks for review')
    res.redirect(`/products/${id}`)
})

// router.delete('/products/review/:id/:productId', async(req,res)=>{
//     const {id, productId } = req.params;
//     await Review.findByIdAndDelete(id);

//     res.redirect(`/product/${productId}`)

// })



module.exports=router;