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
    const isHealthy=req.body.isHealthy;
    console.log("Received POST request with isHealthy value:", isHealthy);

    users[0].kidneys.push({
        healthy: isHealthy
    });

    console.log("Updated kidneys array:", users[0].kidneys);

    res.json({
        msg: "Done"
    });
});


app.put("/",function(req,res){
    let anyUnhealthy = false;

    // Check if any kidneys are unhealthy
    for(let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            anyUnhealthy = true;
            break;
        }
    }

    // If no unhealthy kidneys, send appropriate response
    if (!anyUnhealthy) {
        return res.status(400).json({ error: "All kidneys are already healthy." });
    }

    // If there are unhealthy kidneys, make them healthy
    for(let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }

    res.json({ message: "All kidneys are now healthy." });
});


app.delete("/",function(req,res){

    if(checkForNumberOfBadKidneys())
    {
        const newkidneys=[]
        for(let i=0;i<users[0].kidneys.length;i++)
        {
            if(users[0].kidneys[i].healthy)
            {
                newkidneys.push({
                    healthy:true
                })
            }

        }
        users[0].kidneys=newkidneys
        res.json({
            msg: "Done"
        });
    }
    else{
        res.status(411).json({
            msg: "you have no bad kidneys"
        });
    }
    
})

function checkForNumberOfBadKidneys()
{
    let atleatOneBadKidney=false;
    for(let i=0;i<users[0].kidneys.length;i++)
    {
        if(!users[0].kidneys[i].healthy)
        {
            atleatOneBadKidney=true
        }

    }
    return atleatOneBadKidney
}

app.listen(3000)