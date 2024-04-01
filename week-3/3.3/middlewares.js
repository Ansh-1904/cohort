const express=require("express")
const app=express();

function isOldEnoughMiddleware(req,res,next)
{
    const age=req.query.age;

    if(age>=14)
    {
        next();
    }
    else{
        res.status(411).send(
        
            {
                msg:"Sorry you are not of age yet"
            }
        )
    }
}

app.get("/ride1",isOldEnoughMiddleware,function(req,res){
    res.json({
        msg:"You have successfully riden ride 1"
    })
})

app.get("/ride2",isOldEnoughMiddleware,function(req,res){
    res.json({
        msg:"You have successfully riden ride 2"
    })
})

app.listen(3000);