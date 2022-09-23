// const mongoose=require('mongoose');
// mongoose.connect("mongodb://localhost:27017/Emp",{useNewParser:true},(err)=>{
//     if(!err)
//     {console.log("Db connected");
//     }
// else{
//     console.log("error in connecting DB");
// }
// });
const mongoose =require("mongoose");
const url ='mongodb://localhost:27017/Emp';
mongoose.connect(url,{useNewUrlParser:true});