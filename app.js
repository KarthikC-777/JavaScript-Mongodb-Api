const express=require('express');
const { emitKeypressEvents } = require('readline');
const Emp = require('./Models/emp');
const app=express();
app.use(express.json());
require("./Db/dbConnection");
require("./Models/emp");
app.listen(5000,err=>{
    if(!err)
    {
        console.log("Server running on port 5000");
    }
    else{
        console.log("failed");
    }
});
app.get("/emp",async(req,res)=>{
    let data=await Emp.find();
    console.log(data);
    res.status(201).json({
        status:"Success",
        Result:data.length,
        data:{
            EmployeeInfo:data
        }


    })
});
app.post("/emp",async(req,res)=>{
    const emp= await new Emp(req.body);
    emp.save()
    .then(()=>
    {
        console.log(`user created succesfully---${emp}`);

    })
    .catch((err)=>{
        console.log(`failed to create user${err}`);

    });

    res.status(201).json({
        status:"Success",
        data:{
            EmployeeInfo:emp
        }

    });
})

app.get("/emp/:_id",async(req,res)=>{
    // const newId=req.params.name;
    // // const newEmp= await Emp.find(id=>id===newId)
    // let emp= await Emp.find();
    // const e=emp.find(name=>name===newId)
    // console.log(e);

    const id=req.params._id;
    const emp=await Emp.findById(id);
    res.status(200).send(emp);

//     const newId=req.params.id;
//     const emp= JSON.parse( await Emp.find());
//    console.log(emp);
    // res.send(emp);

    
 
    
    // res.status(200).json({
    //     message:"Successful",
    //     data:{
    //         Employeeinfo:newEmp
    //     }
    // });

})

app.put("/emp/:_id",async(req,res)=>{
   console.log(req.params)
    const emp=await Emp.updateOne(req.params,{$set:req.body});
    //emp.save()
    // .then(()=>
    // {
    //     console.log(`user updated succesfully---${emp}`);

    // })
    // .catch((err)=>{
    //     console.log(`failed to create user${err}`);

    // });

console.log(emp);
    res.status(201).json({
        status:"Success",
      
        message:"updated Successfully"

    });
});
app.delete("/emp/:_id",async(req,res)=>{
    const emp =await Emp.deleteOne(req.params);
    console.log(req.params);
    // emp.save()
    // .then(()=>
    // {
    //     console.log(`user Deleted succesfully---${emp}`);

    // })
    // .catch((err)=>{
    //     console.log(`failed to deleted user${err}`);

    // });
    

   
    res.status(201).json({
        status :"success",
        message:"Successsfuly deleted"

    });

});




// app.put("/emp/:name",async(req,res)=>{
//     console.log(req.params)
//      const emp=await Emp.updateOne({name:req.params.name},{$set:req.body});
     //emp.save()
     // .then(()=>
     // {
     //     console.log(`user updated succesfully---${emp}`);
 
     // })
     // .catch((err)=>{
     //     console.log(`failed to create user${err}`);
 
     // });
 
//  console.log(emp);
//      res.status(201).json({
//          status:"Success",
       
//          message:"updated Successfully"
 
//      });
//  });