const { required } = require("joi");
const mongoose = require("mongoose");
const passportLocalMongoose=require('passport-local-mongoose');

const userschema=new mongoose.Schema({
    email:{
        type:String,
        trim:true,
        required:true
    }
})
userschema.plugin(passportLocalMongoose);
let User=mongoose.model('User',userschema);


module.exports=User;