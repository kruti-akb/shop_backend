const proRouter=require('express').Router();
var multer=require('multer');  
const path=require('path');
const Product=require("../model/product");

// var options = multer.diskStorage({ destination : "./uploads",
// filename:function(req,file,cb){
//     cb(null,(Math.random().toString(30).slice(5,10))+(Date.now())+path.extname(file.originalname));
// }  
// });  

// var upload=multer({storage:options});

//proRouter.post("/",upload.single('img'),(req,res)=>{
    proRouter.post("/",(req,res)=>{

    const url = req.protocol + '://' + req.get('host');
    var pro1=new Product({
        name:req.body.name,
        price:req.body.price,
        returnable:req.body.returnable
        //img:url + '/uploads/' + req.file.filename
    });

    pro1.save((err,prouct)=>{
        if(err) return res.status(500).send("Error adding product");

        res.status(200).send(prouct);
    });

});

proRouter.get('/',(req,res)=>{

    Product.find((err,products)=>{
        if(err) return res.status(500).send("Error fetching products");

        res.status(200).send(products);
    });

});

proRouter.get('/:id',(req,res)=>{

    Product.findById({"_id":req.params.id},(err,product)=>{
        if(err) return res.status(500).send("Error fetching product");

        res.status(200).send(product);
    });

});

proRouter.delete('/:id',(req,res)=>{

    Product.findByIdAndRemove({"_id":req.params.id},(err)=>{
        if(err) return res.status(500).send("Error deleting product");

        res.status(200).send();
    });

});

proRouter.put('/:id',(req,res)=>{

    Product.findByIdAndUpdate({"_id":req.params.id},req.body,{new:true},(err,prodct)=>{
        if(err) return res.status(500).send("Error updating product");

        res.status(200).send(prodct);
    });

});

module.exports=proRouter;

