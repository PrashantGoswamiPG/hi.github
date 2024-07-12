const {productschema,reviewschema}=require('./schema');

const validateProduct =(req,res,next)=>{
    const {name,img,about}=req.body;
    const {error}=productschema.validate({name,img,about});
    if(error){
        console.log('e')
        return;
    }
    next();
}


const validateReview =(req,res,next)=>{
    const {rating,comment}=req.body;
    const {error}=reviewschema.validate({rating,comment});
    if(error){
        console.log('err')
        return;
    }
    next();
}


module.exports={validateProduct,validateReview};