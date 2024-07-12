const mongoose = require("mongoose");


const productschema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    img:{
        type:String,
        trim:true
    },
    about:{
        type:String,
        required:true
    },
    reviews:[
        {
        type: mongoose.Schema.Types.ObjectId ,
        ref:'Review'
        }
    ]

})

let Product=mongoose.model("Product",productschema);

module.exports=Product;