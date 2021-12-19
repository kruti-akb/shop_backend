var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/shopping_db",(error)=>{console.warn(error)});

var db=mongoose.connection;

db.addListener('error',()=>{console.warn('db connection error')});

module.exports=mongoose;