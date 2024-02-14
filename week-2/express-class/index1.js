const express=require("express")
const app=express();

var users=[{
    name:"Ansh",
    kidneys:[{
        healthy:false
    }]
}]

app.use(express.json())

app.get("/",function(req,res){
    const anshsKidney=users[0].kidneys
    const numberOfKidney=anshsKidney.length;
    let healthyKidney=0;
    for(i=0;i<anshsKidney.length;i++)
    {
        if(anshsKidney[i].healthy)
        {
            healthyKidney+=1
        }
    }

    const unhealthyKidneys=numberOfKidney-healthyKidney;

    res.json({
        numberOfKidney,
        healthyKidney,
        unhealthyKidneys
    })
})

app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done"
    })
})

app.listen(3000)