'Access-Control-Allow-Origin'
const express = require('express');
const route = express.Router();
const mytype = require('../schimaset/schima');


route.get("/",(req,res)=>{
    res.send("welcome to express js");
})

route.get("/about",(req,res)=>{
    res.send("welcome to about page");
})

/*get api data*/
route.get("/getalldata",async(req,res)=>{
    const alldata = await mytype.find();
    res.json(alldata);
    console.log(alldata);
});

route.post("/create",async(req,res)=>{
    const {email,phone,gender,pass,dob,profile} = req.body;
    const adduser = await new mytype({
        phone,gender,pass,dob,email,profile
    });
    await adduser.save();
    res.status(201).json(adduser);
    console.log(adduser);
});




// delete api
route.delete("/deleterecord/:id",async(req,res)=>{
    const {id} = req.params;
    const a = await mytype.findByIdAndDelete({_id:id})
    console.log(a);
    res.status(201).json(a);
});
 
/*single data api*/
route.get("/single/:id",async(req,res)=>{
    const {id} = req.params;
    const singledata = await mytype.findById({_id:id});
    res.json(singledata);
    console.log(singledata);
});

route.patch("/updaterecord/:id",async(req,res)=>{
    const {id} = req.params;
    const recordupdate = await mytype.findByIdAndUpdate(id,req.body,{new:true});
    console.log(recordupdate);
    res.status(201).json(recordupdate);
});


/* login api */

route.post("/login", async(req,res)=>{
    console.log(req.body);
    const {email,pass} = req.body;
      
    if(!email || !pass){
        return res.status(422).json({error:"user and password don't match"});
       
    }
    else{
        const uservalidation = await mytype.findOne({email:email});
        console.log(uservalidation);
        if(uservalidation.email===email && uservalidation.pass===pass)
        {
            res.status(200).json({message:'welcome',status: 201}); 
        }
        else{
            res.status(250).json({error:"password not match"});
        }
    }
});


module.exports=route;