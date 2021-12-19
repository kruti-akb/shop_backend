const mongoose=require('../config/db');

var proSchema=mongoose.Schema({
    name:String,
    price:Number,
    returnable:Boolean
});

var Product=mongoose.model("Product",proSchema,"products");

module.exports=Product;