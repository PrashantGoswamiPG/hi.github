const mongoose = require("mongoose");
const Product=require("./models/Product");

const defaultproducts=[
    {
        name:"iphone",
        img:"https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww",
        about:"best"
    },
    {
        name:"macbook",
        img:"https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww",
        about:"best"
    }
]

async function seedDB(){                //when use mongoose method need to handel promise
    await Product.insertMany(defaultproducts);
    console.log("seed succseful");
}

module.exports=seedDB;