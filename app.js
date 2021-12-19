const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const proRouter=require("./routes/pro_routes");

var app=express();


app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//app.use('/uploads',express.static('uploads'));

app.use("/products",proRouter);

app.listen(3005,()=>{
    console.log("Port is listening on 3005");
});