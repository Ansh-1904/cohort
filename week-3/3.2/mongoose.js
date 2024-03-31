const mongoose=require("mongoose")
const express=require("express");
const app=express();
app.use(express.json())

mongoose.connect("mongodb+srv://admin_ansh:Ansh%401904@cluster0.ygdjwdo.mongodb.net/user_app")

const User=mongoose.model("User",{
    name:String,
    email:String,
    password:String
})

app.post("/signup",function(req,res){
    if(existingUser){
        return res.status(400).send("Username already exist");
    }

    const user=new User({
        name:"Ansh Solanki",
        email:"solankiansh3693@gmail.com",
        password:"Ansh@1904"
    })
    
    user.save();

    res.json({
        msg:"User created successfully"
    })
})