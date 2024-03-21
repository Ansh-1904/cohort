//using middelwares
const { query } = require("express");
const express=require("express")
const app=express();

let numberOfRequest=0;
function calRequests(res,req,next)
{
    numberOfRequest++;
    console.log(numberOfRequest);
    next();
    
}

app.use(calRequests);  //use line means that use calRequests middleware at every post request.
app.use(express.json());

app.post("/health_checkup", function(req,res){
    console.log(req.body); //{"msg":"Done"} //paste this inside body in postman

        
    req.header;
    req,query;
    res.json({
        msg:"Hii there"
    })
});

app.listen(3000);