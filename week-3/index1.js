//using global cache middleware
const express=require("express");
const app=express();

app.use(express.json()); //comes before of all the routes

app.post("/health-checkup", function(req,res){
    //input in postman inside body {"kidneys":[1,2]}
    const kidneys=req.body.kidneys;
    const kidneyLength=kidneys.length;
    console.log("done");
    res.send("You have "+kidneyLength+" kidneys");
})

//global caches //always written at the end of all the routes
//error handling middleware
app.use(function(err,req,res,next)  
{
    res.status(500).json({
        "msg":"Sorry something is up with our server"
    })
})

app.listen(3000);