//using middelwares
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

app.post("/health_checkup", function(req,res){

    res.json({
        msg:"Hii there"
    })
});

app.listen(3000);