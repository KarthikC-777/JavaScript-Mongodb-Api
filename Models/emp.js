const mongoose=require("mongoose");
const { StringDecoder } = require("string_decoder");
const Emp= new mongoose.model("Employeeinfo",{
    name:String,
    age:Number,
    salary:Number,
    project:String,
    iscompleted:Boolean


});
module.exports=Emp;